import { Component, Fragment, h} from 'preact';
import EventEmitter from 'eventemitter3';
import React from 'preact/compat';
import { useAlert } from 'react-alert';
import Editor from './editor';
import Preview from './preview';
import Welcome from './welcome';

const initialState = {
	view: 'editor',
	isEditorOpen: false,
	selectedStandard: null,
	noBgImageUrl: null,
	imageUrl: null,
	country: null,
	isPhotoMeetRequirements: true,
	standards: [],
	photoSize:{},
	price: null
};
export default class App extends Component {

	constructor() {
		super();
		this.state = initialState;
		this.restrictions = {};
	}

	componentDidMount() {

		this.countries = this.props.options.countries.filter(item => {
			return true;
		}).map(country => {
			return (
				<option value={country}>{country}</option>
			);
		});
		this.countries.unshift(<option value="0" disabled selected>Выберите страну</option>);


		this.setState({
			selectedStandard: null,
		});

		this.restrictions = this.props.options.photoRestriction;
	}


	reset() {
		this.setState(initialState);
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

			this.setState({
				selectedStandard: selectedStandard,
				price: selectedStandard.price.text
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
		useAlert().info("Проверяем фотографию", {timeout: 2000});
		let tmpImage = new Image();
		tmpImage.src = url;
		tmpImage.onload = () => {
			let isPhotoMeetRequirements =
				tmpImage.naturalWidth >= this.restrictions.minWidth &&
				tmpImage.naturalWidth <= this.restrictions.maxWidth &&
				tmpImage.naturalHeight >= this.restrictions.minHeight &&
				tmpImage.naturalHeight <= this.restrictions.maxHeight;

			if(!isPhotoMeetRequirements){
				this.setState({
					imageUrl: null,
					isPhotoMeetRequirements: false,
					photoSize: {
						width: tmpImage.naturalWidth,
						height: tmpImage.naturalHeight,
					}
				});
				let uploadPhotoButton = document.getElementById("uploadPhoto");
				uploadPhotoButton.removeAttribute("disabled");
				uploadPhotoButton.innerHTML = "";
				useAlert().error("Извините, Ваша фотография не соответствует требованиям")
			}else{
				this.setState({
					imageUrl: url,
					isPhotoMeetRequirements: true,
					isEditorOpen: false
				});
			}
		}
	};

	updatePrice(price){
		this.setState({
			price: price
		})
	}

	render(props, state, context) {
		this.emitter = new EventEmitter();

		return (
			<div className="container">
				<div className="row justify-content-center">

					{this.state.imageUrl ?
						<Fragment>

							{this.state.isEditorOpen &&
							<div style={{ display: this.state.isEditorOpen ? 'block' : 'block' }}
								 className="col-md-4 mx-2 app-card d-flex justify-content-center align-items-center">
								<Editor emitter={this.emitter} imageUrl={this.state.noBgImageUrl || this.state.imageUrl}
										standard={this.state.selectedStandard}/>
							</div>
							}

							<div className="col-md-7 mx-2 text-centered  app-card d-flex justify-content-center
							 align-items-center preview-component">
								<Preview emitter={this.emitter} imageUrl={this.state.imageUrl}
										 previewSize={this.props.options.preview.size}
										 serviceHost={this.props.options.serviceHost}
										 debug={this.props.options.debug}
										 removeBackground={this.props.options.removeBackground}
										 onOrderClick={this.props.options.onOrderClick}
										 onOptionChanged={this.props.options.onOptionChanged}
										 onRemoveBackground={url => this.onRemoveBackground.call(this, url)}
										 isEditorOpen={this.state.isEditorOpen}
										 standard={this.state.selectedStandard}
										 reset={this.reset.bind(this)}
										 price={this.state.price}
										 showEditor={this.showEditor.bind(this)}/>

							</div>


						</Fragment>
						:
						<div className="col mt-3">
							<Welcome tips={this.props.options.tips}/>

							<div className="row">
								<div className="col">
									<p className="label mb-1 mt-3">Выберите страну:</p>
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

							{!this.state.isPhotoMeetRequirements &&
								<div className="alert alert-warning mt-3" role="alert">
									<p className="mb-0">Загружаемая фотография должна соответствовать следующим
										требованиям:</p>
									<ul>
										<li>Не меньше {this.restrictions.minWidth} x {this.restrictions.minHeight}px</li>
										<li>Не больше {this.restrictions.maxWidth} x {this.restrictions.maxHeight}px</li>
									</ul>
									<hr/>
									<p>Размер Вашего фото: {this.state.photoSize.width} x {this.state.photoSize.height}px</p>
								</div>
							}
							{this.state.selectedStandard &&
							<div className="text-center mt-3">
								<button className="btn btn-outline-success" id={"uploadPhoto"}
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
}
