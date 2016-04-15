'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import withStyles from '../../../decorators/withStyles';
import styles from './SourcePdf.scss';

import CommonHeader from '../../HeaderComponents/CommonHeader.js';
import CommentButton from '../../HeaderComponents/CommentButton';
import MenuButton from '../../HeaderComponents/MenuButton';

import SourcePdfZoomBox from './SourcePdfZoomBox';
import ProgressController from '../../UIComponent/ProgressController/ProgressController';

let pdfDataList = require("../../../../assets/MockData/pdf_imgs.json");

// let alertContentFirst = {
// 	content: "这是第一页"
// };
// let alertContentEnd = {
// 	content: "这是最后一页"
// };

@withStyles(styles)
class SourcePdfHome extends React.Component {
	constructor(props) {
		super(props);
		this.count = pdfDataList.length;
		this.state = {
			index: 0, //控制第几页,
			loadIndex: 4, // 预加载数量
			showHeaderAndFooter: false, //显示隐藏头和尾
			progressValue: 0 //显示进度条的百分比
			//showAlert: false//显示隐藏弹出框 TODO
		};
	}

	onImgClick(type) {
		let { index, showHeaderAndFooter } = this.state;
		switch(type) {
			case "prev": //前一页
				this.setState({
					showHeaderAndFooter: false
				});
				index > 0 &&
				this.setState({
					index: index - 1,
					progressValue: index/this.count
				});
				break;
			case "toggle":  //显示隐藏头和脚
				this.setState({
					showHeaderAndFooter: !showHeaderAndFooter
				});
				break;
			case "next": //下一个
				this.setState({
					showHeaderAndFooter: false
				});
				index < pdfDataList.length - 1 &&
				this.setState({
					index: index + 1,
					progressValue: (index+2)/this.count
				});
				break;
			default :
				return null;
		}
	}

	onProgressControll(type, progressValue) {
		let index = Math.floor(progressValue*this.count);
		this.setState({
			progressValue: progressValue
		});
		switch(type) {
			case "start":
				break;
			case "move":
				break;
			case "end":
        this.setState({
					index: index,
					showHeaderAndFooter: false
				});
				break;
			default :
				return null;
		}
	}

	componentDidMount() {
		this.setState({
			progressValue: 1/pdfDataList.length
		})
	}

	render() {
		let { index, showHeaderAndFooter, progressValue } = this.state;
		let zoomBox = {
      zIndex: showHeaderAndFooter ? 0 : 11001 ,
			img: pdfDataList[index]
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

				<SourcePdfZoomBox zoomBox={zoomBox} onImgClick = {::this.onImgClick} />

				<footer className="footer">
					<ProgressController onProgressControll={::this.onProgressControll} progressValue={progressValue}>
						<p className="progress-num" id="progress-num">
							{index+1}/{this.count}
						</p>
					</ProgressController>
				</footer>

			</div>
		);
	}
}

export default SourcePdfHome;