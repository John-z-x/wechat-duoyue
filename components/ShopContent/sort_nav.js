'use strict'
var React = require('react');
var ReactDOM = require('react-dom');

var HotSortNav = React.createClass({
	propTypes: {
		sortData: React.PropTypes.object
	},
	render: function() {
		return (
			<div className="hot-sort-box bdr-mg bg-white">
				<h2 className="f-level-title">{this.props.sortData.title}</h2>
				<ul className="hot-sort-content">
				{
					this.props.sortData.data.map(function(item,i){
						return (
							<li className="cell" key={i}>
								<a href="">
									<img className="sort-icon" src={item.src} alt={item.title}/>
									<h4 className="sort-title">{item.title}</h4>
								</a>
							</li>
						)
					})
				}
				</ul>
			</div>
		)
	}
});

export default HotSortNav;