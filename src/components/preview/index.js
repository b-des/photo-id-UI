import { Component, h } from 'preact';
import { Events } from '../../shared/event-emitter/events';


class Preview extends Component{
	constructor(){
		super();
		this.image = new Image();
		this.state = {
			cropArea: {
				x:50, y:50, w:50, h:50
			}
		}
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
					x:data.crownPosition.x,
					y:data.crownPosition.y,
					w:data.chinPosition.x,
					h:data.chinPosition.y
				}
			})
		});
		this.canvas = document.querySelector("#canvasPreview");
		this.ctx = this.canvas.getContext('2d');
		this.canvas.style.width = '300px';
		this.canvas.style.height = '400px';
		this.image.src = "https://image.shutterstock.com/image-photo/beauty-woman-face-portrait-beautiful-260nw-323982494.jpg";
		this.image.onload = () => {
			this.ctx.drawImage(this.image,
				this.state.cropArea.x, this.state.cropArea.y,   // Start at 70/20 pixels from the left and the top of the image (crop),
				50, this.state.cropArea.h,   // "Get" a `50 * 50` (w * h) area from the source image (crop),
				0, 0,     // Place the result at 0, 0 in the canvas,
				400, 300); // With as width / height: 100 * 100 (scale)
		}

	}


	componentDidUpdate(nextProps, nextState, nextContext) {
		this.ctx.drawImage(this.image,
			this.state.cropArea.x, this.state.cropArea.y,   // Start at 70/20 pixels from the left and the top of the image (crop),
			this.state.cropArea.w, this.state.cropArea.h,   // "Get" a `50 * 50` (w * h) area from the source image (crop),
			0, 0,     // Place the result at 0, 0 in the canvas,
			this.state.cropArea.w, this.state.cropArea.h); // With as width / height: 100 * 100 (scale)
	}

	render(props, state, context) {
		return (
			<div>
				<canvas id="canvasPreview"></canvas>
				<div>{this.state.cropArea.x}</div>
			</div>
		)

	}
}

export default Preview