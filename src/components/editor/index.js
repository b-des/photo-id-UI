import { Component, h } from 'preact';
import interact from 'interactjs';
import { middlePoint, Point, pointsAtDistanceNorm, rotatedRectangle } from '../../model/point';
import { getCroppingCenter, PhotoDimensions } from '../../model/photodimensions';
import EventEmitter from 'eventemitter3';
import { Events } from '../../shared/event-emitter/events';

class Editor extends Component{

	constructor(){
		super();
		// size of circle markers
		this._crownChinMarkSize = 16;
		this.state = {
			crownPosition: {},
			chinPosition: {},
			landmarkVisibility: true,
			image: null
		};
	}

	componentDidMount(){
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

		this._heightLine = document.querySelector('#heightLine');
		this._heightText = document.querySelector('#heightText');
		this._widthLine = document.querySelector('#widthLine');
		this._widthText = document.querySelector('#widthText');

		let standard = {
			"id": "ua_visa_photo",
			"text": "Ukraine Visa 3x4 cm (30x40 mm)",
			"country": "Ukraine",
			"docType": "Visa",
			"dimensions": {
				"pictureWidth": 30.0,
				"pictureHeight": 40.0,
				"units": "mm",
				"dpi": 600.0,
				"faceHeight": 31.0,
				"crownTop": 2.5
			},
			"backgroundColor": "#eeeeee",
			"printable": true,
			"officialLinks": [
				"http://mfa.gov.ua/ua/consular-affairs/entering-ukraine/visa-mfa-branches"
			],
			"comments": ""
		};

		this._photoDimensions = standard.dimensions;
		this.loadAndRenderImage();

		interact('.landmark').draggable({
			// enable inertial throwing
			inertia: true,
			// keep the element within the area of it's parent
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: 'parent',
					endOnly: true,
					elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
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

	 loadAndRenderImage() {
		this.toDataURL('https://image.shutterstock.com/image-photo/beauty-woman-face-portrait-beautiful-260nw-323982494.jpg')
			.then(data => {
				this.setState({
					image: data
				})
			});
	}

	onLoadImage() {
		this._imageWidth = this._imgElmt.naturalWidth;
		this._imageHeight = this._imgElmt.naturalHeight;
		if (this._imageWidth > 100 && this._imageHeight > 100) {
			this._imgElmt.style.visibility = 'visible';
			this.calculateViewPort();
			this.zoomFit();
			this.renderImage();
			this.setLandMarks(new Point(140,50), new Point(150,150));
		}
		this.props.emitter.emit(Events.LOADED_IMAGE, {
			viewPortWidth:this._viewPortWidth,
			viewPortHeight:this._viewPortHeight,
		});
		this.scaledImageWidth = this._imageArea.getAttribute('width');
		this.scaledImageHeight = this._imageArea.getAttribute('height');
		console.log(this.scaledImageWidth);
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
	}

	updateLandMarks() {
		this.crownPoint = this.screenToPixel(this._crownMarkElmt, true);
		this.chinPoint = this.screenToPixel(this._chinMarkElmt, true);

		this.setState({
			crownPosition: this.crownPoint,
			chinPosition: this.chinPoint,
		});

		let height = parseInt(this._cropArea.getAttribute('height'));
		let width = parseInt(this._cropArea.getAttribute('width'));
		this.props.emitter.emit(Events.UPDATE_LANDMARK, {
			crownPosition: this.crownPoint,
			chinPosition: this.chinPoint,
			x: parseInt(this._cropRect.getAttribute('x')),
			y: parseInt(this._cropRect.getAttribute('y')),
			height: height,
			width: width
		});
		console.log(this.crownPoint, this.chinPoint);

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
		} else {
			this.landmarkVisibility = 'hidden';
		}
	}

	pixelToScreen(pt) {
		return new Point(
			this._xLeft + pt.x * this._ratio - this._crownChinMarkSize/2,
			this._yTop + pt.y * this._ratio - this._crownChinMarkSize/2
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
		const x = parseFloat(elmt.getAttribute('x')) + (this._crownChinMarkSize ) / 2.0;
		const y = parseFloat(elmt.getAttribute('y')) + (this._crownChinMarkSize ) / 2.0;
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
		this._renderSegment(this._crownLine, crownSegment[0], crownSegment[1]);

		const chinSegment = pointsAtDistanceNorm(p1, p2, faceHeight * 0.5, p2);
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
		const invalidCrop = points.some(pt => {
			const ptPix = this.screenToPixel(pt);
			return ptPix.x < 0 || ptPix.x > this._imageWidth || ptPix.y < 0 || ptPix.y > this._imageHeight;
		});
		this._cropRect.setAttribute('stroke', invalidCrop ? 'red' : 'green');
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

	imageLoadFailed(){
	}

	render(props, state, context) {
		return <div id="viewport">
			<img
				id="inputPhoto"
				alt="Input Image"
				title="Input picture"
				src={this.state.image}
				onLoad={this.onLoadImage.bind(this)}
				onError={this.imageLoadFailed.bind(this)}

			/>
			<svg className="box" style={{ visibility: this.state.landmarkVisibility ? 'visible' : 'hidden' }}
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
				<text id="heightText" x="0" y="0" className="dimension-text" text-anchor="middle"></text>
				<line id="widthLine" x1="0" y1="0" x2="0" y2="0" className="dimension-line"/>
				<text id="widthText" x="0" y="0" className="dimension-text" text-anchor="middle"></text>
				<line id="middleLine" x1="0" y1="0" x2="200" y2="200" className="annotation"/>
				<line id="crownLine" x1="0" y1="0" x2="200" y2="200" className="annotation"/>
				<line id="chinLine" x1="0" y1="0" x2="200" y2="200" className="annotation"/>
				<ellipse id="faceEllipse" cx="100" cy="50" rx="100" ry="50" fill="none" className="annotation"/>
			</svg>
			<div className="landmark" id="crownMark"
				 style={{ visibility: this.state.landmarkVisibility ? 'visible' : 'hidden' }}/>
			<div className="landmark" id="chinMark"
				 style={{ visibility: this.state.landmarkVisibility ? 'visible' : 'hidden' }}/>
		</div>
	}
}

export default Editor;