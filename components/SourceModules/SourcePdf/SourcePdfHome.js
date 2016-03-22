'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import withStyles from '../../../decorators/withStyles';
import CommonHeader from '../../HeaderComponents/CommonHeader.js';
import ReturnButton from '../../HeaderComponents/ReturnButton';
import CommentButton from '../../HeaderComponents/CommentButton';
import DownLoadButton from '../../HeaderComponents/DownLoadButton';
import CollectButton from '../../HeaderComponents/CollectButton';
import MenuButton from '../../HeaderComponents/MenuButton';
import SourcePdfZoomBox from './SourcePdfZoomBox';
import ProgressController from './ProgressController';
import SourcePdfCatalogPage from './SourcePdfCatalogPage';

import styles from './SourcePdf.scss';
import _ from 'lodash';


@withStyles(styles)
class SourcePdfHome extends React.Component {
	constructor(props) {
		super(props);
		this.changePages = this.changePages.bind(this);
	}

	toggleShow() {
		let SourcePdfZoomBox = document.getElementById('SourcePdfZoomBox');
		if (SourcePdfZoomBox.style.zIndex < 10010) {
			SourcePdfZoomBox.style.zIndex = 10011;
		} else {
			SourcePdfZoomBox.style.zIndex = 0;
		}
	}
	changePages(e) {
		const
			pageWidth = window.innerWidth,
			pageHeight = window.innerHeight;
		let 
			startX0 = e.targetTouches[0].clientX,
			touchesNum = e.targetTouches.length; 

		if (touchesNum == 1) {
    	if (startX0 < (pageWidth * 0.3)) {
				alert('pre');
			}
			if ((startX0 > (pageWidth * 0.3)) && (startX0 < (pageWidth * 0.6))) {	
				this.toggleShow();
			}
      if (startX0 > (pageWidth * 0.6)) {	
				alert('next');
			}
	  }
	}
	one(me) {
		console.log(me);
	}
	componentDidMount() {
		document.getElementById('SourcePdfZoomBox').addEventListener('touchstart', this.changePages,true);
	}
	componentWillUnmount() {
			document.getElementById('SourcePdfZoomBox').removeEventListener('touchstart', this.changePages,true);
	}
	render() {
		let funcs = {
			slideMove: {
				normal: this.one,
				overflow: this.one,
				loss: this.one,
			},
			slideEnd: {
				normal: null,
				overflow: null,
				loss: this.one
			}
		};
		return (
			<div className="SourcePdfHome">
				<CommonHeader>
					<Link to="/source/pdf/3/pdfcatalog">
						<MenuButton/>
					</Link>					
					<CommentButton/>
				</CommonHeader>
				<SourcePdfZoomBox/>
				<ProgressController funcs={funcs}/>
			</div>
		);
	}
}

export default SourcePdfHome;