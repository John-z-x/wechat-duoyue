'use strict'
var React = require('react');
var ReactDOM = require('react-dom');

var RecommendBookModule = React.createClass({
	propTypes: {
		data: React.PropTypes.object
	},
	render: function() {
		return (
			<div className="recmd-box bdr-mg bg-white">
				<h2 className="f-level-title">{this.props.data.title}</h2>
				<ul className="recmd-bks">
				{
					this.props.data.data.map(function(item,i){
						return (
							<li className="cell" key={i}>
								<a href={item.href}>
									<img className="bk-cover" src={item.src} alt={item.title}/>
									<h4 className="bk-title">{item.title}</h4>
									<span className="bk-price rem">{item.price}</span>
								</a>
							</li>
						)
					})
				}
				</ul>
				<a className="find-more" href="">
					<h4>{this.props.data.recmdText}</h4>
					<em className="fd-more-btn"></em>
				</a>
			</div>
		)
	}
});
export default RecommendBookModule;