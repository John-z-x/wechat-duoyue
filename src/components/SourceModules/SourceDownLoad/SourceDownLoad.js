'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import withStyles from '../../../decorators/withStyles';
import CommonHeader from '../../HeaderComponents/CommonHeader.js';
import ReturnButton from '../../HeaderComponents/ReturnButton';


import styles from './SourceDownLoad.scss';
import _ from 'lodash';


@withStyles(styles)
class SourceDownLoad extends React.Component {
	constructor(props) {
		super(props);
	}
	reSizePoster() {
		let posterWrap = this.refs.posterWrap;
		posterWrap.style.height = posterWrap.offsetWidth + 'px';
	}
	componentDidMount() {
		this.reSizePoster();
	}
	
	render() {
		let poster = 'http://file.duoyue.me/upload/source/pdfimages/2015_11_26_164847868/0000.Png';
		return (
			<div className="SourceDownLoad">
				<CommonHeader>
					<ReturnButton/>
				</CommonHeader>
				<div className="poster-wrap" ref="posterWrap">
					<div className="source-poster" style={{backgroundImage: 'url('+poster+')'}}></div>
				</div>
				<h4 className="source-title">如果没有遇见你</h4>
				<div className="action-wrap">
		      <div className="action-box clearfix">
	          <div className="download-local-btn down-over left">
	          	<em className="icon"></em>
	          	<h4>下载到本机</h4>
	          </div>
		        <div className="send-to-phone-btn send-over left" id="way-phone">
		        	<em className="icon"></em>
		          <h4>发送链接到手机</h4>
		        </div>
		      </div>
		    </div>
		    <div className="input-wrap arrow-top ">
		    	<input className="num-input" type="text" placeholder="请输入手机号码"/>
		    	<a className="submit-btn" href="javascript:void(0)">确认</a>
		    </div>
			</div>

		);
	}
}

export default SourceDownLoad;