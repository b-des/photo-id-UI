import './style/styles.scss'
import "react-loadingmask/dist/react-loadingmask.css";

import {h, Component, render, createRef} from 'preact';
import App from './components/app'
import React from 'preact/compat';

class PhotoPassport extends Component{
	constructor(options){
		super();
		this.child = createRef();
		let defaults = {
			preview:{
				size: 250
			}
		}
		//options = {...options, defaults};
		options = Object.assign({}, defaults, options);
		console.log(options)
		let container = document.getElementById(options.container) || document.body;
		//container.addEventListener('contextmenu', event => event.preventDefault());
		render(
			<App ref={this.child} options={options}/>, container
		)
	}

	setImage = (imageUrl) => {
		this.child.current.setImageUrl(imageUrl);

	}

}
export default PhotoPassport;
