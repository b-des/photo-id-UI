import { h, Component, Fragment } from 'preact';
import EventEmitter from 'eventemitter3';
import Editor from './editor';
import Preview from './preview';
import React from 'preact/compat';
import Welcome from './welcome';


export default class App extends Component {

	constructor() {
		super();
		this.state = {
			view: 'editor',
			isEditorOpen: true
		};
	}

	render(props, state, context) {
		this.emitter = new EventEmitter();


		return (
			<div class="container">
				<div class="row">
					{this.state.imageUrl ?
						<Fragment>

							{this.state.isEditorOpen &&
							<div style={{ display: this.state.isEditorOpen ? 'block' : 'block' }} class="col app-card">
								<Editor emitter={this.emitter} imageUrl={this.state.imageUrl}/>
								<button onClick={this.switchView.bind(this)} type="button" class="btn btn-dark">
									{this.state.view === 'editor' ? 'Preview' : 'Edit'}
								</button>
							</div>
							}

							<div class="col mx-auto text-centered app-card ">
								<Preview emitter={this.emitter} imageUrl={this.state.imageUrl}
										 previewSize={this.props.options.preview.size}
										 isEditorOpen={this.state.isEditorOpen} showEditor={this.showEditor.bind(this)}/>

							</div>


						</Fragment>
						:
						<div class="col">
							<Welcome tips={this.props.options.tips}/>
						</div>
					}

				</div>
			</div>
		);
	}

	switchView = () => {
		this.setState({
			view: this.state.view === 'editor' ? 'preview' : 'editor',
			imageUrl: this.state.imageUrl
		});
	};

	showEditor = () => {
		this.setState({
			isEditorOpen: true
		});
	};

	setImageUrl = url => {
		this.setState({
			imageUrl: url,
			//isEditorOpen: false
		});
	};
}
