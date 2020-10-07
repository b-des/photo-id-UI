import { Component, h} from 'preact';
import React from 'preact/compat';

export default class Options extends Component{
	constructor() {
		super();
	}
	componentDidMount() {

		let extraOptions = this.props.options.map(extraOption => {
			return <div className="col-md-auto col-sm-1">
				<div className="input-group mb-2">
					<select onChange={this.handleOptionChanged.bind(this)}
							className={'custom-select'}>
						{
							extraOption.options.map(option =>
								<option value={`[${extraOption.id}, ${option.id}]`}>{option.value}</option>)
						}
					</select>
				</div>
			</div>
		});

		this.setState({
			options: extraOptions
		})
	}

	handleOptionChanged(event) {
		let option = JSON.parse(event.target.value);
		this.props.onOptionChanged(option)
	}

	render(props, state, context) {
		return <div className={"options"}>
			{this.state.options}
		</div>
	}
}