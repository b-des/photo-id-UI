import { Component, h } from 'preact';
import { Constants } from '../../shared/event-emitter/constants';
import axios from 'axios';
import LoadingMask from 'react-loadingmask';
import { useAlert } from 'react-alert';
import React from 'preact/compat';
import fabric from 'fabric';
import { getBoundingRectangleAfterRotate, transformCoordinateAfterRotate } from '../../model/point';

class Preview extends Component {
	constructor() {
		super();
		this.image = new Image();
		this.alert = useAlert();
		this.state = {
			preview: null,
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

		if(process.env.NODE_ENV === 'development'){
			this._tmpCanvas = new this.fabric.Canvas('developPreviewq');
		}else{
			this._tmpCanvas = new this.fabric.Canvas();
		}

		// create image from url
		this._img = new Image();
		this._img.src = this.props.imageUrl;
		this._img.onload = () => {};

		this.loadPreview({});
		this.createLoadingAnimation();
	}


	componentDidUpdate(prevProps, prevState, nextContext) {
		console.log('componentDidUpdate ');
		this.loadPreview(prevProps);
	}

	initEventListeners() {
		this.props.emitter.off(Constants.LOADED_IMAGE);
		this.props.emitter.off(Constants.UPDATE_LANDMARK);

		this.props.emitter.on(Constants.LOADED_IMAGE, (data) => {console.log(data);});

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
			}
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

		if(process.env.NODE_ENV === 'development') {
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

	loadPreview(prevProps) {
		this.initEventListeners();
		if (this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
			console.log(this.props.imageUrl);
			axios.post('http://localhost:5000/api/render-photo', {
				url: this.props.imageUrl,
				size: this.props.previewSize
			}).then((response) => {
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
				this.alert.error('Извините, возникла ошибка');
			});
		}
	}

	createLoadingAnimation(){
		let animatedCanvas = new this.fabric.Canvas();
		animatedCanvas.setWidth(this.state.dimensions.pictureWidth)
		animatedCanvas.setWidth(this.state.dimensions.pictureHeight)

		let image = new this.fabric.Image(this._img, {
			width: animatedCanvas.getWidth(),
			height: animatedCanvas.getHeight(),
			left: 0,
			top: 0,
		});
		animatedCanvas.add(new this.fabric.Line([0, 10, animatedCanvas.getWidth(), 10], { stroke: 'red' }))
		let y = 0;
		setTimeout(() => {
			this.setState({
				loadingAnimation: 'test'
			})
			console.log(this.state.loadingAnimation);
		}, 1000);



		console.log(this.state.loadingAnimation);

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

	makeOrder(){
		console.log(this.state.selectedType);
		switch (this.state.selectedType){
			case Constants.GENERATED:
				break;
			default:
				console.log(this._canvas.toDataURL());
				break;
		}

		this.props.onOrderClick.call(this);
	}

	render(props, state, context) {
		return (
			<LoadingMask loading={this.state.preview == null} text={'loading...'} style={{width: '100%'}}>
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
											<image xlink:href={this.state.preview || this.state.loadingAnimation} x="0" y="0" height="100%"
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
									<button class={'btn btn-outline-primary'} onclick={this.makeOrder.bind(this)}>
										Заказать
									</button>
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