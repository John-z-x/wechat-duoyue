'use strict'
import React from 'react';
import classnames from 'classnames';

class CommentWonderfulHeader extends React.Component {
	render() {
		return (
			<h4 className="wonderful-header clearfix">
				<span className="left">精彩评论</span>
				<span className="amount left">{this.props.data}条</span>
			</h4>
		);
	}
}

export default CommentWonderfulHeader;