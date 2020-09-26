import './style/styles.scss'

import {h, Component, render, createRef} from 'preact';
import App from './components/app'
import React from 'preact/compat';

class PhotoPassport extends Component{
	constructor(){
		super();
		render(
			<App />, document.body
		)
	}


}
export default PhotoPassport;
