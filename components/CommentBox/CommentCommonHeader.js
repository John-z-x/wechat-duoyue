'use strict'
import React from 'react';
import classNames from 'classnames';

class CommentCommonHeader extends React.Component {
	render() {
		let amountCode = !!this.props.data ? <span className="amount">{this.props.data}条</span> : null;
		return (
			<div className="CommentCommonHeader">
				<h4 className={classNames('clearfix',{'no-amount': !this.props.data})}>
					<span className="title">{this.props.title}</span>
					{amountCode}
				</h4>
			</div>
		);
	}
}

export default CommentCommonHeader;