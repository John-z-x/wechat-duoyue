import React from 'react';

import AlbumShowDisc from './AlbumShowDisc';

class AlbumShowPic extends React.Component { 
	
	constructor (props) {
		super(props);
		let width = document.documentElement.clientWidth;
		let originIndex = this.props.index;
		this.state =  {
			index:1,
			left: -width,
			top:0,
		};
		this.isscale=false;
		this.scale=1;
		this.imgWidth=width;
		this.moveXone=0;
		//this.data = { touchstart,touchmove,touchstartLength, startX, startY,marginLeft.marginTop, moveX,moveY}
	}
	 
  touchStart(e) {
  	e.preventDefault();
    this.touchstart = e.targetTouches;
    this.touchstartLength = e.targetTouches.length;
    this.marginLeft = this.state.left;
    this.marginTop = this.state.top;
    if(this.touchstartLength == 1){
    	this.startX = this.touchstart[0].pageX;
    	this.startY = this.touchstart[0].pageY;
    }else if(this.touchstartLength == 2){
    	let x1=this.touchstart[0].pageX,
    	x2=this.touchstart[1].pageX,
    	y1=this.touchstart[0].pageY,
    	y2=this.touchstart[1].pageY;
    	this.startDistance=parseInt( Math.sqrt( (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) ));
    } 
  }

  touchMove(e) {
  	e.preventDefault();
  	this.touchmove = e.targetTouches;
    this.moveX = this.touchmove[0].pageX - this.startX;
    this.moveY = this.touchmove[0].pageY - this.startY;
    let xvalue = this.marginLeft + this.moveX;
    let yvalue = this.marginTop + this.moveY;
    if(this.touchstartLength == 1){
    	this.setState({left: xvalue});
    	if(this.isscale){
    		var hi = parseInt(document.getElementById("PicIterm"+this.state.index).offsetHeight)-parseInt(document.documentElement.clientHeight);
				var minH = (parseInt(this.state.top) >= -(hi*2)) || ((parseInt(this.state.top) <= -(hi*2))&&this.moveY > 0);
				var maxH = (parseInt(this.state.top) <= hi ) || ((parseInt(this.state.top) >= hi)&&this.moveY < 0);
				if( maxH&&minH)
				{
					this.setState({top: yvalue}) ;
				}
    	}
    }else if(this.touchstartLength == 2){
  		this.imsgeZoom(e);
    }  
  }

  touchEnd(e) {
  	e.preventDefault();
  	let width = document.documentElement.clientWidth;
  	if(this.touchstartLength == 1){
	  	let moveX = this.moveX, sliderList = this.props.data;
	  	this.moveXone = parseInt(document.getElementById("AlbumShowPic").style.marginLeft) - ( -((this.state.index-1)*document.documentElement.offsetWidth) - ((this.centerX/this.imgWidth)*parseInt(document.getElementById("mobAlbumImg"+this.state.index).offsetWidth) - this.centerX));
	  	// console.log(sliderList);
	  	console.log(moveX);
			if(moveX < 0 ) {   //左滑
				if(moveX < -50 ) {
					let end ;
					if(this.state.index < sliderList.length) {
						this.setState({index: this.state.index + 1});
						end = -(this.state.index -1)*width;
					}else {
						this.setState({index: sliderList.length});
						end = -(this.state.index )*width;
					}
					this.playAnimate("left", end);
				}else {
					let end = -this.state.index*width;
					this.playAnimate("right", end);
				}
			}else if(moveX>0){  //右滑
	      if(moveX > 50) {
	      	let end ;
	      	if(this.state.index > 1) {
	      		this.setState({index: this.state.index - 1});
	      		end=-(this.state.index - 1)*width;
	      	}else {
	      		this.setState({index: 1});
	      		end=0;
	      	}
	      	// console.log(this.state.index);
	      	// console.log(end);
	      	this.playAnimate("right", end);
	      }else {
	      	let end = -this.state.index * width;
					this.playAnimate("left", end);
	      }
			}
			this.moveX=0;//滑动清零
		} else if(this.touchstartLength == 2){
			if(this.moveDistance==0){
	      this.setState({left:(-(index-1)*width)});
	      this.reChangeScale();
	      this.changeLiPicHeight();
			}
			this.scale=parseInt(document.getElementById("mobAlbumImg"+this.state.index).parentNode.style.width)/document.documentElement.offsetWidth;
			let speed=100;
			let replay = function(){
				let width = parseInt(document.getElementById("mobAlbumImg"+this.state.index).parentNode.style.width);
				let maxWidth = document.documentElement.offsetWidth;
				let s = width /maxWidth ;
				if( width+speed < maxWidth ){   
					document.getElementById("mobAlbumImg"+this.state.index).parentNode.style.width = width + speed +"px";
					document.getElementById("mobAlbumImg"+this.state.index).parentNode.style.marginLeft = (maxWidth - width)/2  +"px";
					document.getElementById("mobAlbumImg"+this.state.index).parentNode.style.marginRight = (maxWidth - width)/2+ 30*(1-s) +"px";
					this.changeLiPicHeight(); 
					speed += 1;
					setTimeout(replay,100);
				}else{
			    document.getElementById("mobAlbumImg"+this.state.index).parentNode.style.width = maxWidth +"px"; 
					this.reChangeScale();
			    this.changeLiPicHeight(); 
					document.getElementById("mobAlbumImg"+this.state.index).parentNode.previousSibling.style.marginLeft = -3 +"px";
					document.getElementById("mobAlbumImg"+this.state.index).parentNode.nextSibling.style.marginLeft = 3 +"px";
					document.getElementById("mobAlbumImg"+this.state.index).parentNode.previousSibling.style.marginRight = 3 +"px";
					document.getElementById("mobAlbumImg"+this.state.index).parentNode.nextSibling.style.marginRight = -3 +"px";
					this.setState({left:(-(index-1)*width)});
				}			  
		  }
			if(this.scale<=1){
				replay();
			}else{
				document.getElementById("mobAlbumImg"+this.state.index).parentNode.style.marginLeft=0;
				document.getElementById("mobAlbumImg"+this.state.index).parentNode.style.marginReft=0;
			}
		}
  }

  reChangeScale(){
  	this.moveX=0;
  	this.setState({top: 0});
  	this.isscale=false;
  	this.scale=1;
  	this.moveXone=0;
  	let  li = document.getElementById("AlbumShowPic").getElementsByTagName("li");
		 for(let i = 1;i < (li.length-1);i++)
		 {   
			  li[i].style.width = document.documentElement.clientWidth +"px";
			  li[i].style.marginLeft = "0";
			  li[i].style.marginRight = "0";
			 // alert(li.length);
		 }
		 li[0].style.marginRight = "0";
		 li[li.length - 1].style.marginLeft = "0";
  }

  imsgeZoom(e){
  	let touchDistance = [];
  	if(this.touchstart.length==this.touchmove.length){
  		let startDistance = 0;
			let moveDistance = 0;
			for(let i=1;i<this.touchstart.length;i++){
				let x3 = this.touchmove[i-1].pageX;
				let x4 = this.touchmove[i].pageX;
				let y3 = this.touchmove[i-1].pageY;
				let y4 = this.touchmove[i].pageY;
				moveDistance += parseInt( Math.sqrt( (x4-x3)*(x4-x3) + (y4-y3)*(y4-y3) ));
			}
			this.centerX = (x3 + x4)/2;
			this.centerY = (y3 + y4)/2;
			startDistance=this.startDistance;
			this.moveDistance = moveDistance- startDistance ;
			let scale1 = ((moveDistance/startDistance)*this.scale);
			if(scale1 < 2.5 && scale1 > 1)
			{
				this.change(document.getElementById("PicIterm"+this.state.index),scale1);	
			}else if(scale1 > 0.8 && scale1 < 1 )
			{
				document.getElementById("mobAlbumImg"+this.state.index).parentNode.style.width = (document.getElementById("AlbumShowPic").clientWidth*scale1 ) +"px";
		    document.getElementById("mobAlbumImg"+this.state.index).parentNode.style.marginLeft = (document.documentElement.offsetWidth - (document.getElementById("AlbumShowPic").clientWidth*scale1)) /2+ 3 +"px";
				document.getElementById("mobAlbumImg"+this.state.index).style.marginRight = (document.documentElement.offsetWidth - (document.getElementById("AlbumShowPic").clientWidth*scale1)) /2 + 30 +"px";
			}
  	}
  	this.changeLiPicHeight();
  	if(this.moveDistance!=0&&scale1>1){
  		this.changeCenter(scale1);
  	}
  }

  changeCenter(demo){
  	if(demo < 2.5 && demo >=1){
	    document.getElementById("AlbumShowPic").style.marginLeft = -((this.state.index-1)*document.documentElement.offsetWidth)  - ((this.centerX/this.imgWidth)*parseInt(document.getElementById("mobAlbumImg"+this.state.index).offsetWidth) - this.centerX) + this.moveXone*(demo-1)*0.66  +"px";
		}else if(demo < 1 && demo > 0.8){
	    document.getElementById("AlbumShowPic").style.marginLeft = -((this.state.index-1)*document.documentElement.offsetWidth) - ((this.centerX/this.imgWidth)*parseInt(document.getElementById("mobAlbumImg"+this.state.index).offsetWidth) - this.centerX)  +"px";
		}	
  }

  changeLiPicHeight(){
  	let imgs = document.getElementById("AlbumShowPic").getElementsByTagName("img");
		document.getElementById("AlbumShowPic").offsetHeight = document.documentElement.clientHeight;
		for(let i = 0;i<imgs.length;i++){ 
	    if(imgs[i].style.height < document.documentElement.clientHeight){
			let s = (document.documentElement.clientHeight - parseInt(imgs[i].offsetHeight))/2;
			imgs[i].style.marginTop = s +"px";
			}
		}
  }

  change(demo,x){
  	document.getElementById("mobAlbumImg"+this.state.index).parentNode.previousSibling.style.marginLeft = -15 +"px";
		document.getElementById("mobAlbumImg"+this.state.index).parentNode.nextSibling.style.marginLeft = 15 +"px";
		document.getElementById("mobAlbumImg"+this.state.index).parentNode.previousSibling.style.marginRight = 15 +"px";
		document.getElementById("mobAlbumImg"+this.state.index).parentNode.nextSibling.style.marginRight = -15 +"px";
		demo.parentNode.style.width = (document.getElementById("AlbumShowPic").clientWidth *x) +"px";
		//document.title =demo.parentNode.style.width;
		this.isscale = true;
	} 

	slide(node) {
		let _self = this;
		node.addEventListener("touchstart", _self.touchStart.bind(_self), false);
		node.addEventListener('touchmove', _self.touchMove.bind(_self), false);
		node.addEventListener('touchend', _self.touchEnd.bind(_self), false);
	} 
 
	playAnimate(direction, end) {
		//direction 图片滚动的方向
		//console.log(direction + "" + end);
    let speed, _self = this;
    let width = document.documentElement.clientWidth;
    function animate() {
      if( direction === "left") {
     		speed = -20;
     		// console.log(end);
	    	if(_self.state.left + speed> end) {
		    	_self.setState({left: _self.state.left + speed });
		    	speed--;
					_self.animate = setTimeout(animate, 10);
	      }else {
	      	// console.log(_self.state.index);
	      	_self.setState({left: -(_self.state.index-1)*width});
	      }
      }else {
        speed = 20
        if(_self.state.left + speed < end) {
        	_self.setState({left: _self.state.left + speed});
        	speed++;
					_self.animate = setTimeout(animate, 10);

        }else {
        	_self.setState({left: -(_self.state.index-1)*width});
        	//console.log(_self.state.index);
        }
	    }
	    //console.log(_self.state.index)
    }
    animate();
	}

	componentDidMount() {
		this.slide(this.refs.slide);
		// let myScroll = new IScroll('#test0', {
		// 	preventDefault: false,
	 //    zoom: true,
	 //    mouseWheel: true,
	 //    wheelAction: 'zoom'
		// });
	}

	componentWillUnmount() {
		let node = this.refs.slide;
		// node.removeEventListener("touchstart", this.touchStart.bind(this), false);
		// node.removeEventListener('touchmove', this.touchMove.bind(this), false);
		// node.removeEventListener('touchend', this.touchEnd.bind(this), false);
	}

	render(){
		let dataArry=this.props.data, count1=this.props.count;
		// console.log(dataArry[this.state.index]);
		// console.log(count1);
		return(
			<div>
				<ul className="AlbumShowPic" style={{ "marginLeft": this.state.left + "px","marginTop":this.state.top + "px",}} ref='slide' id="AlbumShowPic">	
				{
					this.props.data.map((item, i) => {
						return(
							<li className='AlbumShowPicIterm' key={item.index} id={'PicIterm' + (i+1)}>
								<img src={item.src} width="100%" id={'mobAlbumImg'+ (i+1)}/>
							</li>	
						)
						
					})
				}
						
				</ul>
				<div>
					<AlbumShowDisc data={dataArry[this.state.index-1]} count={count1} display={this.props.display}/>
				</div>
			</div>	
		);
	}
}

export default AlbumShowPic;