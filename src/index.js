import './style/styles.scss'
import "react-loadingmask/dist/react-loadingmask.css";

import {h, Component, render, createRef} from 'preact';
import App from './components/app'
import React from 'preact/compat';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

class PhotoPassport extends Component{
	constructor(options){
		super();
		this.child = createRef();
		let defaults = {
			preview:{
				size: 250
			},
			tips:[]
		}
		//options = {...options, defaults};
		options = Object.assign({}, defaults, options);

		const alertOptions = {
			// you can also just use 'bottom center'
			position: positions.TOP_RIGHT,
			timeout: 5000,
			offset: '30px',
			// you can also just use 'scale'
			transition: transitions.SCALE
		}

		let container = document.getElementById(options.container) || document.body;
		//container.addEventListener('contextmenu', event => event.preventDefault());
		const Root = () => (
			<AlertProvider template={AlertTemplate} {...alertOptions}>
				<App ref={this.child} options={options}/>
			</AlertProvider>
		)
		render(
			(
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<App ref={this.child} options={options}/>
				</AlertProvider>
			), container
		)
	}

	setImage = (imageUrl) => {
		this.child.current.setImageUrl(imageUrl);

	}

}
export default PhotoPassport;
