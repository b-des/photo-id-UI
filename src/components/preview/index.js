import { Component, h } from 'preact';
import { Constants } from '../../shared/event-emitter/constants';
import axios from 'axios';
import LoadingMask from 'react-loadingmask';
import { useAlert } from 'react-alert';
import React from 'preact/compat';
import fabric from 'fabric/dist/fabric.min';
import { getBoundingRectangleAfterRotate, transformCoordinateAfterRotate } from '../../model/point';

class Preview extends Component {
	constructor() {
		super();
		this.image = new Image();
		this.alert = useAlert();
		this.dimensionMultiplier = 4;
		this.corners = null;
		this.state = {
			preview: null,
			quantity: 1,
			corner: 0,
			loadingAnimation: null,
			dimensions: {
				pictureWidth: 0,
				pictureHeight: 0
			},
			noBgImageUrl: null,
			uid: null,
			hue: 'color',
			networkError: false,
			selectedType: Constants.GENERATED,
			inProcess: false
		};

	}


	componentDidMount() {
		let dimensions = {
			pictureWidth: this.props.standard.dimensions.pictureWidth * this.dimensionMultiplier,
			pictureHeight: this.props.standard.dimensions.pictureHeight * this.dimensionMultiplier
		};

		// initialize canvas for preview
		this.initPreviewCanvas(dimensions)

		// set canvas size for custom preview
		this.setPreviewCanvasSize(dimensions);

		// generate list of corner options
		this.generateCornersOptionsList();

		// send request to generate photo
		this.loadGeneratedPreview({});

	}


	componentDidUpdate(prevProps, prevState, nextContext) {

		// send request to generate photo
		this.loadGeneratedPreview(prevProps);

		// set canvas size for custom preview
		if (prevProps.standard !== this.props.standard) {
			this.setPreviewCanvasSize(this.props.standard.dimensions);
		}

		// register events listener when open editor
		if (this.props.isEditorOpen)
			this.initEventListeners();

		// call callback when changed options
		if(this.state.preview)
			this.changedOptions();
	}

	initPreviewCanvas(dimensions){
		this.setState({
			dimensions
		});
		this.fabric = fabric.fabric;
		this._canvas = document.querySelector('#canvasPreview');
		this._canvas = new this.fabric.Canvas('canvasPreview');
		this._canvas.hoverCursor = 'pointer';
		this._canvas.selection = false;
		if (this.props.debug) {
			this._tmpCanvas = new this.fabric.Canvas('developPreview');
		}
		else {
			this._tmpCanvas = new this.fabric.Canvas();
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

	generateCornersOptionsList(){
		this.corners = this.props.standard.corners && this.props.standard.corners.length ?
			this.props.standard.corners.map(corner => {
				corner = Object.entries(corner)[0];
				return <option value={corner[0]}>{corner[1]}</option>;
			}) : null;
	}


	cropImage(data) {
		// calculate size of bounding canvas for image after rotation
		let nSize = getBoundingRectangleAfterRotate(this._img.width, this._img.height, 90 - data.angle.deg);

		// center of bounding canvas
		let cx = nSize.width / 2;
		let cy = nSize.height / 2;

		let cropArea = data.cropArea.map((item) => {
			// convert point from percents to absolute coordinate
			item = {
				x: this._img.width / 100 * item.x,
				y: this._img.height / 100 * item.y
			};
			// increase each point applying new host size
			item = {
				x: item.x + (nSize.width - this._img.width) / 2,
				y: item.y + (nSize.height - this._img.height) / 2
			};
			// transform point according to rotation
			let transformedPoint = transformCoordinateAfterRotate([cx, cy], item, (90 - data.angle.deg) * Math.PI / 180);
			return {
				x: transformedPoint[0],
				y: transformedPoint[1]
			};
		});

		let borderOffsetLeft = 0;
		let borderOffsetTop = cropArea[0].y < 0 ? cropArea[0].y : 0;


		this._tmpCanvas.clear();
		let tmpImgInstance = new this.fabric.Image(this._img, {
			angle: 0,
			width: this._img.width,
			height: this._img.height,
			left: (nSize.width - this._img.width) / 2,
			top: (nSize.height - this._img.height) / 2 - borderOffsetTop,
			scaleX: 1,
			scaleY: 1
		});

		// rotate image inside canvas
		tmpImgInstance.rotate(90 - data.angle.deg);

		this._tmpCanvas.setWidth(nSize.width);
		this._tmpCanvas.setHeight(nSize.height);
		this._tmpCanvas.backgroundColor = '#fff';
		this._tmpCanvas.add(tmpImgInstance);

		if (this.props.debug) {
			this._tmpCanvas.add(new this.fabric.Line([cropArea[0].x, cropArea[0].y, cropArea[1].x, cropArea[1].y], { stroke: 'red' }));
			this._tmpCanvas.add(new this.fabric.Line([cropArea[1].x, cropArea[1].y, cropArea[2].x, cropArea[2].y], { stroke: 'red' }));
			this._tmpCanvas.add(new this.fabric.Line([cropArea[2].x, cropArea[2].y, cropArea[3].x, cropArea[3].y], { stroke: 'red' }));
			this._tmpCanvas.add(new this.fabric.Line([cropArea[3].x, cropArea[3].y, cropArea[0].x, cropArea[0].y], { stroke: 'red' }));
		}
		this._tmpCanvas.renderAll();

		this._canvas.clear();

		let cropAreaWidth = (cropArea[0].x - cropArea[1].x);
		let cropAreaHeight = (cropArea[2].y - cropArea[1].y);

		let canvasWidth = this._canvas.getWidth();
		let canvasHeight = this._canvas.getHeight();

		let tmpImage = new Image();
		tmpImage.src = this._tmpCanvas.toDataURL();


		tmpImage.onload = () => {
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
			// put cropped image to tmp canvas
			// this canvas use for saving custom photo
			this._tmpCanvas.clear();
			this._tmpCanvas.setWidth(croppedImgInstance.width);
			this._tmpCanvas.setHeight(croppedImgInstance.height);
			this._tmpCanvas.add(croppedImgInstance);

			// copy image for preview
			let imageCopy = Object.create(croppedImgInstance);
			// scale image to fit preview canvas size
			imageCopy.scaleToHeight(canvasHeight);
			imageCopy.scaleToWidth(canvasWidth);
			this._canvas.add(imageCopy);
		};
	}

	loadGeneratedPreview(prevProps) {
		if (this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
			// create image from url
			this._img = new Image();
			this._img.src = this.props.imageUrl;
			this._img.onload = () => {
				this.setState({
					preview: null
				});

				this.createLoadingAnimation();
			};

			let c = this.dimensionMultiplier;
			let chin = 0;
			let crown = 0;
			if(this.props.standard.dimensions.crownTop){
				crown = this.props.standard.dimensions.crownTop * c;
				chin =  (this.props.standard.dimensions.faceHeight + this.props.standard.dimensions.crownTop) * c;
			}else if(this.props.standard.dimensions.bottomEyeLine){
				crown = (this.props.standard.dimensions.bottomEyeLine / 10) ;
				chin =  (this.props.standard.dimensions.faceHeight + crown) * c;
				crown *= c;
			}
			axios.post(`${this.props.serviceHost}/api/render-photo`, {
				url: this.props.imageUrl,
				previewSize: this.props.previewSize,
				debug: this.props.debug,
				dimensions: {
					width: this.props.standard.dimensions.pictureWidth * c,
					height: this.props.standard.dimensions.pictureHeight * c,
					crown: crown,
					chin: chin
				}
			}).then(response => {
				console.log(response.data);
				if (response.data.result.base64) {
					this.setState({
						preview: 'data:image/png;base64, ' + response.data.result.base64,
						uid: response.data.result.uid,
						noBgImageUrl: response.data.result.url
					});
					this._img.src = response.data.result.url;
					this._img.onload = () => {
					};
					this.props.onRemoveBackground(response.data.result.url);
				}
				else {
					this.alert.error(response.data.error);
					this.setState({
						preview: ''
					});
				}

			}).catch(error => {
				console.log(error);
				this.setState({
					preview: '',
					networkError: true
				});
				this.alert.error('Извините, возникла сетевая ошибка');
			});
		}
	}

	saveCustomImage() {
		return axios.post(`${this.props.serviceHost}/api/save-photo-b64`, {
			b64: this._tmpCanvas.toDataURL(),
			uid: this.state.uid,
			hue: this.state.hue,
			corner: this.state.corner
		});
	}

	saveGeneratedImage() {
		let scale = this.dimensionMultiplier * 2;
		return axios.post(`${this.props.serviceHost}/api/render-photo`, {
			url: this.state.noBgImageUrl,
			debug: this.props.debug,
			uid: this.state.uid,
			hue: this.state.hue,
			corner: this.state.corner,
			scale: 2,
			dimensions: {
				width: this.props.standard.dimensions.pictureWidth * scale,
				height: this.props.standard.dimensions.pictureHeight * scale,
				crown: this.props.standard.dimensions.crownTop * scale,
				chin: (this.props.standard.dimensions.faceHeight + this.props.standard.dimensions.crownTop) * scale
			}
		});
	}

	createLoadingAnimation() {
		let animatedCanvas = new this.fabric.Canvas();
		animatedCanvas.setWidth(this.state.dimensions.pictureWidth);
		animatedCanvas.setWidth(this.state.dimensions.pictureHeight);

		let image = new this.fabric.Image(this._img, {
			width: this._img.naturalWidth,
			height: this._img.naturalHeight,
			left: 0,
			top: 0
		});

		image.scaleToHeight(animatedCanvas.getHeight(), true);
		image.scaleToWidth(animatedCanvas.getWidth(), true);

		if (image.height < image.width)
			image.top = (image.height / image.width) * 2 * 10;

		animatedCanvas.add(image);
		let scannerLine = new this.fabric.Line([0, 0, animatedCanvas.getWidth(), 0], { stroke: 'red' });
		animatedCanvas.add(scannerLine);

		let down = true;
		let step = 5;

		let interval = setInterval(() => {

			if (scannerLine.top >= 0 && !down) {
				scannerLine.top -= step;
			}
			else if (scannerLine.top < animatedCanvas.getHeight() && down) {
				scannerLine.top += step;
			}
			else if (scannerLine.top >= animatedCanvas.getHeight()) {
				down = false;
			}
			else if (scannerLine.top <= 0) {
				down = true;
			}

			if (this.state.preview || this.state.networkError) {
				animatedCanvas.remove(scannerLine);
				clearInterval(interval);
			}

			this.setState({
				loadingAnimation: animatedCanvas.toDataURL()
			});

		}, 50);

		this.setState({
			loadingAnimation: animatedCanvas.toDataURL()
		});

	}


	selectType(type) {
		if (type === Constants.GENERATED && this.state.networkError) {
			this.alert.error('Вы не можете выбрать эту опцию');
			return false;
		}
		this.setState({
			selectedType: type
		});
	}

	openEditor() {

		this.setState({
			selectedType: Constants.CUSTOM
		});
		this.props.showEditor.call(this);
	}

	handleQuantityChange(event) {
		let value = parseInt(event.target.value);
		if (isNaN(value) || value < 1 || value > 99) {
			this.alert.error('Неверное значение');
			return false;
		}
		this.setState({ quantity: value });
		let parameters = this.createResultForOrder();
	}

	handleCornerChange(event) {
		this.setState({ corner: event.target.value });
	}

	handleColorChange(event) {
		this.setState({ hue: event.target.value });

	}

	createResultForOrder() {
		return {
			quantity: this.state.quantity,
			type: this.state.selectedType,
			corner: this.state.corner,
			hue: !this.props.standard.colors.color ? 'gray' : this.state.hue,
			uid: this.state.uid,
			standard: this.props.standard
		};
	}

	changedOptions(){
		let parameters = this.createResultForOrder();
		this.props.onOptionChanged.call(this, parameters);
	}

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
		}).catch(error => {
			this.alert.error('Извините, возникла сетевая ошибка');
		}).finally(() => {
			this.setState({
				inProcess: false
			});
		});

	}

	render(props, state, context) {
		return (
			<LoadingMask loading={this.state.preview == null} text={'loading...'} style={{ width: '100%' }}>
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
								<p className="title">Выберите вариант который Вам наиболее подходит: </p>
							</div>
						</div>
					</div>
					}

					<div className="container previews">
						<div className="row">
							<div className="col" style={{ display: this.props.isEditorOpen ? 'block' : 'none' }}>
								<div
									className={`preview ${this.state.selectedType === Constants.CUSTOM ? 'active' : ''}`}
									onClick={this.selectType.bind(this, Constants.CUSTOM)}>
									<canvas id="canvasPreview"
											style={{
												width: `${this.state.dimensions.pictureWidth}px`,
												height: `${this.state.dimensions.pictureHeight}px`, background: 'none'
											}}/>

								</div>
								<p className="label">Ручной режим</p>
							</div>

							<div className="col">
								<div
									className={`preview ${this.state.selectedType === Constants.GENERATED ? 'active' : ''}`}
									onClick={this.selectType.bind(this, Constants.GENERATED)}>

									<svg width={`${this.state.dimensions.pictureWidth}px`}
										 height={`${this.state.dimensions.pictureHeight}px`} version="1.1">

										<image xlinkHref={this.state.preview || this.state.loadingAnimation}
											   x="0" y="0" height="100%" width="100%"/>
									</svg>
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
						<div className="row">
							<div className="col text-right">
								{(this.state.preview !== null || this.props.isEditorOpen) &&
								<div className="form-row justify-content-end align-items-center">
									<div className="col-md-auto col-sm-1">
										<div className="input-group mb-2">

											{this.props.standard.colors.gray &&
											<div className="form-check form-check-inline">
												<input className="form-check-input" type="radio" name="color"
													   checked={this.state.hue === 'gray' || !this.props.standard.colors.color}
													   onClick={this.handleColorChange.bind(this)} id="color1"
													   value="gray"/>
												<label className="form-check-label" htmlFor="color1">Ч/Б</label>
											</div>
											}
											{this.props.standard.colors.color &&
											<div className="form-check form-check-inline">
												<input className="form-check-input" type="radio" name="color"
													   checked={this.state.hue === 'color'}
													   onClick={this.handleColorChange.bind(this)} id="color2"
													   value="color"/>
												<label className="form-check-label" htmlFor="color2">Цветное</label>
											</div>
											}
										</div>
									</div>
									{this.corners &&
									<div className="col-md-auto col-sm-1">
										<div className="input-group mb-2">
											<select onChange={this.handleCornerChange.bind(this)}
													className={'custom-select'}>
												{this.corners}
											</select>
										</div>
									</div>
									}
									<div className="col-md-auto col-sm-1">
										<div className="input-group mb-2">
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
									<div className="col-md-auto col-sm-1">
										<button className={'btn btn-outline-primary mb-2 w-100'}
												disabled={this.state.inProcess} onClick={this.makeOrder.bind(this)}>
											{this.state.inProcess ?
												<div>
													<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
													Оформление...
												</div>
												:
												'Заказать'
											}

										</button>
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