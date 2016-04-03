'use strict';
import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import withStyles from '../../../decorators/withStyles';
import styles from './SourcePdf.scss';

@withStyles(styles)
class SourcePdfZoomBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 1
		}
	}
  
	onImgClick(e) {
		let pageWidth = window.innerWidth, type = "",
				onImgClick = this.props.onImgClick;
		let startX0 = e.pageX;
		e.preventDefault();
		if (startX0 < (pageWidth * 0.3)) {
			type = "prev";
		}else if ((startX0 > (pageWidth * 0.3)) && (startX0 < (pageWidth * 0.6))) {
			type = "toggle"
		}else if (startX0 > (pageWidth * 0.6)) {
			type= "next";
		}
		onImgClick(type);
	}
	
	componentDidMount() {
		let myZoom = findDOMNode(this.refs.myZoom);
		let myScroll = new IScroll('#myZoom', {
			preventDefault: false,
			zoom: true,
			scrollX: true,
			scrollY: true,
			mouseWheel: true,
			wheelAction: 'zoom'
		});
		myZoom.addEventListener('touchmove', (e) => e.preventDefault() , false);
	}

	componentWillUnmount() {
		let myZoom = findDOMNode(this.refs.myZoom);
		myZoom.removeEventListener('touchmove', (e) => e.preventDefault() , false);
	}

	render() {
		let { zIndex, img } = this.props.zoomBox;
		return (
			<div className="SourcePdfZoomBox" style={{zIndex: zIndex}}>
				<div className="zoom-box" id="myZoom" ref="myZoom" onClick={::this.onImgClick}>
					<div className="content" style={{backgroundImage: "url(" + img.src + ")"}}>
					</div>
				</div>
			</div>
		);
	}
}

export default SourcePdfZoomBox;