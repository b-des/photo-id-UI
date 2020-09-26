import './style/styles.scss'

import {h, Component, render, createRef} from 'preact';
import App from './components/app'
import React from 'preact/compat';

class PhotoPassport extends Component{
	constructor(options){
		super();
		this.child = createRef();
		options = Object.assign({}, options);
		let container = document.getElementById(options.container) || document.body;
		//container.addEventListener('contextmenu', event => event.preventDefault());
		render(
			<App ref={this.child}/>, container
		)
	}

	setImage = (imageUrl) => {
		this.child.current.setImageUrl(imageUrl);

	}

}
export default PhotoPassport;
