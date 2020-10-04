import { h, Component, Fragment } from 'preact';
import EventEmitter from 'eventemitter3';
import Editor from './editor';
import Preview from './preview';
import React from 'preact/compat';
import Welcome from './welcome';
import photoStandards from '../assets/photo-standards.json'

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			view: 'editor',
			isEditorOpen: false,
			selectedStandard: null,
			noBgImageUrl: null
		};
	}

	componentDidMount() {
		this.standards = photoStandards.map(standard => {
			return (
				<option value={standard.id}>{standard.text}</option>
			)
		});
		this.standards.unshift(<option value="0" disabled selected>Выберите тип документа</option>)

		let selectedStandard = photoStandards.map(item => item).filter(item => {
			return item.id === 'ua_visa_photo'
		});

		if(selectedStandard.length > 0){
			this.setState({
				//selectedStandard: selectedStandard[0]
			})
		}
	}

	render(props, state, context) {
		this.emitter = new EventEmitter();




		return (
			<div class="container">
				<div class="row justify-content-center">

					{this.state.imageUrl ?
						<Fragment>

							{this.state.isEditorOpen &&
							<div style={{ display: this.state.isEditorOpen ? 'block' : 'block' }}
								 class="col-md-4 mx-2 app-card d-flex justify-content-center align-items-center">
								<Editor emitter={this.emitter} imageUrl={this.state.noBgImageUrl || this.state.imageUrl}
										standard={this.state.selectedStandard}/>
							</div>
							}

							<div class="col-md-7 mx-2 text-centered  app-card d-flex justify-content-center
							 align-items-center preview-component">
								<Preview emitter={this.emitter} imageUrl={this.state.imageUrl}
										 previewSize={this.props.options.preview.size}
										 serviceHost={this.props.options.serviceHost}
										 debug={this.props.options.debug}
										 onOrderClick={this.props.options.onOrderClick}
										 onRemoveBackground={url => this.onRemoveBackground.call(this, url)}
										 isEditorOpen={this.state.isEditorOpen}
										 standard={this.state.selectedStandard}
										 showEditor={this.showEditor.bind(this)}/>

							</div>


						</Fragment>
						:
						<div class="col mt-3">
							<Welcome tips={this.props.options.tips}/>

							<p class="label mb-1 mt-3">Выберите тип документа:</p>
							<select name="standards" id="standards" class="custom-select custom-select-sm"
									onChange={this.handleStandardChange.bind(this)}>
								{this.standards}
							</select>

							{this.state.selectedStandard &&
							<div className="text-center mt-3">
								<button className="btn btn-outline-success"
										onClick={this.props.options.onRequestPhotoClick.bind(this)}>
									Загрузить фото
								</button>
							</div>
							}
						</div>
					}

				</div>
			</div>
		);
	}

	onRemoveBackground(url){
		console.log('onRemoveBackground');
		this.setState({
			noBgImageUrl: url,
		});
	}

	handleStandardChange = (event) => {
		let selectedStandard = photoStandards.map(item => item).filter(item => {
			return item.id === event.target.value
		});

		if(selectedStandard.length > 0){
			this.setState({
				selectedStandard: selectedStandard[0]
			})
		}
	};

	showEditor = () => {
		this.setState({
			isEditorOpen: true
		});
	};

	setImageUrl = url => {
		this.setState({
			imageUrl: url,
			isEditorOpen: false
		});
	};
}
