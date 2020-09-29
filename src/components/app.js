import { h, Component, Fragment } from 'preact';
import EventEmitter from 'eventemitter3';
import Editor from './editor';
import Preview from './preview';
import React from 'preact/compat';
import Welcome from './welcome';
import photoStandard from '../assets/photo-standards.json'

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			view: 'editor',
			isEditorOpen: false,
			selectedStandard: {}
		};
	}

	componentDidMount() {
		this.standards = photoStandard.map(standard => {
			return (
				<option value={standard.id}>{standard.text}</option>
			)
		});

		let selectedStandard = photoStandard.map(item => item).filter(item => {
			return item.id === 'ua_visa_photo'
		});

		if(selectedStandard.length > 0){
			console.log(selectedStandard);
			this.setState({
				selectedStandard: selectedStandard[0]
			})
		}
	}

	render(props, state, context) {
		this.emitter = new EventEmitter();




		return (
			<div class="container">
				<div class="row">

					{this.state.imageUrl ?
						<Fragment>

							{this.state.isEditorOpen &&
							<div style={{ display: this.state.isEditorOpen ? 'block' : 'block' }}
								 class="col mx-2 app-card d-flex justify-content-center align-items-center">
								<Editor emitter={this.emitter} imageUrl={this.state.imageUrl}
										standard={this.state.selectedStandard}/>
							</div>
							}

							<div class="col mx-2 text-centered  app-card d-flex justify-content-center
							 align-items-center preview-component">
								<Preview emitter={this.emitter} imageUrl={this.state.imageUrl}
										 previewSize={this.props.options.preview.size}
										 onOrderClick={this.props.options.onOrderClick}
										 isEditorOpen={this.state.isEditorOpen}
										 standard={this.state.selectedStandard}
										 showEditor={this.showEditor.bind(this)}/>

							</div>


						</Fragment>
						:
						<div class="col">
							<Welcome tips={this.props.options.tips}/>
							<div class="text-center mt-3">
								<button class="btn btn-outline-success"
								onclick={this.props.options.onRequestPhotoClick.bind(this)}>
									Загрузить фото
								</button>
							</div>
							<select name="standards" id="standards" class="custom-select custom-select-sm mt-3"
									value={this.state.selectedStandard.id}>
								{this.standards}
							</select>
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
			isEditorOpen: false
		});
	};
}
