import { Component, h } from 'preact';
import React from 'preact/compat';

export default class ColorAdjustment extends Component {
	constructor() {
		super();
		this.state = {
			brightness: 100,
			saturation: 100,
			contrast : 100,
		}
	}

	changeBrightness(e){
		let value = e.target.value;
		this.setState({brightness: value});
		this.sendSettings();
	}

	changeSaturation(e){
		let value = e.target.value;
		this.setState({saturation: value});
		this.sendSettings();
	}

	changeContrast(e){
		let value = e.target.value;
		this.setState({contrast: value});
		this.sendSettings();
	}

	sendSettings(){
		const {brightness, saturation, contrast} = this.state;
		let css = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%)`;
		this.props.onColorChanged({css:css, ...this.state});
	}

	render(props, state, context) {
		return <div className={'p-1'}>
			<div className="row">
				<div className="col-md-12">
					<div className="form-group mb-0">
						<label htmlFor="exampleInputEmail1">
							Яркость: {this.state.brightness}%
						</label>
						<div className="input-group">
							<input type="range" className="form-control" min="0" max="200"
								   value={this.state.brightness} onInput={this.changeBrightness.bind(this)}
								   onChange={this.changeBrightness.bind(this)} />
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12">
					<div className="form-group mb-0">
						<label htmlFor="exampleInputEmail1">
							Насыщеность: {this.state.saturation}%
						</label>
						<div className="input-group">
							<input type="range" className="form-control" min="0" max="200"
								   value={this.state.saturation} onInput={this.changeSaturation.bind(this)}
								   onChange={this.changeSaturation.bind(this)}/>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12">
					<div className="form-group mb-0">
						<label htmlFor="exampleInputEmail1">
							Контраст:  {this.state.contrast}%
						</label>
						<div className="input-group">
							<input type="range" className="form-control" min="0" max="200"
								   value={this.state.contrast} onInput={this.changeContrast.bind(this)}
								   onChange={this.changeContrast.bind(this)}/>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
}
