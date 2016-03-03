'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var BannerArea = React.createClass({
	slide: function() {
		
	},
	componentDidMount: function(){
		
	},
	render: function() {
		return (
			<div className="page-banner" id="banner-container">
				<div className="banner-box" id="banner-list">
					{
						this.props.banData.map(function(item,i){
							return (
								<a className="banner-item" key={i} href={item.href}>
									<img src={item.imgSrc} alt="轮播图"/>
								</a>
							)
						})
					}
				</div>
			</div>
		)
	},
});

export default BannerArea;