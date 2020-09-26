import { h, Component } from 'preact';
import EventEmitter from 'eventemitter3';
import Editor from './editor';
import Preview from './preview';
import React from 'preact/compat';


export default class App extends Component {

	constructor() {
		super();
		this.state = {
			view: 'editor'
		};
	}

	render(props, state, context) {
		this.emitter = new EventEmitter();

		return (
			<div class="columns-2">
				<Editor emitter={this.emitter} imageUrl={this.state.imageUrl}/>

				<Preview emitter={this.emitter}/>

				<button style={{ 'margin': '0 auto' }} onClick={this.switchView.bind(this)}>
					{this.state.view === 'editor' ? 'Preview' : 'Edit'}
				</button>
			</div>
		);
	}

	switchView = () => {
		this.setState({
			view: this.state.view === 'editor' ? 'preview' : 'editor',
			imageUrl: this.state.imageUrl
		});
	};

	setImageUrl = url => {
		this.setState({
			imageUrl: url
		});
	};
}
