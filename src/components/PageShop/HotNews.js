import React, { Component, PropTypes } from 'react';
import  { Link } from 'react-router';

class HotNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			top: 0,
			index: 0
		};
		this.SETOUT_TIME = 2500; 
	}
  
	slider(node) {
		let height = this.refs.navsBox.offsetHeight, count = this.props.data.length, _this = this;

		let animate = function(end) {
			window.clearTimeout(this.timerAnimate);
			let speed = -1, ANIMATE_TIME = 10;
			let autoAnimate = function() {
	      if(this.state.top + speed > end) {
	      	this.setState({
						top: this.state.top + speed
					});
	      	this.timerAnimate = setTimeout(autoAnimate, ANIMATE_TIME);
	      }else {
	        if( end !== - count*height ) {
						this.setState({
							top: end
						});
					}else {
						this.setState({
							top: 0
						});
					}
	      }
	    }.bind(this);
   		autoAnimate();
		}.bind(this);

		let play = function() {
			let end;
      end = - height * (_this.state.index + 1);
      animate(end);
      if(_this.state.index < (count-1)) {
      	this.setState({
					index: this.state.index + 1
				});
      }else {
      	this.setState({
					index: 0
				});
      }
			_this.timerAutoPlay = setTimeout(play, this.SETOUT_TIME);
		}.bind(this);
		play();
	}

  componentDidMount() {
  	let sliderBox = this.refs.navs;
		this.Timer = setTimeout(() => {::this.slider(sliderBox)} , this.SETOUT_TIME);
  }

	componentWillUnmount() {
		window.clearTimeout(this.timerAnimate);
		window.clearTimeout(this.Timer);
		window.clearTimeout(this.timerAutoPlay)
	}

	render() {
		const { data } = this.props;
		let totalItemCode;
		let itemCode = data.map( (item, i) => 
			<li className="news-content" key={ i }>
				<Link to={`/everyday/${item.id}/display`}>
        	{item.title}
				</Link>
			</li>
		);
		totalItemCode = itemCode;
		if( data.length > 0) {
			totalItemCode = itemCode.concat([<li className="news-content" key={data.length}>
				<Link to={`/everyday/${data[0].id}/display`}>
					{data[0].title}
				</Link>
			</li>]);
		}
		return (
			<section className="HotNews hot-news" ref="navsBox">
        <div className="hot-box">
        	<span className="hot">热门</span>
        </div>
        <ul className="news" ref="navs" style={{top: this.state.top + "px"}}>
          {totalItemCode}
      	</ul>
			</section>
		);
	}
}

HotNews.propTypes = {
	data: PropTypes.array
}

export default HotNews;
