'use strict'
import React from 'react';
import classNames from 'classnames';

class CommentItemPurchaseAdvice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarState: false,
			likeIconState: this.props.comment.likeIconState,
		};
	}
	showSelf() {
		this.setState({
			avatarState: true,
		});
	}
	render() {
		return (
			<div className="CommentItemPurchaseAdvice">
				<div className="question-wrap clearfix">
					<div className="question-avatar">
						<em className="avatar">Q</em>
					</div>
					<p className="text">{this.props.comment.commentText}</p>
				</div>
				
			</div>
		);
	}
}
export default CommentItemPurchaseAdvice;