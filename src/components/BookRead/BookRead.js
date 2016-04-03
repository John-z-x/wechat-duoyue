import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './BookRead.scss';

import ProgressController from '../UIComponent/ProgressController/ProgressController';
import ArticleHeader from './ArticleHeader';
import CatalogArea from './CatalogArea';
import StyleBox from './StyleBox';
import FontBox from './FontBox';

let dataArray = {
	'title': '有师兄的师妹像棵草',
	"article": "芳准道：那道法大会也没什么意思，说的都是都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。芳准道：那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。那道法大会也没什么意思，说的都是些陈词滥调，待在那里也是浪费时间，若不是师父与那灵闵道人是旧识，为师才懒得应付。"
}

@withStyles(styles)
class BookRead extends React.Component{
	constructor(){
		super();
		this.pageOver = 1;
		this.pageTotal = 0;
		this.CanvasBg;
		this.Canvas;
		this.opationCanvas ;
		this.fontSize = 16;
		this.lineHeight = 24;
		this.startX0;
		this.startX1;
		this.startY0;
		this.startY1;
		this.pageLock = true;
		this.zoomLock = true;
		this.pageCorrent;
		this.startDistance;
		this.moveDistance;
		this.zoomLevel = 0;
		this.zoomLevelMax = 5;
		this.zoomCurrentPage = 1;
		this.zoomTotal = 0;
		this.maybeHeight;
	}

	init(){
		document.getElementsByClassName('PageHeader')[0].style.display='none';
		//document.getElementsByClassName('ProgressController')[0].style.display="none";
		document.getElementById('ArticleHeader').style.display='none';
		this.CanvasBg = document.getElementById('textCanvasBg');
		this.CanvasBg.style.height = document.documentElement.clientHeight  + "px";
		this.Canvas = document.getElementById('textCanvas');
		this.Canvas.style.height = document.documentElement.clientHeight - 40 + "px";
		this.Canvas.style.lineHeight = 24+'px';
		this.opationCanvas = document.getElementById('opationCanvas');		
		this.opationCanvas.style.height = document.getElementById('textCanvasBg').style.height;
		this.opationCanvas.style.marginTop = '-'+document.getElementById('textCanvasBg').style.height;
		this.opationCanvas.style.width = document.documentElement.clientWidth - 40 + 'px';
		this.opationCanvas.addEventListener('touchstart',this.touchStart.bind(this));
		this.opationCanvas.addEventListener('touchmove',this.touchMove.bind(this));
		this.opationCanvas.addEventListener('touchend',this.touchEnd.bind(this));
		document.getElementById('big').onclick = this.zoomIn.bind(this);		
		document.getElementById('small').onclick = this.zoomOut.bind(this);
		this.rootView();
	}

	//加载数据后需调用此方法进行初始化视觉
	//初始化滚动值
	rootView(type){
		this.Canvas.scrollTop = '0px';
		this.maybeHeight = document.documentElement.clientHeight - 40; 		//计算可用高度
	  this.maybeHeight = this.maybeHeight - (this.maybeHeight % this.lineHeight);		//消除高度影响
	  this.Canvas.style.height = this.maybeHeight + 'px';	  //文字容器高度设置
	  this.clientHeight = this.Canvas.clientHeight;
	  this.Canvas.style.fontSize = this.fontSize + 'px';
	  this.pageTotal = Math.ceil(this.Canvas.scrollHeight / this.Canvas.clientHeight);
		if(this.zoomTotal > 0)
		{
			this.pageOver = parseInt(this.zoomCurrentPage / this.zoomTotal * this.pageTotal);
		}
		this.pageOver = (this.pageOver == 0 ? 1 : this.pageOver);	  
		this.gotoPage(this.pageOver);
	}

	//页面跳转
	gotoPage(index)
	{
		this.Canvas.scrollTop = this.clientHeight * (index-1);
	}

	prevPage(){
		this.pageOver = this.pageOver-1;
		if(this.pageOver<1){
			this.pageOver = 1;
		}
		this.gotoPage(this.pageOver);
	}

	nextPage(){

		this.pageOver = this.pageOver+1

		if(this.pageOver > this.pageTotal){
			this.pageOver = this.pageTotal;
		}
		this.gotoPage(this.pageOver);
	}

	zoomIn(){
		this.zoomLevel++;
		if(this.zoomLevel>=this.zoomLevelMax-1)
		{
			this.zoomLevel=this.zoomLevelMax-1;
		}
		this.zoomTotal = this.pageTotal;
		this.zoomCurrentPage = this.pageOver;
		this.setZoomLevel();
	}

	zoomOut(){
		this.zoomLevel--;
		if(this.zoomLevel<0)
		{
			this.zoomLevel=0;
		}
		this.zoomTotal = this.pageTotal;
		this.zoomCurrentPage = this.pageOver;
		this.setZoomLevel();
	}
	
	setZoomLevel(){
		this.lineHeight = this.zoomLevel*4 + 24;
		this.fontSize = this.zoomLevel*2 + 16;
		this.Canvas.style.lineHeight = this.lineHeight+'px';
		this.rootView();
	}

	touchStart(e){
		this.pageLock = false;
		this.zoomLock = true;		
		this.startX0 = e.targetTouches[0].pageX;
		this.startY0 = e.targetTouches[0].pageY;
		if(e.targetTouches.length==2)
		{
			e.preventDefault();
			this.startX1 = e.targetTouches[1].pageX;
			this.startY1 = e.targetTouches[1].pageY;
			this.pageLock = true;
			this.zoomLock = false;
		}	
	}

	touchMove(e){
		if(e.targetTouches.length==2)
		{
			e.preventDefault();
			var moveX0 = e.targetTouches[0].pageX;
			var moveY0 = e.targetTouches[0].pageY;
			var moveX1 = e.targetTouches[1].pageX;
			var moveY1 = e.targetTouches[1].pageY;
			this.startDistance = Math.sqrt(Math.pow((this.startX0-this.startX1),2) + Math.pow(this.startY0-this.startY1,2));
			this.moveDistance = Math.sqrt(Math.pow((moveX0-moveX1),2) + Math.pow(moveY0-moveY1,2));			
		}
	}

	touchEnd(e){
		//let element = document.getElementsByClassName('ProgressController');
		//element[0].id = 'ProgressController';
		document.getElementById('StyleBox').style.display="none";
		document.getElementById('FontBox').style.display="none";

		if(!this.pageLock){
			if(this.startX0 < document.documentElement.clientWidth/3)
			{
				//document.getElementById('ProgressController').style.display="none";
				document.getElementById('ArticleHeader').style.display="none";
				this.prevPage();
			}
			else if(this.startX0 > document.documentElement.clientWidth*2/3)
			{
				//document.getElementById('ProgressController').style.display="none";
				document.getElementById('ArticleHeader').style.display="none";
				console.log(this.pageOver);
				this.nextPage();
			}
			else {
				//this.toggle('ProgressController');
				this.toggle('ArticleHeader');
			}
			this.pageLock = true;
		}	

		if(!this.zoomLock)
		{
			if(this.moveDistance > this.startDistance + 20)
			{
				this.zoomIn();		
			}
			else if(this.startDistance > this.moveDistance + 20)
			{
				this.zoomOut();
			}
			this.zoomLock = true;			
		}

	}

	toggle(id){
		let display = document.getElementById(id).style.display;
		if (display=='none'){
			document.getElementById(id).style.display = '';
		}
		else {
			document.getElementById(id).style.display = 'none';
		}
	}

	// changeStyle(){

	// }

	// setStyle(){

	// }

	componentDidMount(){
		this.init();
	}
	componentWillUnmount(){
		this.opationCanvas.removeEventListener('touchstart',this.touchStart.bind(this));
		this.opationCanvas.removeEventListener('touchmove',this.touchMove.bind(this));
		this.opationCanvas.removeEventListener('touchend',this.touchEnd.bind(this));		
	}

	goPage(rate){
		this.pageOver = Math.ceil(this.pageTotal*rate);
		this.pageOver = (this.pageOver == 0 ? 1 : this.pageOver);	  
		this.gotoPage(this.pageOver);
	}

	render(){
		let funcs = {
			
			slideEnd: {
				normal: this.goPage.bind(this),
				overflow: this.goPage.bind(this),
				loss: this.goPage.bind(this)
			}
		};

		return (
		<div className="BookRead" >
			<ArticleHeader/>
			<CatalogArea/>
			<StyleBox/>
			<FontBox/>
			<div id="pageTitleShow" className="pageTitleShow">{dataArray.title}</div>
			<div className="text_bg" id="textCanvasBg">
	      <div id="textCanvas" className="duoyue_read" >{dataArray.article}</div>
	      <div id="opationCanvas" className="opationCanvas"></div>
	    </div>
	  </div>);
	}
}
 
export default BookRead;
