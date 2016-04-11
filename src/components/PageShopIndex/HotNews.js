import React from 'react';
import { Link } from 'react-router';

const news = [
	{"id": "1", "content": "同样的温度，为什么在诶方式狼，在南方却冻成狗"},
	{"id": "2", "content": "我不告诉你怎么做到10W+,我只告诉你如何有一个想做到10w+的野心，哈哈哈啊，凑字数"},
	{"id": "3", "content": "从亚马逊为啥呢么会推出月报"}
];

class HotNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news: [],
			top: 0,
			index: 0
		};
		this.SETOUT_TIME = 2500; 
	}
  
	slider(node) {
		let height = node.parentNode.offsetHeight, count = this.state.news.length, _this = this;

		let animate = function(end) {
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
		this.setState({
			news: news,
		});
		this.Timer = setTimeout(() => {::this.slider(sliderBox)} , this.SETOUT_TIME);
  }

	componentWillUnmount() {
		window.clearTimeout(this.timerAnimate);
		window.clearTimeout(this.Timer);
		window.clearTimeout(this.timerAutoPlay)
	}

	render() {
		const news = this.state.news;
		let totalItemCode;
		let itemCode = news.map( (item, i) => 
			<li className="news-content" key={`news${item.id}`}>
				<Link to={`/everyday/${item.id}/display`}>
        	{item.content}
				</Link>
			</li>
		);
		totalItemCode = itemCode;
		if( news.length > 0) {
			totalItemCode = itemCode.concat([<li className="news-content" key={news.length}>{news[0].content}</li>]);
		}
		return (
			<section className="hot-news">
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

export default HotNews;