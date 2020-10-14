import './style/styles.scss'
import "react-loadingmask/dist/react-loadingmask.css";
import {h, Component, render, createRef} from 'preact';
import App from './components/app'
import React from 'preact/compat';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import photoStandards from './assets/photo-standards.json'

class PhotoPassport extends Component{
	constructor(options){
		super();
		this.child = createRef();
		let defaults = {
			preview:{
				size: 200 // size of generated preview
			},
			tips:[],// list of tips for welcome screen
			onRequestPhotoClick: () => {}, // callback fire when user click add photo
			onOrderClick: () => {}, // callback for order click
			onOptionChanged: () => {}, // callback for option change
			container: null, // id of container
			serviceHost: null, // url for backend
			debug: false, // debug mode
			standards: photoStandards, // list of objects with document specification
			corners: {},
			removeBackground: false,
			photoRestriction: {
				minWidth: 25,
				minHeight: 40,
				maxWidth: 5000,
				maxHeight: 5000,
			}
		}

		const alertOptions = {
			position: positions.TOP_CENTER,
			timeout: 5000,
			offset: '20px',
			transition: transitions.SCALE,
			containerStyle:{
				fontSize: '12px',
				zIndex: 12
			}
		}

		let missingParams = [];
		Object.entries(defaults).map(item => {
			if(!options[item[0]]  && item[1] === null){
				missingParams.push((<p><code>{item[0]}</code></p>))
			}
		});

		options = Object.assign({}, defaults, options);
		let container = document.getElementById(options.container) || document.body;
		container.addEventListener('contextmenu', event => event.preventDefault());

		const Root = () => {
			if(missingParams.length === 0){
				return (
					<AlertProvider template={AlertTemplate} {...alertOptions}>
						<App ref={this.child} options={options}/>
					</AlertProvider>
				)
			}else{
				return <div class="text-center">
					<h6>Missing required options:</h6>
					<div>
						{missingParams}
					</div>
				</div>
			}
		}

		render(<Root />, container)
	}

	setImage = (imageUrl) => {
		this.child.current.setImageUrl(imageUrl);
	}

	updatePrice = (price) => {
		this.child.current.updatePrice(price);
	}

}
export default PhotoPassport;
