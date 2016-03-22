import React from 'react';

import SliderItem from './SliderItem';
import SliderDot from './SliderDot';

import withStyles from '../../decorators/withStyles';
import styles from './Slider.scss';

@withStyles(styles)
class Slider extends React.Component {
	constructor (props) {
		super(props);
		let width = document.documentElement.clientWidth;
		this.state =  {
			index: 1,
			left: -width,
		};
		this.isSlidering = false;
		this.SLIDER_TIME = 3000;
		//this.data = { touchstart , startX, marginLeft. isSlidering}
	}
 
  touchStart(e) {
  	//console.log(this);
  	e.preventDefault();
  	window.clearInterval(this.timer);
    this.touchstart = e.targetTouches;
    this.startX = this.touchstart[0].pageX;
    this.marginLeft = this.state.left;
  }

  touchMove(e) {
  	e.preventDefault();
  	let touchmove = e.targetTouches;
  	if(this.isSlidering) return;
    this.moveX = touchmove[0].pageX - this.startX;
    this.setState({left: this.marginLeft + this.moveX});
    //console.log(this.isSlidering);
  }

  touchEnd(e) {
  	e.preventDefault();
  	if(this.isSlidering) return;
  	let moveX = this.moveX, sliderList = this.props.data;
  	let width = document.documentElement.clientWidth;
  	//console.log(moveX);
		if(moveX < 0 ) {
			if(moveX < -50 ) {
				let end = -(this.state.index + 1)*width;
				if(this.state.index < sliderList.length) {
					this.setState({index: this.state.index + 1});
				}else {
					this.setState({index: 1});
				}
				this.playAnimate("left", end);
			}else {
				let end = -this.state.index*width;
				this.playAnimate("right", end);
			}
		}else {
      if(moveX > 50) {
      	let end = -(this.state.index - 1)*width;
      	if(this.state.index > 1) {
      		this.setState({index: this.state.index - 1});
      	}else {
      		this.setState({index: sliderList.length});
      	}
      	this.playAnimate("right", end);
      }else {
      	let end = -this.state.index * width;
				this.playAnimate("left", end);
      }
		}
		//console.log(this.SLIDE_TIME);
    this.timer = window.setInterval(this.autoPlay.bind(this), this.SLIDER_TIME);
  }

	slide(node) {
		let _self = this;
		node.addEventListener("touchstart", _self.touchStart.bind(_self), false);
		node.addEventListener('touchmove', _self.touchMove.bind(_self), false);
		node.addEventListener('touchend', _self.touchEnd.bind(_self), false);
		//console.log(this.state);
		this.timer = window.setInterval(_self.autoPlay.bind(this) , _self.SLIDER_TIME);
	} 
 
	playAnimate(direction, end) {
		//direction 图片滚动的方向
		//console.log(direction + "" + end);
    let speed, _self = this;
    let width = document.documentElement.clientWidth;
    function animate() {
      if( direction === "left") {
     		speed = -20;
	    	if(_self.state.left + speed> end) {
		    	_self.setState({left: _self.state.left + speed });
		    	speed--;
		    	_self.isSlidering = true;
					_self.animate = setTimeout(animate, 10);
	      }else {
	      	_self.setState({left: -_self.state.index*width});
	      	_self.isSlidering = false;
	      }
      }else {
        speed = 20
        if(_self.state.left + speed < end) {
        	_self.setState({left: _self.state.left + speed});
        	speed++;
        	_self.isSlidering = true;
					_self.animate = setTimeout(animate, 10);

        }else {
        	_self.setState({left: -_self.state.index*width});
        	_self.isSlidering = false;
        	//console.log(_self.state.index);
        }
	    }
	    //console.log(_self.state.index)
    }
    animate();
	}

	autoPlay() {
		let width = document.documentElement.clientWidth, _self = this, sliderList = this.props.data;
    let end = -(_self.state.index + 1)*width;
		if(_self.state.index < sliderList.length) {
			_self.setState({index: _self.state.index + 1});
		}else {
			_self.setState({index: 1});
		}
		_self.playAnimate("left", end);
	}

	componentDidMount() {
		this.slide(this.refs.slide);
	}

	componentWillUnmount() {
		let node = this.refs.slide;
		node.removeEventListener("touchstart", this.touchStart.bind(this), false);
		node.removeEventListener('touchmove', this.touchMove.bind(this), false);
		node.removeEventListener('touchend', this.touchEnd.bind(this), false);
		window.clearTimeout(this.timer);
		window.clearTimeout(this.animate);
	}
	render() {
		const sliderList = this.props.data;
		const sliderDot = this.props.sliderDot || true;
		//console.log(this.props.data);
		let items, itemCode;
		if( sliderList.length > 0) {
      items = sliderList.map( function(item, i) {
          return <SliderItem data={item} key={i + 1}/>;
          }
      	)
      itemCode = [<SliderItem data={sliderList[sliderList.length - 1]} key="0"/>].concat(items).concat(<SliderItem data={sliderList[0]} key={sliderList.length + 1}/>);
    }else {
    	itemCode = null;
    }

		return (
			<section className="Slider" ref='slide' style={this.props.style}>
				<ul className="slider_ul" style={{ "marginLeft": this.state.left + "px"}}>
					{itemCode}
				</ul>
				{ sliderDot && <SliderDot nums={sliderList.length} index={this.state.index}/>}
			</section>
		);
	}
} 

export default Slider;