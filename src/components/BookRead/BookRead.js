import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';

////import withstyles from '../../decorators/withStyles';
import styles from './BookRead.scss';

import HeaderComponents from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import HeaderStyleModify from '../HeaderComponents/HeaderStyleModify';
import MenuButton from '../HeaderComponents/MenuButton';
import CommentButton from '../HeaderComponents/CommentButton';

import ArticleFontStyleModify from '../Modals/ArticleFontStyleModify';
import ProgressController from '../UIComponent/ProgressController/ProgressController';
import CatalogArea from './CatalogArea';

let data = {
	'title': '有师兄的师妹像棵草',
	"article": "芳准道：那道法大会也没什么意思，说的都是都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。"
}

////@withStyles(styles)
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
			zoomLevel: 0, //字体缩放的大小
			fontFamily: "YaHei" //字体样式
		};
		this.zoomLevelMax = 2;
		this.moveDistance = 0;
	}

	touchStart(e){
		let startX0 ,startY0, startX1, startY1, target = e.targetTouches;
		startX0 = target[0].pageX;
		startY0 = target[0].pageY;
		if(target.length==2)
		{
			e.preventDefault();
			startX1 = target[1].pageX;
			startY1 = target[1].pageY;
			this.startDistance = Math.sqrt(Math.pow((startX0-startX1), 2) + Math.pow(startY0-startY1, 2));
		}
	}

	touchMove(e){
		if(e.targetTouches.length==2)
		{
			let moveX0, moveY0, moveX1, moveY1, target = e.targetTouches;
			e.preventDefault();
			moveX0 = target[0].pageX;
			moveY0 = target[0].pageY;
			moveX1 = target[1].pageX;
			moveY1 = target[1].pageY;
			this.moveDistance = Math.sqrt(Math.pow((moveX0-moveX1),2) + Math.pow(moveY0-moveY1,2));
		}
	}

	touchEnd(e){
		const MOVEDISTACE_THRESHOLD = 20;
		if(this.moveDistance == 0) return;
		if(this.moveDistance > this.startDistance + MOVEDISTACE_THRESHOLD)
		{
			::this.zoom("in");
		}
		else if(this.startDistance > this.moveDistance + MOVEDISTACE_THRESHOLD)
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
			pageOver: 1,
		})
	}

	componentWillUnmount(){
		let optionCanvas = findDOMNode(this.refs.optionCanvas);
		optionCanvas.removeEventListener('touchstart', ::this.touchStart, false);
		optionCanvas.removeEventListener('touchmove', ::this.touchMove, false);
		optionCanvas.removeEventListener('touchend', ::this.touchEnd, false);
	}

	onOptionCanvasClick(e) {
		let pageWidth = window.innerWidth, type="", PREV_TRESHOD = 0.3, NEXT_TRESHOD = 0.6;
		let startX0 = e.pageX;
		e.preventDefault();
		if (startX0 < (pageWidth * PREV_TRESHOD)) {
			type = "prev";
		}else if ((startX0 > (pageWidth * PREV_TRESHOD)) && (startX0 < (pageWidth * NEXT_TRESHOD))) {
			type = "toggle";
		}else if (startX0 > (pageWidth * NEXT_TRESHOD)) {
			type= "next";
		}
		::this.goToPage(type);
		this.setState({
			fontChangeDisplay: false
		})
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
		let textCanvas = findDOMNode(this.refs.textCanvas);
		const HEADER_HEIGHT = 40,
				  fontSize = [16, 20, 24],
				  contentHeight = document.documentElement.clientHeight - HEADER_HEIGHT;
    let lineHeight = fontSize[this.state.zoomLevel]*1.5,
				canvasHeight = contentHeight - Math.floor(contentHeight%lineHeight),
				pageTotal = Math.ceil(textCanvas.offsetHeight/canvasHeight);
		this.setState({
			canvasHeight: canvasHeight,
			pageTotal: pageTotal,
      progressValue: 1/pageTotal
		});
	}

	goToPage(type, index) {
		let { pageOver,headerAndFooterShow, pageTotal } = this.state;
		switch(type) {
			case "prev":
				pageOver > 1 &&
				this.setState({
					pageOver: pageOver - 1,
					progressValue: (pageOver - 1) /pageTotal
				});
				break;
			case "toggle":
				this.setState({
					headerAndFooterShow: !headerAndFooterShow
				});
				break;
			case "next":
					pageOver < pageTotal &&
				this.setState({
					pageOver: pageOver + 1,
					progressValue: (pageOver + 1)/(pageTotal)
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
				zoomLevel > 0 &&
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

	onHeaderFontClick() {
		this.setState({
			fontChangeDisplay: !this.state.fontChangeDisplay
		})
	}

	onMenuButtonClick() {
		this.setState({
			catalogAreaDisplay:!this.state.catalogAreaDisplay
		})
	}

	onTypeChangeClick(type, value) {
    console.log(type+" "+value);
		if( type.indexOf("size") > -1) {
			switch(value) {
				case "big":
					::this.zoom("out");
					break;
				case "small":
					::this.zoom("in")
					break;
				default:
					return null;
			}
		}else {
			this.setState({
				[type]: value
			})
		}

	}

	render(){
		let { pageOver, pageTotal, headerAndFooterShow, progressValue, canvasHeight, catalogAreaDisplay, zoomLevel,
				fontChangeDisplay, color, fontFamily} = this.state;
		let zoomClass = "font-size-"+zoomLevel;
		let pageOverValue = progressValue*pageTotal;
		let zIndex = headerAndFooterShow ? 10009 : 11002, footerHeight = headerAndFooterShow ? 50 : 0;
		let scrollTop = -(pageOver-1)*canvasHeight || 0;
		return (
			<div className="BookRead" >
				<HeaderComponents color={color}>
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
				<div className={"forColor "+color}></div>
				<div id="pageTitleShow" className={"pageTitleShow "+color} style={{zIndex: zIndex}}>{data.title}</div>
				<div className={"text_bg "+color} id="textCanvasBg" style={{zIndex: zIndex, height: canvasHeight}}>
					<div id="textCanvas" className={"duoyue_read "+ zoomClass+" "+fontFamily+" "+color} style={{marginTop: scrollTop}} ref="textCanvas">{data.article}</div>
					<div id="opationCanvas" className="opationCanvas" ref="optionCanvas" onClick={::this.onOptionCanvasClick}></div>
				</div>
				<footer className={"footer "+color} style={{height: footerHeight}}>
					<div className="controll-box">
					<ProgressController progressValue={progressValue} onProgressControll={::this.onProgressControll}>
						<p className="progress-num" id="progress-num">
							{Math.ceil(pageOverValue)}/{pageTotal}
						</p>
					</ProgressController>
						</div>
				</footer>
				{
					fontChangeDisplay &&
					<ArticleFontStyleModify onTypeChangeClick={::this.onTypeChangeClick} data={{color: color, fontFamily: fontFamily}}/>
				}
			</div>
		);
	}
}
 
export default BookRead;
