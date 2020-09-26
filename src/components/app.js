import { h, Component } from 'preact';
import EventEmitter from 'eventemitter3';
import Editor from './editor';
import Preview from './preview';
import React from 'preact/compat';


export default class App extends Component {

	render(props, state, context) {
		this.emitter = new EventEmitter();

		return (
			<div class="columns-2">
				<Editor emitter={this.emitter} imageUrl={this.state.imageUrl}/>
				<Preview emitter={this.emitter}/>
			</div>
		);
	}

	setImageUrl(url){
		this.setState({
			imageUrl: url
		})
	}
}
