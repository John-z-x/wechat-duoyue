'use strict';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import PageHeaderTabBtn from './PageHeaderTabBtn.js';

class PageHeader extends React.Component {
	render() {
		console.log(this.props.hdData);
		return (
			<div className="hd-content bg-white clearfix">
				<a className="left hd-btn user-menu" href=""></a>
				<span className="hd-title">{this.props.hdData.title}</span>
				{
					this.props.hdData.data.map(function(item,i){
						return (
							<PageHeaderTabBtn data={item} key={i}/>
						);
					})
				}
			</div>
		);
	}
}

PageHeader.propTypes = {
	hdData: PropTypes.object.isRequired
}

export default PageHeader;