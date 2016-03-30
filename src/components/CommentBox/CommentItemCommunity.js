'use strict'
import React from 'react';
import classNames from 'classnames';

class CommentItemCommunity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarState: false,
		};
	}
	showSelf() {
		this.setState({
			avatarState: true,
		});
	}
	render() {
		return (
			<div className="CommentItemCommunity">
				<div className="info-wrap clearfix">
					<div className="user-avatar left">
						<img className={classNames('one',{'avatar': this.state.avatarState})} src={this.props.comment.userAvatar} alt="" onLoad={this.showSelf.bind(this)}/>
					</div>
					<div className="user-info left">
						<h4 className="user-name a-line ">{this.props.comment.userName}</h4>
						<time className="comment-time a-line">{this.props.comment.commentTime}</time>
						<p className="text">{this.props.comment.commentText}</p>
					</div>
				</div>
				
			</div>
		);
	}
}
export default CommentItemCommunity;