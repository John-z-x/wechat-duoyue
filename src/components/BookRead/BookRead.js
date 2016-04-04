import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';

import withStyles from '../../decorators/withStyles';
import styles from './BookRead.scss';

import HeaderComponents from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import HeaderStyleModify from '../HeaderComponents/HeaderStyleModify';
import MenuButton from '../HeaderComponents/MenuButton';
import CommentButton from '../HeaderComponents/CommentButton';

import ProgressController from '../UIComponent/ProgressController/ProgressController';
import ArticleHeader from './ArticleHeader';
import CatalogArea from './CatalogArea';
import StyleBox from './StyleBox';
import FontBox from './FontBox';

let data = {
	'title': '有师兄的师妹像棵草',
	"article": "芳准道：那道法大会也没什么意思，说的都是都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。"
}

@withStyles(styles)
class BookRead extends React.Component{
	constructor(){
		super();
		this.state = {
			canvasHeight: document.documentElement.clientHeight, //容器的高度
			pageOver: -1, //当前页数
			pageTotal: 10, //总页数
			progressValue: 0, //进度条
			fontChangeDisplay: false, //显示字体控制
			headerAndFooterShow: true, //显示头部和尾部
			catalogAreaDisplay: false, //显示章节
			color: "white", //控制颜色
			zoomLevel: 0 //字体缩放的大小
		};
		this.zoomLevelMax = 2;
		this.moveDistance = 0;
	}

	//加载数据后需调用此方法进行初始化视觉
	//初始化滚动值
	// rootView(type){
	// 	this.Canvas.scrollTop = '0px';
	// 	this.maybeHeight = document.documentElement.clientHeight - 40; 		//计算可用高度
	//   this.maybeHeight = this.maybeHeight - (this.maybeHeight % this.lineHeight);		//消除高度影响
	//   this.Canvas.style.height = this.maybeHeight + 'px';	  //文字容器高度设置
	//   this.Canvas.style.fontSize = this.fontSize + 'px';
	//   this.pageTotal = Math.ceil(this.Canvas.scrollHeight / this.Canvas.clientHeight);
	// 	if(this.zoomTotal > 0)
	// 	{
	// 		this.pageOver = parseInt(this.zoomCurrentPage / this.zoomTotal * this.pageTotal);
	// 	}
	// 	this.pageOver = (this.pageOver == 0 ? 1 : this.pageOver);
  //
	// }

	// zoomIn(){
	// 	this.zoomLevel++;
	// 	if(this.zoomLevel>=this.zoomLevelMax-1)
	// 	{
	// 		this.zoomLevel=this.zoomLevelMax-1;
	// 	}
	// 	this.zoomTotal = this.pageTotal;
	// 	this.zoomCurrentPage = this.pageOver;
	// 	this.setZoomLevel();
	// }
  //
	// zoomOut(){
	// 	this.zoomLevel--;
	// 	if(this.zoomLevel<0)
	// 	{
	// 		this.zoomLevel=0;
	// 	}
	// 	this.zoomTotal = this.pageTotal;
	// 	this.zoomCurrentPage = this.pageOver;
	// 	this.setZoomLevel();
	// }
	//
	touchStart(e){
		let startX0 ,startY0, startX1, startY1;
		startX0 = e.targetTouches[0].pageX;
		startY0 = e.targetTouches[0].pageY;
		if(e.targetTouches.length==2)
		{
			e.preventDefault();
			startX1 = e.targetTouches[1].pageX;
			startY1 = e.targetTouches[1].pageY;
			this.startDistance = Math.sqrt(Math.pow((startX0-startX1), 2) + Math.pow(startY0-startY1, 2));
		}
	}

	touchMove(e){
		if(e.targetTouches.length==2)
		{
			let moveX0, moveY0, moveX1, moveY1;
			e.preventDefault();
			moveX0 = e.targetTouches[0].pageX;
			moveY0 = e.targetTouches[0].pageY;
			moveX1 = e.targetTouches[1].pageX;
			moveY1 = e.targetTouches[1].pageY;
			this.moveDistance = Math.sqrt(Math.pow((moveX0-moveX1),2) + Math.pow(moveY0-moveY1,2));
		}
	}

	touchEnd(e){
		if(this.moveDistance == 0) return;
		if(this.moveDistance > this.startDistance + 20)
		{
			::this.zoom("in");
		}
		else if(this.startDistance > this.moveDistance + 20)
		{
			::this.zoom("out");
		}
	}

	componentDidMount(){
		let optionCanvas = findDOMNode(this.refs.optionCanvas);
		optionCanvas.addEventListener('touchstart', ::this.touchStart, false);
		optionCanvas.addEventListener('touchmove', ::this.touchMove, false);
		optionCanvas.addEventListener('touchend', ::this.touchEnd, false);
		this.reSize();
		this.setState({
			pageOver: 0
		})
	}

	componentWillUnmount(){
		let optionCanvas = findDOMNode(this.refs.optionCanvas);
		optionCanvas.removeEventListener('touchstart', ::this.touchStart, false);
		optionCanvas.removeEventListener('touchmove', ::this.touchMove, false);
		optionCanvas.removeEventListener('touchend', ::this.touchEnd, false);
	}

	onOptionCanvasClick(e) {
		let pageWidth = window.innerWidth, type="";
		let startX0 = e.pageX;
		e.preventDefault();
		if (startX0 < (pageWidth * 0.3)) {
			type = "prev";
		}else if ((startX0 > (pageWidth * 0.3)) && (startX0 < (pageWidth * 0.6))) {
			type = "toggle";
		}else if (startX0 > (pageWidth * 0.6)) {
			type= "next";
		}
		::this.goToPage(type);
	}

	onProgressControll(type, progressValue) {
		let { pageTotal } = this.state;
		let pageOver = Math.floor(progressValue*pageTotal);
    this.setState({
		  progressValue: pageOver/pageTotal
	  });
		switch(type) {
			case "end":
				this.setState({
					pageOver: pageOver
				});
				break;
			default:
				return null;
		}
	}

	reSize() {
		const HEADER_HEIGHT = 40,
				  fontSize = [16, 20, 24],
				  contentHeight = document.documentElement.clientHeight - HEADER_HEIGHT;
    let lineHeight = fontSize[this.state.zoomLevel]*1.5;
		this.setState({
			canvasHeight: contentHeight - Math.floor(contentHeight%lineHeight)
		});
	}

	goToPage(type, index) {
		let { pageOver,headerAndFooterShow, pageTotal } = this.state;
		console.log(type);
		switch(type) {
			case "prev":
				pageOver > 0 &&
				this.setState({
					pageOver: pageOver - 1,
					progressValue: (pageOver - 1)/pageTotal
				});
				break;
			case "toggle":
				this.setState({
					headerAndFooterShow: !headerAndFooterShow
				});
				break;
			case "next":
					pageOver < pageTotal - 2 &&
				this.setState({
					pageOver: pageOver + 1,
					progressValue: (pageOver + 1)/pageTotal
				});
				break;
			case "jump":
				this.setState({
					pageOver: index,
					progressValue: index/pageTotal
				});
				break;
			default:
				return null;
		}
	}

	zoom(type) {
		let { zoomLevel } = this.state;
	  switch(type) {
			case "in":
				zoomLevel > 1 &&
				this.setState({
					zoomLevel: zoomLevel - 1
				}, ::this.reSize);
				break;
			case "out":
				zoomLevel < this.zoomLevelMax &&
				this.setState({
					zoomLevel: zoomLevel + 1
				}, ::this.reSize);
				break;
			default:
				return null;
		}
	}

	onHeaderFontClick(type) {
		::this.zoom("out");
	}

	onMenuButtonClick() {
		this.setState({
			catalogAreaDisplay:!this.state.catalogAreaDisplay
		})
	}

	render(){
		let { pageOver, pageTotal, headerAndFooterShow, progressValue, canvasHeight, catalogAreaDisplay, zoomLevel } = this.state;
		let zoomClass = "font-size-"+zoomLevel;
		let zIndex = headerAndFooterShow ? 10009 : 11002, footerHeight = headerAndFooterShow ? 50 : 0;
		let scrollTop = -pageOver*canvasHeight || 0;
		console.log(catalogAreaDisplay);
		console.log(canvasHeight);
		return (
			<div className="BookRead" >
				<HeaderComponents>
					<ReturnButton />
					<HeaderStyleModify onHeaderStyleModifyClick={::this.onHeaderFontClick}/>
					<Link to="/source/commentpage">
						<CommentButton/>
					</Link>
					<MenuButton classname="right" onMenuButtonClick={::this.onMenuButtonClick}/>
				</HeaderComponents>
				{
					catalogAreaDisplay &&
					<CatalogArea chapter={1} onReturn={::this.onMenuButtonClick}/>
				}
				<StyleBox/>
				<FontBox/>
				<div id="pageTitleShow" className="pageTitleShow" style={{zIndex: zIndex}}>{data.title}</div>
				<div className="text_bg" id="textCanvasBg" style={{zIndex: zIndex, height: canvasHeight}}>
					<div id="textCanvas" className={"duoyue_read "+ zoomClass} style={{marginTop: scrollTop}}>{data.article}</div>
					<div id="opationCanvas" className="opationCanvas" ref="optionCanvas" onClick={::this.onOptionCanvasClick}></div>
				</div>
				<footer className="footer" style={{height: footerHeight}}>
					<ProgressController progressValue={progressValue} onProgressControll={::this.onProgressControll}>
						<p className="progress-num" id="progress-num">
							{pageOver}/{pageTotal}
						</p>
					</ProgressController>
				</footer>
			</div>
		);
	}
}
 
export default BookRead;
