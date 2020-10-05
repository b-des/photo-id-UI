import { h, Component, Fragment } from 'preact';
import EventEmitter from 'eventemitter3';
import Editor from './editor';
import Preview from './preview';
import React from 'preact/compat';
import Welcome from './welcome';
import photoStandards from '../assets/photo-standards.json';

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			view: 'editor',
			isEditorOpen: false,
			selectedStandard: null,
			noBgImageUrl: null,
			country: null,
			standards: []
		};
	}

	componentDidMount() {

		this.countries = this.props.options.countries.filter(item => {
			return true;
		}).map(country => {
			return (
				<option value={country}>{country}</option>
			);
		});
		this.countries.unshift(<option value="0" disabled selected>Выберите cтрану</option>);


		this.setState({
			selectedStandard: null,
		});

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
										 onOptionChanged={this.props.options.onOptionChanged}
										 onRemoveBackground={url => this.onRemoveBackground.call(this, url)}
										 isEditorOpen={this.state.isEditorOpen}
										 standard={this.state.selectedStandard}
										 showEditor={this.showEditor.bind(this)}/>

							</div>


						</Fragment>
						:
						<div class="col mt-3">
							<Welcome tips={this.props.options.tips}/>

							<div className="row">
								<div className="col">
									<p className="label mb-1 mt-3">Выберите cтрану:</p>
									<select name="standards" id="standards" className="custom-select custom-select-sm"
											onChange={this.handleCountryChange.bind(this)}>
										{this.countries}
									</select>
								</div>
								{this.state.country &&
								<div className="col">
									<p className="label mb-1 mt-3">Выберите тип документа:</p>
									<select name="standards" id="standards" className="custom-select custom-select-sm"
											value={this.state.selectedStandard === null ? 0 : this.state.selectedStandard.id}
											onChange={this.handleStandardChange.bind(this)}>
										{this.state.standards}
									</select>
								</div>
								}
							</div>


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

	onRemoveBackground(url) {
		this.setState({
			noBgImageUrl: url
		});
	}

	handleStandardChange = (event) => {
		let selectedStandard = this.props.options.standards.map(item => item).filter(item => {
			return item.id === event.target.value;
		});
		if (selectedStandard.length > 0) {
			selectedStandard = selectedStandard[0];
			if(!selectedStandard.colors)
				selectedStandard['colors'] = {"gray":"Ч/Б", "color":"Цветное"}
			this.setState({
				selectedStandard: selectedStandard
			});
		}
	};

	handleCountryChange = (event) => {

		let standards = this.props.options.standards.filter(item => {
			return item.country === event.target.value;
		}).map(item => {
			return (
				<option value={item.id}>{item.text}</option>
			)
		});
		standards.unshift(<option value="0" disabled selected>Выберите тип документа</option>);

		this.setState({
			country: event.target.value,
			standards: [standards],
			selectedStandard: null
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
