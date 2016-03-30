import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class BookShelf extends React.Component{
	constructor(props) {
		super(props);
	  this.slide = this.slide.bind(this);
	  this.winWidth = window.innerWidth;
	 // this.startX;
	  this.dotIndex = 0;
	}

	componentDidMount(){
  	let topHeight = document.getElementById("user-new").offsetHeight,
      bottomHeight = document.getElementById("menu-bottom").offsetHeight,
      winHeight = window.innerHeight,
      pagallHeight = winHeight-(bottomHeight+topHeight+50),
      bookCount = this.props.data.bookCount,
	    pageNum = Math.ceil((bookCount+1)/6),
      pageChange = $("#page-change"),//为了使用jQuery的animate函数;
      pageAll = document.getElementById('page-all'),
      swipeDistanceX,
      dotSpan,
      pageDots = document.getElementById('page-dots');

    for (let i=1; i<pageNum; i++) {
      dotSpan = document.createElement("span");
      dotSpan.className = 'dot-not dot';
      pageDots.appendChild(dotSpan);
    }

		document.getElementById('page-all').style.height = pagallHeight + 'px';
		let pageWidth = pageChange.width();
		pageChange.width(pageNum*pageWidth);

		const bookWraps = Array.from(document.getElementsByClassName('bookWrap'));
		for(let i in bookWraps){
			bookWraps[i].style.width = pageChange.width()/pageNum + 'px';
		}			

		// 控制书名长度；
		let bookNames = [];
		bookNames = document.getElementsByClassName('book-name');
		for (let x in bookNames){
			if(bookNames[x].innerHTML){
				var htmlString = bookNames[x].innerHTML+'';
		    if(htmlString.length >= 7) {
		      bookNames[x].innerHTML=htmlString.slice(0, 7) + "...";
		    } 
		  } 				
		}
		this.slide(pageAll);
  }

		//添加滑动事件
	_touchStart (e) {
		this.startX = e.targetTouches[0].pageX;
	} 

	_touchMove (e) {
		e.preventDefault();
		let moveX = e.targetTouches[0].pageX;
		this.swipeDistanceX = moveX-this.startX;
	}

  move () {
    let dotArray = [];
	  dotArray = document.getElementsByClassName('dot');
  	let bookCount = this.props.data.bookCount;
  	let pageNum = Math.ceil((bookCount+1)/6);
  	let pageChange = $("#page-change");
    if (this.swipeDistanceX < -5) {
      this.dotIndex +=1;
      if (this.dotIndex < pageNum) {
        pageChange.animate({left: -this.dotIndex * this.winWidth});
        for (var i in dotArray) {
        	if(dotArray[i].className){
          	dotArray[i].className="dot dot-not";
	          dotArray[this.dotIndex].className="dot color-over";
	        }
        }
    	}
      else {
        this.dotIndex = pageNum-1;
      }
  	} 
  	else if(this.swipeDistanceX > 5) {
      this.dotIndex -=1;
      if (this.dotIndex >= 0) {
        pageChange.animate({left: -this.dotIndex * this.winWidth});
        for (var i in dotArray) {
        	if(dotArray[i].className){
          	dotArray[i].className="dot dot-not";
	          dotArray[this.dotIndex].className="dot color-over";
	        }
        }
      }
      else {
	     this.dotIndex = 0
	    }
    }
  }

	slide(node){
		node.addEventListener('touchstart',this._touchStart.bind(this));
		node.addEventListener('touchmove',this._touchMove.bind(this));
		node.addEventListener('touchend',this.move.bind(this));
	}		

	removeSlide(node){
		node.removeEventListener('touchstart',this._touchStart.bind(this));
		node.removeEventListener('touchmove',this._touchMove.bind(this));
		node.removeEventListener('touchend',this.move.bind(this));
	}

componentWillUnmount (){
  let pageAll = document.getElementById('page-all');
	this.removeSlide(pageAll);
}
	 
	render(){
		let bookItems = [];
		let BookStyle =	this.props.data.bookData.map( function(bookItem, index) {
    		bookItems.push(bookItem);
    		return(
	      	<div className="bookWrap" style={{float:'left'}} key={index}>
	          <div className="clearfix my-books" id="myBooks">					         
							{ 
								bookItems[bookItems.length-1].map(function(item,i){
									return (
									  <Link to={item.href} key={i}>
				               <img src={item.src} alt="book-img" className="book-img"/>
				               <div className="book-name">{item.bookName}</div>
				            </Link>
									);
								}
								)
							}
	          </div>
	        </div>
        );
      });

		return (
					<div className=" my-bookcase" id="page-all"  >
				    <div className="top-title">
				      <div className="line"></div>
				      <div className="title">我的书架</div>
				    </div>

			      <div  className="book-box clearfix" id="page-change">
			      {BookStyle}
				    </div>

					  <div className="page-dots" id="page-dots">
					    <span className="color-over dot" ></span>
					  </div>
				    <div className="books-bottom"></div>
				 </div>
		);
	}
};

export default BookShelf;
