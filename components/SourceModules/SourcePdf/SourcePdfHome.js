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
		this.toggleShow = this.toggleShow.bind(this);
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
		let startX0 = e.pageX;
			e.preventDefault();
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
	one(me) {
		console.log(me);
	}
	componentDidMount() {
		//document.body.onclick = this.changePages;
		//document.body.addEventListener('click',this.changePages)
		document.getElementById('SourcePdfZoomBox').addEventListener('click', this.changePages.bind(this),false);
	}
	componentWillUnmount() {
		document.getElementById('SourcePdfZoomBox').removeEventListener('click', this.changePages.bind(this),false);
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
					<Link to="/source/commentpage">			
						<CommentButton/>
					</Link>
				</CommonHeader>
				<SourcePdfZoomBox/>
				<ProgressController funcs={funcs} data={{overPages: 300, totalPages: 400}}/>
			</div>
		);
	}
}

export default SourcePdfHome;