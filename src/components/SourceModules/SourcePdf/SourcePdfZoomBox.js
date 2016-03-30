'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import withStyles from '../../../decorators/withStyles';
import styles from './SourcePdf.scss';
import _ from 'lodash';


@withStyles(styles)
class SourcePdfZoomBox extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		var myScroll;
	  function loaded() {
			myScroll = new IScroll('#myZoom',{
				preventDefault: false,
				zoom: true,
				scrollX: true,
				scrollY: true,
				mouseWheel: true,
				wheelAction: 'zoom'
			});
		}
		document.getElementById('myZoom').addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		loaded();
		//document.addEventListener('load', loaded, false);
	}
	componentWillUnmount() {
		document.getElementById('myZoom').removeEventListener('touchmove', function (e) { e.preventDefault();}, false);
	}
	render() {
		const pdfImg = 'http://file.duoyue.me/upload/source/pdfimages/2015_11_26_164847868/0000.Png';

		let bgImg = {
			backgroundImage: 'url(' + pdfImg + ')',
		};
		return (
			<div className="SourcePdfZoomBox" id="SourcePdfZoomBox" style={{zIndex: 0}}>
				<div className="zoom-box" id="myZoom">
					<div className="content" style={bgImg}>
					</div>
				</div>
			</div>
		);
	}
}

export default SourcePdfZoomBox;