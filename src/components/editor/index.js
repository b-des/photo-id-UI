import { Component, h } from 'preact';
import interact from 'interactjs';
import { middlePoint, Point, pointsAtDistanceNorm, rotatedRectangle } from '../../model/point';
import { getCroppingCenter, PhotoDimensions } from '../../model/photodimensions';
import EventEmitter from 'eventemitter3';
import { Constants } from '../../shared/event-emitter/constants';
import axios from 'axios';
import LoadingMask from 'react-loadingmask';
import React from 'preact/compat';


class Editor extends Component {

	constructor() {
		super();
		// size of circle markers
		this._crownChinMarkSize = window.innerHeight > window.innerWidth ? 22 : 12;
		this.state = {
			crownPosition: {},
			chinPosition: {},
			landmarkVisibility: true,
			image: null,
			isImageLoaded: false
		};
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
			this.loadAndRenderImage(this.props.imageUrl);
		}

	}

	componentDidMount() {
		this.loadAndRenderImage(this.props.imageUrl);
		this._imgElmt = document.querySelector('#inputPhoto');
		this._viewPortElmt = document.querySelector('#viewport');
		this._crownMarkElmt = document.querySelector('#crownMark');
		this._chinMarkElmt = document.querySelector('#chinMark');
		const lmSize = '' + this._crownChinMarkSize + 'px';
		this._crownMarkElmt.style.width = lmSize;
		this._crownMarkElmt.style.height = lmSize;
		this._chinMarkElmt.style.width = lmSize;
		this._chinMarkElmt.style.height = lmSize;

		this._middleLine = document.querySelector('#middleLine');
		this._crownLine = document.querySelector('#crownLine');
		this._chinLine = document.querySelector('#chinLine');

		this._faceEllipse = document.querySelector('#faceEllipse');
		this._cropArea = document.querySelector('#cropArea');
		this._imageArea = document.querySelector('#imageArea');

		this._cropRect = document.querySelector('#cropRect');

		this._photoDimensions = this.props.standard.dimensions;

		interact('.landmark').draggable({
			// enable inertial throwing
			inertia: true,
			// keep the element within the area of it's parent
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: 'parent',
					endOnly: true,
					elementRect: { top: 0.5, left: 0.5, bottom: 1, right: 1 }
				})
			],

			// call this function on every dragmove event
			onmove: event => {
				const target = event.target;
				// keep the dragged position in the x/y attributes
				const x = (parseFloat(target.getAttribute('x')) || 0) + event.dx;
				const y = (parseFloat(target.getAttribute('y')) || 0) + event.dy;
				// translate the element
				this.translateElement(target, new Point(x, y));
				this.renderSvgFrame();
			},
			// call this function on every dragend event
			onend: event => {
				this.updateLandMarks();
			}
		});
	}

	toDataURL = url => fetch(url)
		.then(response => response.blob())
		.then(blob => new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(blob);
		}));

	loadAndRenderImage(url) {
		this.toDataURL(url)
			.then(data => {
				this.setState({
					image: data
				});
			});
	}

	onLoadImage() {
		this._imageWidth = this._imgElmt.naturalWidth;
		this._imageHeight = this._imgElmt.naturalHeight;
		this.scaledImageWidth = this._imgElmt.clientWidth;
		this.scaledImageHeight = this._imgElmt.clientHeight;
		if (this._imageWidth > 100 && this._imageHeight > 100) {
			this._imgElmt.style.visibility = 'visible';
			this.calculateViewPort();
			this.zoomFit();
			this.renderImage();
			this.setLandMarks(
				new Point(140, 20),
				new Point(141, this._viewPortHeight / 2.5)
			);
		}
		this.setState({
			isImageLoaded: true
		})
	}

	calculateViewPort() {
		if (!this._viewPortElmt) {
			return;
		}
		this._viewPortWidth = this._viewPortElmt.clientWidth;
		this._viewPortHeight = this._viewPortElmt.clientHeight;
	}

	zoomFit() {
		if (!(this._imageWidth > 0) || !(this._imageHeight > 0)) {
			return;
		}
		const xRatio = this._viewPortWidth / this._imageWidth;
		const yRatio = this._viewPortHeight / this._imageHeight;
		this._ratio = xRatio < yRatio ? xRatio : yRatio;
		this._xLeft = this._viewPortWidth / 2 - (this._ratio * this._imageWidth) / 2;
		this._yTop = this._viewPortHeight / 2 - (this._ratio * this._imageHeight) / 2;
	}

	renderImage() {
		const xw = this._imageWidth * this._ratio;
		const yh = this._imageHeight * this._ratio;
		this._imgElmt.width = xw;
		this._imgElmt.height = yh;
		this.translateElement(this._imgElmt, new Point(this._xLeft, this._yTop));
	}

	setLandMarks(crownPoint, chinPoint) {
		this.crownPoint = crownPoint;
		this.chinPoint = chinPoint;
		this.renderLandMarks();
		this.updateLandMarks();
	}

	updateLandMarks() {
		this.crownPoint = this.screenToPixel(this._crownMarkElmt, true);
		this.chinPoint = this.screenToPixel(this._chinMarkElmt, true);

		this.setState({
			crownPosition: this.crownPoint,
			chinPosition: this.chinPoint
		});

		let height = parseInt(this._cropArea.getAttribute('height'));
		let width = parseInt(this._cropArea.getAttribute('width'));


		let imageHeight = parseInt(this._imgElmt.getAttribute('height'));
		let imageWidth = parseInt(this._imgElmt.getAttribute('width'));
		let crownPoint = {
			x: (this.crownPoint.x * this._ratio) / imageWidth * 100,
			y: (this.crownPoint.y * this._ratio) / imageHeight * 100
		};
		let chinPoint = {
			x: (this.chinPoint.x * this._ratio) / imageWidth * 100,
			y: (this.chinPoint.y * this._ratio) / imageHeight * 100
		};


		this.props.emitter.emit(Constants.UPDATE_LANDMARK, {
			crownPosition: crownPoint,
			chinPosition: chinPoint,
			angle: this.angle,
			cropArea: this.frameCoords.map((item) => {


				//item = { x: (item.x) / imageWidth * 100, y: item.y / imageHeight * 100 };
				//return {x: (item.x ) / imageWidth * 100, y: item.y / imageHeight * 100}
				// remove viewport padding
				item.x -= Math.abs(imageWidth - this._viewPortWidth) / 2;
				item.y -= Math.abs(imageHeight - this._viewPortHeight) / 2;
				// convert to percents
				return { x: (item.x) / imageWidth * 100, y: item.y / imageHeight * 100 };
			})
		});

	}

	renderLandMarks() {
		if (
			this.crownPoint &&
			this.crownPoint.x &&
			this.crownPoint.y &&
			this.chinPoint &&
			this.chinPoint.x &&
			this.chinPoint.y &&
			this._imageWidth > 100 &&
			this._imageHeight > 100
		) {
			const p1 = this.pixelToScreen(this.crownPoint);
			const p2 = this.pixelToScreen(this.chinPoint);
			this.translateElement(this._crownMarkElmt, p1);
			this.translateElement(this._chinMarkElmt, p2);
			this.renderSvgFrame();
			this.landmarkVisibility = 'visible';
		}
		else {
			this.landmarkVisibility = 'hidden';
		}
	}

	pixelToScreen(pt) {
		return new Point(
			this._xLeft + pt.x /** this._ratio*/ - this._crownChinMarkSize / 2,
			this._yTop + pt.y /** this._ratio*/ - this._crownChinMarkSize / 2
		);
	}

	screenToPixel(pt, round = false) {
		if (pt.x === undefined || pt.y === undefined) {
			pt = this.getMarkScreenCenter(pt);
		}
		const xPrime = (pt.x - this._xLeft) / this._ratio;
		const yPrime = (pt.y - this._yTop) / this._ratio;
		if (round) {
			return new Point(Math.round(xPrime), Math.round(yPrime));
		}
		return new Point(xPrime, yPrime);
	}

	getMarkScreenCenter(elmt) {
		const x = parseFloat(elmt.getAttribute('x')) + (this._crownChinMarkSize) / 2.0;
		const y = parseFloat(elmt.getAttribute('y')) + (this._crownChinMarkSize) / 2.0;
		return new Point(x, y);
	}

	translateElement(elmt, pt) {
		// Translate the element position
		elmt.style.transform = elmt.style.webkitTransform = `translate(${pt.x}px, ${pt.y}px)`;
		// Store it in attached properties
		elmt.setAttribute('x', pt.x);
		elmt.setAttribute('y', pt.y);
	}

	renderSvgFrame() {
		const p1 = this.getMarkScreenCenter(this._crownMarkElmt);
		const p2 = this.getMarkScreenCenter(this._chinMarkElmt);

		// Render middle line
		this._renderSegment(this._middleLine, p1, p2);

		const faceHeight = p1.distTo(p2);
		const crownSegment = pointsAtDistanceNorm(p1, p2, faceHeight * 0.5, p1);
		if (Math.abs(crownSegment[0].x) !== Math.abs(crownSegment[1].x))
			this._renderSegment(this._crownLine, crownSegment[0], crownSegment[1]);

		const chinSegment = pointsAtDistanceNorm(p1, p2, faceHeight * 0.5, p2);
		if (Math.abs(chinSegment[0].x) !== Math.abs(chinSegment[1].x))
			this._renderSegment(this._chinLine, chinSegment[0], chinSegment[1]);

		// Render face ellipse
		const ra = faceHeight / 2;
		const rb = 0.68 * ra;
		const pc = middlePoint(p1, p2);
		const angleRad = p2.angle(p1);
		const angleDeg = (angleRad * 180) / Math.PI;
		this._faceEllipse.setAttribute('rx', ra);
		this._faceEllipse.setAttribute('ry', rb);
		this._faceEllipse.setAttribute('cx', pc.x);
		this._faceEllipse.setAttribute('cy', pc.y);
		this._faceEllipse.setAttribute('transform', `rotate(${angleDeg}, ${pc.x}, ${pc.y})`);

		// Render photo cropping rectangle
		if (!this._photoDimensions) {
			return;
		}

		const cropCenter = getCroppingCenter(this._photoDimensions, p1, p2);
		const scale = faceHeight / this._photoDimensions.faceHeight;
		const dx = this._photoDimensions.pictureHeight * scale;
		const dy = this._photoDimensions.pictureWidth * scale;

		const svgElmt = this._imageArea;
		svgElmt.setAttribute('x', this._xLeft);
		svgElmt.setAttribute('y', this._yTop);
		svgElmt.setAttribute('width', this._imageWidth * this._ratio);
		svgElmt.setAttribute('height', this._imageHeight * this._ratio);

		this._setRotatedRect(this._cropArea, cropCenter, dx, dy, angleDeg);
		this._setRotatedRect(this._cropRect, cropCenter, dx, dy, angleDeg);
		const points = rotatedRectangle(cropCenter, dx, dy, angleRad);
		this.frameCoords = points;
		this.angle = {
			rad: angleRad,
			deg: angleDeg
		};
		const invalidCrop = points.some(pt => {
			const ptPix = this.screenToPixel(pt);
			return ptPix.x < 0 || ptPix.x > this._imageWidth || ptPix.y < 0 || ptPix.y > this._imageHeight;
		});
		this._cropRect.setAttribute('stroke', invalidCrop ? '#cc3d2e' : '#2ecc8a');
	}

	_setRotatedRect(svgElmt, center, w, h, angle) {
		svgElmt.setAttribute('x', center.x - w / 2);
		svgElmt.setAttribute('y', center.y - h / 2);
		svgElmt.setAttribute('width', w);
		svgElmt.setAttribute('height', h);
		svgElmt.setAttribute('transform', `rotate(${angle}, ${center.x}, ${center.y})`);
	}

	_renderSegment(svdElmt, p1, p2) {
		svdElmt.setAttribute('x1', p1.x);
		svdElmt.setAttribute('y1', p1.y);
		svdElmt.setAttribute('x2', p2.x);
		svdElmt.setAttribute('y2', p2.y);
	}

	imageLoadFailed() {
	}

	render(props, state, context) {
		return <LoadingMask loading={!this.state.isImageLoaded} text={'loading...'} style={{ width: '100%', height: '100%' }}>
			<div style={{ margin: '0 auto', padding: '10px' }}>
				<div id="viewport">
					<img
						id="inputPhoto"
						alt=""
						title="Input picture"
						src={this.state.image}
						onLoad={this.onLoadImage.bind(this)}
						onError={this.imageLoadFailed.bind(this)}/>
					<svg className="box" style={{ visibility: this.state.landmarkVisibility && this.state.isImageLoaded ? 'visible' : 'hidden' }}
						 pointer-events="none">
						<image class="inputPhoto" xlink:href={this.state.image} x="0" y="0" height="0" width="0"/>
						<defs>
							<mask id="mask" x="0" y="0" width="100%" height="100%">
								<rect id="imageArea" x="0" y="0" width="100%" height="100%" fill="#ffffff"/>
								<rect id="cropArea" x="0" y="0" width="200" height="200" fill="#000"/>
							</mask>
						</defs>
						<rect x="0" y="0" width="1000" height="1000" fill-opacity="0.4" mask="url(#mask)"/>
						<rect id="cropRect" x="0" y="0" width="200" height="200" fill="none"/>
						<line id="heightLine" x1="0" y1="0" x2="0" y2="0" className="dimension-line"/>
						<line id="widthLine" x1="0" y1="0" x2="0" y2="0" className="dimension-line"/>
						<line id="middleLine" x1="0" y1="0" x2="200" y2="200" className="annotation"/>
						<line id="crownLine" x1="0" y1="0" x2="200" y2="200" className="annotation"/>
						<line id="chinLine" x1="0" y1="0" x2="200" y2="200" className="annotation"/>
						<ellipse id="faceEllipse" cx="100" cy="50" rx="100" ry="50" fill="none" className="annotation"/>

					</svg>
					<div className="landmark" id="crownMark"
						 style={{ visibility: this.state.landmarkVisibility && this.state.isImageLoaded ? 'visible' : 'hidden' }}/>
					<div className="landmark" id="chinMark"
						 style={{ visibility: this.state.landmarkVisibility && this.state.isImageLoaded ? 'visible' : 'hidden' }}/>

				</div>
			</div>
		</LoadingMask>;
	}
}

export default Editor;
