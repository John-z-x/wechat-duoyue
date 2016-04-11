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
import styles from './SourcePdfCatalogPage.scss';
import _ from 'lodash';

const data = [
		{thumbnailId: 1, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 2, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 3, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 4, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 5, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 1, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 2, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 3, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 4, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 5, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 1, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 2, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 3, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 4, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 5, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 1, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 2, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 3, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 4, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 5, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 1, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 2, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 3, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 4, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 5, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 1, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 2, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 3, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 4, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
		{thumbnailId: 5, imgSrc: 'http://file.duoyue.me/upload/source/pdfimages/2016_02_18_153729172/0002_mini.Png',},
	];
const nowIndex = 3;

@withStyles(styles)
class SourcePdfCatalogPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//document.removeEventListener('touchmove', function (e) { e.preventDefault();}, false);
	}
	componentWillUnmount() {
		//document.addEventListener('touchmove', function (e) { e.preventDefault();}, false);
	}
	render() {
		let thumbnailItems = data.map((item, i) => {
			return (
				<Link to="/source/pdf/3" className={classNames('item', {'cur': nowIndex === i + 1})} key={i}>
					<img className="thumbnail" src={item.imgSrc} alt="pdf" title="pdf"/>
					<p className="thumbnail-index">{i + 1}</p>
				</Link>
			)
		});
		return (
			<div className="SourcePdfCatalogPage">
				<CommonHeader>
					<ReturnButton text="续读"/>
					<CommentButton/>
				</CommonHeader>
				<div className="content-wrap">
					{thumbnailItems}
				</div>
			</div>
		);
	}
}

export default SourcePdfCatalogPage;