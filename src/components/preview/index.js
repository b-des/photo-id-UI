import { Component, h } from 'preact';
import { Constants } from '../../shared/event-emitter/constants';
import axios from 'axios';
import LoadingMask from 'react-loadingmask';
import { useAlert } from 'react-alert';
import React from 'preact/compat';
import fabric from 'fabric/dist/fabric.min';
import { getBoundingRectangleAfterRotate, transformCoordinateAfterRotate } from '../../model/point';
import Options from './options';
import ColorAdjustment from './adjustment';

const initialState = {
	preview: null,
	quantity: 1,
	corner: { value: 'none' },
	loadingAnimation: null,
	dimensions: {
		pictureWidth: 0,
		pictureHeight: 0
	},
	originalImageUrl: null,
	noBgImageUrl: null,
	uid: null,
	hue: { value: 'color' },
	extraOptions: [],
	networkError: false,
	selectedType: Constants.GENERATED,
	inProcess: false,
	isOptionsChanged: false,
	colorAdjustment: {
		brightness: 100,
		saturation: 100,
		contrast : 100,
		css: `brightness(100%) saturate(100%) contrast(100%)`
	}
};

class Preview extends Component {
	constructor() {
		super();
		this.image = new Image();
		this.alert = useAlert();
		this.dimensionMultiplier = 1;
		this.previewCanvasWidth = 250;
		this.corners = null;
		this.colors = null;
		this.state = initialState;
		this.cropData = null;

	}


	componentDidMount() {
		this.dimensionMultiplier = this.previewCanvasWidth / this.props.standard.dimensions.pictureWidth;

		let dimensions = {
			pictureWidth: parseFloat(this.props.standard.dimensions.pictureWidth) * this.dimensionMultiplier,
			pictureHeight: parseFloat(this.props.standard.dimensions.pictureHeight) * this.dimensionMultiplier
		};

		// initialize canvas for preview
		this.initPreviewCanvas(dimensions);

		// set canvas size for custom preview
		this.setPreviewCanvasSize(dimensions);

		// generate lists of options
		this.generateOptionsList();

		// send request to generate photo
		this.loadGeneratedPreview({});

	}


	componentDidUpdate(prevProps, prevState, nextContext) {
		console.log(this.state);
		// send request to generate photo
		this.loadGeneratedPreview(prevProps);

		// set canvas size for custom preview
		if (prevProps.standard !== this.props.standard) {
			this.setPreviewCanvasSize(this.props.standard.dimensions);
		}

		// register events listener when open editor
		if (this.props.isEditorOpen)
			this.initEventListeners();

		// call callback on option changed
		if (this.state.isOptionsChanged)
			this.sendOptionsToCallback();
	}

	initPreviewCanvas(dimensions) {
		this.setState({
			dimensions
		});
		// fabric.js instance
		this.fabric = fabric.fabric;

		// image instance to storing custom preview picture
		this._watermakrImage = new Image();

		// image instance to storing custom picture for rendering
		this._renderImage = new Image();

		// visible canvas for preview
		this._canvas = document.querySelector('#canvasPreview');
		this._canvas = new this.fabric.Canvas('canvasPreview');
		this._canvas.hoverCursor = 'pointer';
		this._canvas.selection = false;

		// tmp canvas to store image for rendering
		if (this.props.debug) {
			this._renderCanvas = new this.fabric.Canvas('developPreview');
		}
		else {
			this._renderCanvas = new this.fabric.Canvas();
		}
	}

	initEventListeners() {
		this.props.emitter.off(Constants.LOADED_IMAGE);
		this.props.emitter.off(Constants.UPDATE_LANDMARK);

		this.props.emitter.on(Constants.LOADED_IMAGE, (data) => {
		});

		this.props.emitter.on(Constants.UPDATE_LANDMARK, data => this.cropImage(data));
	}

	setPreviewCanvasSize(dimensions) {
		this._canvas.setHeight(dimensions.pictureHeight);
		this._canvas.setWidth(dimensions.pictureWidth);
	}

	generateOptionsList() {
		let standard = this.props.standard;
		let corner = standard.corners.length ? standard.corners[0] : initialState.corner;
		let hue = standard.colors.length ? standard.colors[0] : initialState.hue;
		let extraOptions = [];
		if (standard.extraOptions) {
			extraOptions = standard.extraOptions.map(option => {
				return [parseInt(option.id), parseInt(option.options[0].id)];
			});
		}
		this.setState({
			corner: corner,
			hue: hue,
			isOptionsChanged: true,
			extraOptions: extraOptions
		});
		this.corners = this.props.standard.corners && this.props.standard.corners.length ?
			this.props.standard.corners.map(corner => {
				return <option value={corner.id}>{corner.name}</option>;
			}) : null;

		this.colors = this.props.standard.colors && this.props.standard.colors.length ?
			this.props.standard.colors.map(color => {
				return <div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" name="color"
						   checked={hue.value === color.value}
						   onClick={this.handleColorChange.bind(this)} id={`color-${color.id}`}
						   value={color.id}/>
					<label className="form-check-label" htmlFor={`color-${color.id}`}>{color.name}</label>
				</div>;
			}) : null;
	}


	cropImage(data, generateRender = false) {
		return new Promise((resolve, reject) => {


			this.cropData = data;
			// calculate size of bounding canvas for image after rotation
			let nSize = getBoundingRectangleAfterRotate(this._watermakrImage.width, this._watermakrImage.height, 90 - data.angle.deg);

			// center of bounding canvas
			let cx = nSize.width / 2;
			let cy = nSize.height / 2;

			// calculate coordinates of cropping area
			let cropArea = data.cropArea.map((item) => {
				// convert point from percents to absolute coordinate
				item = {
					x: this._watermakrImage.width / 100 * item.x,
					y: this._watermakrImage.height / 100 * item.y
				};
				// increase each point applying new host size
				item = {
					x: item.x + (nSize.width - this._watermakrImage.width) / 2,
					y: item.y + (nSize.height - this._watermakrImage.height) / 2
				};
				// transform point according to rotation
				let transformedPoint = transformCoordinateAfterRotate([cx, cy], item, (90 - data.angle.deg) * Math.PI / 180);
				return {
					x: transformedPoint[0],
					y: transformedPoint[1]
				};
			});


			let borderOffsetTop = cropArea[0].y < 0 ? cropArea[0].y : 0;
			let imageParams = {
				angle: 0,
				width: this._watermakrImage.width,
				height: this._watermakrImage.height,
				left: (nSize.width - this._watermakrImage.width) / 2,
				top: (nSize.height - this._watermakrImage.height) / 2 - borderOffsetTop,
				scaleX: 1,
				scaleY: 1
			};
			// create fabric.js object from image
			let fabricImageWithWatermark = new this.fabric.Image(generateRender ? this._renderImage : this._watermakrImage, imageParams);

			// rotate image inside canvas
			fabricImageWithWatermark.rotate(90 - data.angle.deg);

			this._renderCanvas.clear();
			// apply new size for render canvas
			this._renderCanvas.setWidth(nSize.width);
			this._renderCanvas.setHeight(nSize.height);
			this._renderCanvas.backgroundColor = '#fff';
			// add image to canvas
			this._renderCanvas.add(fabricImageWithWatermark);
			//this._renderCanvas.renderAll();

			let cropAreaWidth = (cropArea[0].x - cropArea[1].x);
			let cropAreaHeight = (cropArea[2].y - cropArea[1].y);

			let canvasWidth = this._canvas.getWidth();
			let canvasHeight = this._canvas.getHeight();

			// create image from canvas
			let tmpImage = new Image();
			tmpImage.src = this._renderCanvas.toDataURL();

			tmpImage.onload = () => {
				// get cropped image from canvas
				let croppedImgInstance = new this.fabric.Image(tmpImage, {
					angle: 0,
					width: cropAreaWidth,
					height: cropAreaHeight,
					left: 0,
					top: 0,
					cropX: cropArea[1].x,
					cropY: cropArea[1].y,
					selectable: false

				});
				// put cropped image to render canvas
				// this canvas use for saving custom photo
				this._renderCanvas.clear();
				this._renderCanvas.setWidth(croppedImgInstance.width);
				this._renderCanvas.setHeight(croppedImgInstance.height);
				this._renderCanvas.add(croppedImgInstance);

				if (!generateRender) {
					// copy image for preview
					let imageCopy = Object.create(croppedImgInstance);
					// scale image to fit preview canvas size
					imageCopy.scaleToHeight(canvasHeight);
					imageCopy.scaleToWidth(canvasWidth);
					this._canvas.clear();
					// add image to preview canvas
					this._canvas.add(imageCopy);
				}

				resolve();
			};
		});
	}

	loadGeneratedPreview(prevProps) {
		if (this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
			// create image from url
			this._watermakrImage.src = this.props.imageUrl;
			this._watermakrImage.onload = () => {
				this.setState({
					preview: null,
					originalImageUrl: this.props.imageUrl
				});

				this.createLoadingAnimation();
			};

			let c = this.dimensionMultiplier;
			let chin = 0;
			let crown = 0;
			if (this.props.standard.dimensions.crownTop) {
				crown = parseFloat(this.props.standard.dimensions.crownTop) * c;
				chin = (parseFloat(this.props.standard.dimensions.faceHeight) + parseFloat(this.props.standard.dimensions.crownTop)) * c;
			}
			else if (this.props.standard.dimensions.bottomEyeLine) {
				crown = parseFloat(this.props.standard.dimensions.bottomEyeLine) / 10;
				chin = (parseFloat(this.props.standard.dimensions.faceHeight) + crown) * c;
				crown *= c;
			}
			axios.post(`${this.props.serviceHost}/api/render-photo`, {
				url: this.props.imageUrl,
				previewSize: this.props.previewSize,
				debug: this.props.debug,
				removeBackground: this.props.removeBackground,
				scale: 1,
				dimensions: {
					width: this.props.standard.dimensions.pictureWidth * c,
					height: this.props.standard.dimensions.pictureHeight * c,
					crown: crown,
					chin: chin
				}
			}).then(response => {
				this.handleNetworkResponse(response);
			}).catch(error => {
				this.handleNetworkError();
			});
		}
	}

	handleNetworkResponse(response) {
		if (!response.data.result) {
			if (response.data.error) {
				switch (response.data.error) {
					case Constants.NO_FACE:
						this.alert.error('На фото не обнаружено лица');
						this.props.reset();
						break;
					case Constants.MORE_ONE_FACES:
						this.alert.error('На фото обнаружено более одного лица');
						this.props.reset();
						break;
				}
			}

		}
		else if (response.data.result.base64) {
			this.setState({
				preview: 'data:image/png;base64, ' + response.data.result.base64,
				uid: response.data.result.uid,
				noBgImageUrl: response.data.result.url
			});
			this._renderImage.src = response.data.result.url;
			this._watermakrImage.src = response.data.result.watermark_url;
			this._watermakrImage.onload = () => {
			};
			this.props.onRemoveBackground(response.data.result.watermark_url, response.data.result.is_background_removed);
		}
		else {
			this.networkError();
		}
	}

	handleNetworkError() {
		this.setState({
			preview: '',
			networkError: true
		});
		this.alert.error('Извините, возникла сетевая ошибка');
	}

	saveCustomImage() {

		let payload = {
			b64: null,
			uid: this.state.uid,
			hue: this.state.hue.value,
			corner: this.state.corner.value,
			colorAdjustment: this.state.colorAdjustment,
		};

		// if dimension of final photo is present in pixels
		// save image with exact size
		if (this.props.standard.dimensions.units && this.props.standard.dimensions.units === 'px') {
			payload['size'] = [
				this.props.standard.dimensions.pictureWidth,
				this.props.standard.dimensions.pictureHeight
			];
		}

		if (this.props.standard.extension)
			payload['ext'] = this.props.standard.extension;

		return this.cropImage(this.cropData, true).then(r => {
			payload.b64 = this._renderCanvas.toDataURL();
			return axios.post(`${this.props.serviceHost}/api/save-photo-b64`, payload);
		});

	}

	saveGeneratedImage() {
		let scale = 1;
		let dimensions = this.props.standard.dimensions;

		// if dimension of final photo is present in pixels
		// save image without scaling
		if (!dimensions.units || dimensions.units === 'mm') {
			scale = this._watermakrImage.naturalWidth / dimensions.pictureWidth;
		}

		let payload = {
			url: this.state.originalImageUrl || this.state.noBgImageUrl,
			debug: this.props.debug,
			uid: this.state.uid,
			hue: this.state.hue.value,
			corner: this.state.corner.value,
			scale: scale,
			isOrder: true,
			removeBackground: true,
			colorAdjustment: this.state.colorAdjustment,
			dimensions: {
				width: parseFloat(dimensions.pictureWidth),
				height: parseFloat(dimensions.pictureHeight),
				crown: parseFloat(dimensions.crownTop),
				chin: (parseFloat(dimensions.faceHeight) + parseFloat(dimensions.crownTop))
			}
		};

		if (this.props.standard.extension)
			payload['ext'] = this.props.standard.extension;

		return axios.post(`${this.props.serviceHost}/api/render-photo`, payload);
	}

	createLoadingAnimation() {
		//let animatedCanvas = new this.fabric.Canvas();
		//this.state.dimensions.pictureWidth * this.dimensionMultiplier
		//animatedCanvas.setWidth(250);
		//animatedCanvas.setWidth(333);

		let image = new this.fabric.Image(this._watermakrImage, {
			width: this._watermakrImage.naturalWidth,
			height: this._watermakrImage.naturalHeight,
			left: 0,
			top: 0
		});


		this.setState({
			loadingAnimation: image.toDataURL()
		});

		let animation = `@keyframes scanning {
          50% {
            transform: translateY(${this._canvas.height}px);
          }
        }`;
		let style = document.createElement('style');
		style.innerHTML = animation;
		let ref = document.querySelector('script');
		ref.parentNode.insertBefore(style, ref);

	}


	selectType(type) {
		if (type === Constants.GENERATED && this.state.networkError) {
			this.alert.error('Вы не можете выбрать эту опцию');
			return false;
		}
		this.setState({
			selectedType: type,
			isOptionsChanged: true
		});
	}

	openEditor() {

		this.setState({
			selectedType: Constants.CUSTOM,
			isOptionsChanged: true
		});
		this.props.showEditor.call(this);
	}

	handleQuantityChange(event) {
		let value = parseInt(event.target.value);
		if (isNaN(value) || value < 1 || value > 99) {
			this.alert.error('Неверное значение');
			return false;
		}
		this.setState({
			quantity: value,
			isOptionsChanged: true
		});
	}

	handleCornerChange(event) {
		let corner = this.props.standard.corners
			.filter(corner => corner.id === event.target.value);
		this.setState({
			corner: corner.length ? corner[0] : { value: 'none' },
			isOptionsChanged: true
		});
	}

	handleColorChange(event) {
		let color = this.props.standard.colors
			.filter(color => color.id === event.target.value);
		this.setState({
			hue: color.length ? color[0] : { value: 'color' },
			isOptionsChanged: true
		});
	}

	/**
	 * Create object with selected options and params
	 * @returns {}
	 */
	createResultForOrder() {
		let corner = this.props.standard.corners.filter(corner => corner.value === this.state.corner.value);
		let hue = this.props.standard.colors.filter(color => color.value === this.state.hue.value);

		if (corner.length)
			corner = corner[0];
		if (hue.length)
			hue = hue[0];
		return {
			quantity: this.state.quantity,
			type: this.state.selectedType,
			corner: this.state.corner,
			hue: this.state.hue,
			uid: this.state.uid,
			standard: this.props.standard,
			originalImageUrl: this.state.originalImageUrl,
			extraOptions: this.state.extraOptions
		};
	}

	/**
	 * Send options to callback whe option changed
	 * @param extraOption
	 */
	sendOptionsToCallback(extraOption) {
		// get selected options
		let parameters = this.createResultForOrder();

		// if changed additional option
		// update state
		if (extraOption) {

			let index = parameters.extraOptions.findIndex(obj => obj[0] === extraOption[0]);
			if (index < 0) {
				parameters.extraOptions.push(extraOption);
			}
			else {
				parameters.extraOptions[index] = extraOption;
			}

			this.setState({
				extraOptions: parameters.extraOptions
			});
		}

		// fire callback
		this.props.onOptionChanged.call(this, parameters);

		// set flag to false
		// after sending options to callback
		this.setState({
			isOptionsChanged: false
		});
	}

	/**
	 * Call method when click order button
	 */
	makeOrder() {
		this.setState({
			inProcess: true
		});
		let response = null;
		switch (this.state.selectedType) {
			case Constants.GENERATED:
				response = this.saveGeneratedImage();
				break;
			default:
				response = this.saveCustomImage();
				break;
		}

		response.then(result => {
			let parameters = this.createResultForOrder();
			this.props.onOrderClick.call(this, parameters);
			this.alert.success('Заказ принят в обработку');
			/*this.setState({
				preview: null
			});*/
		}).catch(error => {
			this.alert.error('Извините, возникла сетевая ошибка');
		}).finally(() => {
			this.setState({
				inProcess: false
			});
		});

	}

	adjustPhotoColors(settings){
		this.setState({colorAdjustment: settings})
	}

	render(props, state, context) {
		this.colors = this.props.standard.colors && this.props.standard.colors.length ?
			this.props.standard.colors.map(color => {
				return <div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" name="color"
						   checked={this.state.hue.value === color.value}
						   onClick={this.handleColorChange.bind(this)} id={`color-${color.id}`}
						   value={color.id}/>
					<label className="form-check-label" htmlFor={`color-${color.id}`}>{color.name}</label>
				</div>;
			}) : null;
		return (
			<LoadingMask loading={this.state.preview === null} text={'loading...'} style={{ width: '100%' }}>
				{this.props.debug &&
				<div className="text-center debug-canvas-container">
					<canvas id="developPreview" style={{ background: 'none', margin: '0 auto' }}
							className="img-thumbnail"/>
				</div>
				}
				<div style={{ margin: '0 auto', padding: '10px' }}>

					{this.props.isEditorOpen &&
					<div className="container">
						<div className="row">
							<div className="col text-center">
								<p className="title">Выберите вариант который Вам больше нравится: </p>
							</div>
						</div>
					</div>
					}

					<div className="container previews">
						<div className="row">
							<div className="col" style={{ display: this.props.isEditorOpen ? 'block' : 'none' }}>
								<div
									className={`corner-${this.state.corner.value} preview
									${this.state.selectedType === Constants.CUSTOM ? 'active' : ''}`}
									onClick={this.selectType.bind(this, Constants.CUSTOM)}>
									<canvas id="canvasPreview"
											className={`lower-canvas`}
											style={{
												width: `${this.state.dimensions.pictureWidth}px`,
												height: `${this.state.dimensions.pictureHeight}px`, background: 'none',
												filter: this.state.colorAdjustment.css + (this.state.hue.value === 'gray' ? ' grayscale(100%)' : '')
											}}/>

								</div>
								<p className="label">Ручной режим</p>
							</div>

							<div className="col">
								<div
									className={`corner-${this.state.corner.value} preview
									${this.state.preview === null ? 'preloader-scan' : ''}
									${this.state.selectedType === Constants.GENERATED ? 'active' : ''}`}
									onClick={this.selectType.bind(this, Constants.GENERATED)}>
									<div className="diode">
										<div className="laser"></div>
									</div>
									<div  style={{filter: this.state.colorAdjustment.css}}>
										<svg width={`${this.state.dimensions.pictureWidth}px`}
											 height={`${this.state.dimensions.pictureHeight}px`} version="1.1"
											 className={this.state.hue.value === 'gray' && this.state.preview ? 'grayscale' : ''}>
											<image xlinkHref={this.state.preview || this.state.loadingAnimation}
												   x="0" y="0" height="100%" width="100%"/>
										</svg>
									</div>

								</div>
								{this.props.isEditorOpen && <p className="label">Автоматический режим</p>}
							</div>
						</div>
					</div>


					{this.state.preview !== null && !this.props.isEditorOpen &&
					<div className={'container text-center'}>
						<p className="bd-highlight text-wrap text-info mt-2">
							{this.state.networkError ?
								<p className="text-danger m-0">
									Извините, в данный момент сервис не может обработать Вашу фотографию.
								</p>
								:
								<p className="m-0">
									Не нравится результат?
								</p>
							}
							Вы можете попробовать перейти в ручной режим:
						</p>
						<button onClick={this.openEditor.bind(this)} type="button" className="btn btn-dark">
							Ручной режим
						</button>
					</div>
					}

					<div className="container mt-3">
						<div className="dropdown text-center">
							<button className="btn btn-outline-info dropdown-toggle btn-sm" type="button" id="dropdownMenuButton"
									data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Управление цветом
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<ColorAdjustment onColorChanged={settings => this.adjustPhotoColors.call(this, settings)}/>
							</div>
						</div>
					</div>

					{this.props.standard.extraOptions &&
					<div className="container mt-3">
						<div className="row">
							<div className="col">
								<Options
									onOptionChanged={option => this.sendOptionsToCallback.call(this, option)}
									options={this.props.standard.extraOptions}/>
							</div>

						</div>
					</div>
					}

					<div className="container mt-3">
						<div className="row">
							<div className="col text-right">
								{//(this.state.preview !== null || this.props.isEditorOpen) &&
									<div className="form-row justify-content-end align-items-center">
										{this.colors && this.colors.length > 1 &&
										<div className="col-md-auto col-sm-1">
											<div className="form-group">
												<div className="input-group mb-2">
													{this.colors}
												</div>
											</div>
										</div>
										}
										{this.corners && this.corners.length > 1 &&
										<div className="col-md-auto col-sm-1">
											<div className="form-group">
												<div className="input-group">
													<select onChange={this.handleCornerChange.bind(this)}
															className={'custom-select'}>
														{this.corners}
													</select>
												</div>
											</div>
										</div>
										}
										<div className="col-md-auto col-sm-1">
											<div className="form-group">
												<div className="input-group">
													<div className="input-group-prepend">
														<div className="input-group-text">
															<label>Количество:</label>
														</div>
													</div>
													<input type="number" className="form-control" min="1" max="99"
														   value={this.state.quantity}
														   onChange={this.handleQuantityChange.bind(this)}/>
												</div>
											</div>
										</div>
										<div className="col-md-auto col-sm-1">
											<div className="form-group">
												<button className={'btn btn-outline-primary w-100 btn-order'}
														disabled={this.state.inProcess}
														onClick={this.makeOrder.bind(this)}>
													{this.state.inProcess ?
														<div>
													<span className="spinner-border spinner-border-sm" role="status"
														  aria-hidden="true"/>
														</div>
														:
														`Заказать (${this.props.price})`
													}

												</button>
											</div>
										</div>
									</div>
								}
							</div>
						</div>
					</div>
				</div>
			</LoadingMask>
		);

	}
}

export default Preview;
