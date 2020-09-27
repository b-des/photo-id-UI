import { Component, h } from 'preact';
import { Events } from '../../shared/event-emitter/events';
import axios from 'axios';
import LoadingMask from 'react-loadingmask';
import { useAlert } from 'react-alert';
import React from 'preact/compat';
import fabric from 'fabric';

class Preview extends Component {
	constructor() {
		super();
		this.image = new Image();
		this.alert = useAlert();
		this.state = {
			preview: null,
			cropArea: {
				x: 50, y: 50, w: 50, h: 50
			}
		};
	}


	componentDidMount() {
		this.fabric = fabric.fabric;
		this._canvas = document.querySelector('#canvasPreview');
		this._canvas = new this.fabric.Canvas('canvasPreview');
		this._canvas.setHeight(400);
		this._canvas.setWidth(300);


		let img = new Image();
		img.src = this.props.imageUrl;
		img.onload = () => {
			console.log('loaded');
			console.log(img);
			let w = this._canvas.clientWidth;
			let h = this._canvas.clientHeight;

			let rect = {
				'crownPosition': {
					'x': 52.08287895310796,
					'y': 1.0714285714285714
				},
				'chinPosition': {
					'x': 52.80625227190113,
					'y': 53.214285714285715
				}
			};

			let area = [
				{ 'x': 75.82776351121586, 'y': 1.0941805803209557 },
				{ 'x': 28.056278655269047, 'y': 1.0941805803209586 },
				{ 'x': 28.056278655269047, 'y': 63.98930134543686 },
				{ 'x': 75.82776351121586, 'y': 63.98930134543686 }
			];




		};

		console.log(this._canvas);
		this.props.emitter.on(Events.LOADED_IMAGE, (data) => {
			console.log(data);
		});

		function newSize(w,h,a){
			let size = {};
			var rads=a*Math.PI/180;
			var c = Math.cos(rads);
			var s = Math.sin(rads);
			if (s < 0) { s = -s; }
			if (c < 0) { c = -c; }
			size.width = h * s + w * c;
			size.height = h * c + w * s ;
			return size;
		}


		this.props.emitter.on(Events.UPDATE_LANDMARK, (data) => {
			console.log(JSON.stringify(data.cropArea));

			let cx = (data.cropArea[1].x + data.cropArea[3].x)/2;
			let cy = (data.cropArea[1].y + data.cropArea[3].y)/2 ;


			let area = data.cropArea.map((item) => {
				let tempX = item.x - cx;
				let tempY = item.y - cy;

				var rotatedX = item.x + (tempX  * Math.cos(data.angle.rad)) - (tempY * Math.sin(data.angle.rad))
				var rotatedY = item.y + (tempX  * Math.sin(data.angle.rad)) + (tempY * Math.cos(data.angle.rad))
				return {
					//x: tempX * Math.cos(data.angle) - tempY * Math.sin(data.angle),
					//y: tempX * Math.sin(data.angle) + tempY * Math.cos(data.angle),
					x: rotatedX,
					y: rotatedY,
				}
			});
			console.log(area);


			let tmpCanvas = new this.fabric.Canvas();
			let tmpImgInstance = new this.fabric.Image(img, {
				angle: 0,
				width: img.width,
				height: img.height,
				left: 0,
				top: 0,
				scaleX: 1,
				scaleY: 1
			});
			let angle = 0;


			tmpImgInstance.rotate(90 - data.angle.deg);
			let nSize = newSize(img.width, img.height, 90 - data.angle.deg);
			tmpImgInstance.left = 0;//(nSize.width - img.width) / 2;
			tmpImgInstance.top = 0;
			tmpCanvas.setWidth(nSize.width);
			tmpCanvas.setHeight(nSize.height);
			tmpCanvas.backgroundColor = '#ccc'
			tmpCanvas.add(tmpImgInstance);


			this._canvas.clear();

			let width = img.width / 100 * (area[0].x - area[1].x);
			let height = img.height / 100 * (area[2].y - area[1].y);

			let canvWidth = this._canvas.getWidth();
			let canvHeight = this._canvas.getHeight();

			let nimg = new Image();
			nimg.src = tmpCanvas.toDataURL();
			document.querySelector('#imgPreview').src = nimg.src;
			nimg.onload = () => {
				let imgInstance = new this.fabric.Image(nimg, {
					angle: 0,
					width: width,
					height: height,
					left: 0,
					top: 0,
					scaleX: width <= canvWidth ? canvWidth / width : width / canvWidth,
					scaleY: height <= canvHeight ? canvHeight / height : height / canvHeight,
					cropX: img.width / 100 * area[1].x,
					cropY: img.height / 100 * area[1].y,

				});

				this._canvas.add(imgInstance);
			}

		});
		this.loadPreview({});
	}


	componentDidUpdate(prevProps, prevState, nextContext) {
		this.loadPreview(prevProps);
	}

	loadPreview(prevProps) {
		if (this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
			console.log(this.props.imageUrl);
			axios.post('http://localhost:5000/api/render-photo', {
				url: this.props.imageUrl,
				size: this.props.previewSize
			}).then((response) => {
				console.log(response);
				if(response.data.result){
					this.setState({
						preview: 'data:image/png;base64, ' + response.data.result
					});
				}else{
					this.alert.error(response.data.error);
					this.setState({
						preview: ''
					})
				}

			}).catch(error => {
				console.log(error);
				this.setState({
					preview: ''
				})
				this.alert.error('Не удалось загрузить предпросмотр. Попробуйте позже');
			});
		}
	}

	render(props, state, context) {
		return (
			<LoadingMask loading={this.state.preview == null} text={'loading...'}>
				<img src="" alt="" id="imgPreview"/>
				<div style={{ width: '200px', height: 'auto', margin: '0 auto', padding: '10px' }}>

					<canvas id="canvasPreview" class="img-thumbnail"
							style={{ width: '4cm', height: '4cm', border: '1px solid #ccc', background: 'none' }}></canvas>
					<svg width="3cm" height="4cm" version="1.1" class="img-thumbnail">
						<image xlink:href={this.state.preview} x="0" y="0" height="100%" width="100%"></image>
					</svg>
					{this.state.preview && !this.props.isEditorOpen &&
					<div>
						<p class="bd-highlight text-wrap text-info">
							Не нравится результат? Попробуйте:
						</p>
						<button onclick={this.props.showEditor.bind(this)} type="button" class="btn btn-dark">
							Ручной режим
						</button>
					</div>
					}
				</div>
			</LoadingMask>
		);

	}
}

export default Preview;