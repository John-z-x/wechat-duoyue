'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var PageHeaderTabBtn = React.createClass({
	propTypes: {
		checked: React.PropTypes.bool
	},
	getDefaultProps: function() {
		return {
			checked: false
		};
	},
	getInitialState: function() {
		return {
			checked: !!this.props.checked
		};
	},
	showClassName: function() {
		return this.state.checked ? this.props.data.clasName + '-cur' : this.props.data.clasName;
	},
	render: function() {
		return (
			<a className={'right hd-btn ' + this.showClassName()} href={this.props.data.href}>
				<em className="hd-btn-icon"></em>
			</a>
		);
	}
});

var PageHeader = React.createClass({
	propTypes: {
		hdData: React.PropTypes.object,
	},
	render: function() {
		return (
			<div className="hd-content bg-white clearfix">
				<a className="left hd-btn user-menu" href=""></a>
				<span className="hd-title">{this.props.hdData.title}</span>
				{
					this.props.hdData.data.map(function(item,i){
						return (
							<PageHeaderTabBtn data={item} key={i}/>
						)
					})
				}
			</div>
		);
	}
});

export default PageHeader;