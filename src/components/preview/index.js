import { Component, h } from 'preact';
import { Events } from '../../shared/event-emitter/events';
import axios from 'axios';
import LoadingMask from 'react-loadingmask';
import { useAlert } from 'react-alert';

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

	emitted(dATA) {
		console.log(dATA); // true
	}


	componentDidMount() {
		this.props.emitter.on(Events.LOADED_IMAGE, (data) => {
			console.log(data);
		});
		this.props.emitter.on(Events.UPDATE_LANDMARK, (data) => {
			console.log(data);
			this.setState({
				cropArea: {
					x: data.crownPosition.x,
					y: data.crownPosition.y,
					w: data.chinPosition.x,
					h: data.chinPosition.y
				}
			});
		});
		this.canvas = document.querySelector('#canvasPreview');
		this.ctx = this.canvas.getContext('2d');
		this.canvas.style.width = '300px';
		this.canvas.style.height = '400px';
		this.image.src = 'https://image.shutterstock.com/image-photo/beauty-woman-face-portrait-beautiful-260nw-323982494.jpg';
		this.image.onload = () => {
			this.ctx.drawImage(this.image,
				this.state.cropArea.x, this.state.cropArea.y,   // Start at 70/20 pixels from the left and the top of the image (crop),
				50, this.state.cropArea.h,   // "Get" a `50 * 50` (w * h) area from the source image (crop),
				0, 0,     // Place the result at 0, 0 in the canvas,
				400, 300); // With as width / height: 100 * 100 (scale)
		};

		//https://image.shutterstock.com/image-photo/beauty-woman-face-portrait-beautiful-260nw-323982494.jpg


	}


	componentDidUpdate(prevProps, prevState, nextContext) {
		//this.alert.show('Oh look, an alert!')
		if (this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
			console.log(this.props.imageUrl);
			axios.post('http://localhost:5000/api/render-photo', {
				url: this.props.imageUrl,
				size: this.props.previewSize
			}).then((response) => {
				this.setState({
					preview: 'data:image/png;base64, ' + response.data
				});
			}).catch(error => {
				console.log(error);
			});
		}
	}

	render(props, state, context) {
		return (
			<LoadingMask loading={this.state.preview == null} text={'loading...'}>
				<div style={{ width: '200px', height: '200px' }}>
					<canvas id="canvasPreview" style={{ display: 'none' }}></canvas>
					<svg width="3cm" height="4cm" version="1.1">
						<image xlink:href={this.state.preview} x="0" y="0" height="100%" width="100%"></image>
					</svg>
				</div>
			</LoadingMask>
		);

	}
}

export default Preview;