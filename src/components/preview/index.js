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
		this.state = {
			preview: null,
			quantity: 1,
			loadingAnimation: null,
			dimensions: {
				pictureWidth: 30 * 4,
				pictureHeight: 40 * 4
			},
			selectedType: Constants.GENERATED
		};

	}


	componentDidMount() {
		this.fabric = fabric.fabric;
		this._canvas = document.querySelector('#canvasPreview');
		this._canvas = new this.fabric.Canvas('canvasPreview');
		this._canvas.hoverCursor = 'pointer';
		this._canvas.setHeight(this.state.dimensions.pictureHeight);
		this._canvas.setWidth(this.state.dimensions.pictureWidth);

		if (process.env.NODE_ENV === 'development') {
			this._tmpCanvas = new this.fabric.Canvas('developPreviewq');
		}
		else {
			this._tmpCanvas = new this.fabric.Canvas();
		}

		// create image from url
		this._img = new Image();
		this._img.src = this.props.imageUrl;
		this._img.onload = () => {
			this.createLoadingAnimation();
		};

		this.loadGeneratedPreview({});

	}


	componentDidUpdate(prevProps, prevState, nextContext) {

		//
		this.loadGeneratedPreview(prevProps);

		// register events listener when open editor
		if (this.props.isEditorOpen)
			this.initEventListeners();
	}

	initEventListeners() {
		this.props.emitter.off(Constants.LOADED_IMAGE);
		this.props.emitter.off(Constants.UPDATE_LANDMARK);

		this.props.emitter.on(Constants.LOADED_IMAGE, (data) => {
			console.log(data);
		});

		this.props.emitter.on(Constants.UPDATE_LANDMARK, data => this.cropImage(data));
	}

	cropImage(data) {
		//let cx = (data.cropArea[1].x + data.cropArea[3].x) / 2;
		//let cy = (data.cropArea[1].y + data.cropArea[3].y) / 2;

		let nSize = getBoundingRectangleAfterRotate(this._img.width, this._img.height, 90 - data.angle.deg);

		// center of new host size
		let cx = nSize.width / 2;
		let cy = nSize.height / 2;

		let cropArea = data.cropArea.map((item) => {
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
		console.log(cropArea);
		let borderOffsetLeft = 0;
		let borderOffsetTop = cropArea[0].y < 0 ? cropArea[0].y : 0;


		this._tmpCanvas.clear();
		let tmpImgInstance = new this.fabric.Image(this._img, {
			angle: 0,
			width: this._img.width,
			height: this._img.height,
			left: (nSize.width - this._img.width) / 2 + borderOffsetLeft,
			top: (nSize.height - this._img.height) / 2 - borderOffsetTop,
			scaleX: 1,
			scaleY: 1
		});
		let angle = 0;


		tmpImgInstance.rotate(90 - data.angle.deg);

		//tmpImgInstance.left = 0;//(img.width - nSize.width) / 2;
		//tmpImgInstance.top = (nSize.height - img.height) / 2;
		this._tmpCanvas.setWidth(nSize.width);
		this._tmpCanvas.setHeight(nSize.height);
		this._tmpCanvas.backgroundColor = '#fff';
		this._tmpCanvas.add(tmpImgInstance);

		if (process.env.NODE_ENV === 'development') {
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
			let imgInstance = new this.fabric.Image(tmpImage, {
				angle: 0,
				width: cropAreaWidth,
				height: cropAreaHeight,
				left: 0,
				top: 0,
				scaleX: canvasWidth / cropAreaWidth,
				scaleY: canvasHeight / cropAreaHeight,
				cropX: cropArea[1].x,
				cropY: cropArea[1].y,
				selectable: false

			});
			this._canvas.selection = false;
			this._canvas.add(imgInstance);
		};
	}

	loadGeneratedPreview(prevProps) {
		if (this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
			console.log(this.props.imageUrl);
			let c = 100;
			axios.post('http://localhost:5000/api/render-photo', {
				url: this.props.imageUrl,
				previewSize: this.props.previewSize,
				dimensions: {
					width: this.props.standard.dimensions.pictureWidth * c,
					height: this.props.standard.dimensions.pictureHeight * c,
					crown: this.props.standard.dimensions.crownTop * c,
					chin: (this.props.standard.dimensions.faceHeight + this.props.standard.dimensions.crownTop) * c
				}
			}).then(response => {
				console.log(response);
				if (response.data.result) {
					this.setState({
						preview: 'data:image/png;base64, ' + response.data.result
					});
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
					preview: ''
				});
				this.alert.error('Извините, возникла сетевая ошибка');
			});
		}
	}

	saveBase64ToImage() {
		axios.post('http://localhost:5000/api/save-photo-b64', {
			b64: this._canvas.toDataURL()
		})
			.then(response => {
				console.log(response);

			}).catch(error => {
			console.log(error);
			this.alert.error('Извините, возникла сетевая ошибка');
		});
	}

	createLoadingAnimation() {
		let animatedCanvas = new this.fabric.Canvas();
		animatedCanvas.setWidth(this.state.dimensions.pictureWidth);
		animatedCanvas.setWidth(this.state.dimensions.pictureHeight);
		animatedCanvas.setBackgroundColor('red');
		let ih = this._img.height;
		let iw = this._img.width;

		let widthRatio = animatedCanvas.getWidth() / this._img.naturalHeight;
		let heightRatio = animatedCanvas.getHeight() / this._img.naturalWidth;
		let fw = 0;
		let fh = 0;


		console.log(fw, fh);
		let image = new this.fabric.Image(this._img, {
			width: this._img.naturalWidth,
			height: this._img.naturalHeight,
			left: 0,
			top: 0,
			stroke: 'white',
			strokeWidth: 2
		});

		if (widthRatio > heightRatio) {
			console.log('Width bigger than height');
			fw = iw * heightRatio;
			fh = ih * fw / iw;

		}
		else {
			console.log('height bigger than Width');
			fh = ih * heightRatio;
			fw = iw * fh / ih;
		}

		image.scaleX = fw / this._img.naturalWidth;
		image.scaleY = fh / this._img.naturalHeight;

		animatedCanvas.add(image);
		let scannerLine = new this.fabric.Line([0, 0, animatedCanvas.getWidth(), 0], { stroke: 'red' });
		animatedCanvas.add(scannerLine);
		let down = true;

		let interval = setInterval(() => {

			if (scannerLine.top >= 0 && !down) {
				scannerLine.top -= 5;
			}
			else if (scannerLine.top < animatedCanvas.getHeight() && down) {
				scannerLine.top += 5;
			}
			else if (scannerLine.top >= animatedCanvas.getHeight()) {
				down = false;
			}
			else if (scannerLine.top <= 0) {
				down = true;
			}

			scannerLine.setCoords();

			this.setState({
				loadingAnimation: animatedCanvas.toDataURL()
			});

			if (this.state.preview)
				clearInterval(interval);
		}, 50);

		this.setState({
			loadingAnimation: animatedCanvas.toDataURL()
		});

	}


	selectType(type) {
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
	}

	makeOrder() {
		switch (this.state.selectedType) {
			case Constants.GENERATED:
				break;
			default:
				console.log(this._canvas.toDataURL());
				this.saveBase64ToImage();
				break;
		}
		let response = {
			quantity: this.state.quantity,
			type: this.state.selectedType
		};
		this.props.onOrderClick.call(this, response);
	}

	render(props, state, context) {
		return (
			<LoadingMask loading={this.state.preview == null} text={'loading...'} style={{ width: '100%' }}>
				{process.env.NODE_ENV === 'development1' &&
				<canvas id="developPreview" style={{ background: 'none' }} class="img-thumbnail"/>
				}
				<div style={{ margin: '0 auto', padding: '10px' }}>

					{this.props.isEditorOpen &&
					<div className="container">
						<div className="row">
							<div className="col text-center">
								<p class="h6">Выберите вариант который Вам наиболее подходит: </p>
							</div>
						</div>
					</div>
					}

					<div class="container previews">
						<div className="row">
							<div className="col" style={{ display: this.props.isEditorOpen ? 'block' : 'none' }}>
								<div
									className={`preview ${this.state.selectedType === Constants.CUSTOM ? 'active' : ''}`}
									onclick={this.selectType.bind(this, Constants.CUSTOM)}>
									<canvas id="canvasPreview"
											style={{
												width: `${this.state.dimensions.pictureWidth}px`,
												height: `${this.state.dimensions.pictureHeight}px`, background: 'none'
											}}/>

								</div>

								<p class="label">Ручной режим</p>
							</div>


							<div className="col">

								<div
									className={`preview ${this.state.selectedType === Constants.GENERATED ? 'active' : ''}`}
									onclick={this.selectType.bind(this, Constants.GENERATED)}>

									<svg width={`${this.state.dimensions.pictureWidth}px`}
										 height={`${this.state.dimensions.pictureHeight}px`} version="1.1">
										<image xlink:href={this.state.preview || this.state.loadingAnimation} x="0"
											   y="0" height="100%"
											   width="100%"/>
									</svg>

								</div>

								{this.props.isEditorOpen &&
								<p class="label">Автоматический режим</p>
								}

							</div>
						</div>
					</div>


					{this.state.preview !== null && !this.props.isEditorOpen &&
					<div class={'container text-center'}>
						<p></p>
						<p class="bd-highlight text-wrap text-info">
							Не нравится результат?<br/> Вы можете попробовать перейти в ручной режим:
						</p>
						<button onclick={this.openEditor.bind(this)} type="button" class="btn btn-dark">
							Ручной режим
						</button>
					</div>
					}

					<div className="container mt-3">
						<div className="row">
							<div className="col text-right">
								{(this.state.preview !== null || this.props.isEditorOpen) &&
								<div class="form-row justify-content-end">
									<div class="col-auto">
										<label class="sr-only" for="inlineFormInputGroup">Username</label>
										<div class="input-group mb-2">
											<div class="input-group-prepend">
												<div class="input-group-text">Количество:</div>
											</div>
											<input type="number" class="form-control" min="1" max="99"
												   style={{ width: '70px' }}
												   value={this.state.quantity}
												   onChange={this.handleQuantityChange.bind(this)}/>
										</div>
									</div>
									<div class="col-auto">
										<button class={'btn btn-outline-primary mb-2'}
												onclick={this.makeOrder.bind(this)}>
											Заказать
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