'use strict'
import React from 'react';
import classNames from 'classnames';

class CommentItem extends React.Component {
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
			<div className="CommentItem ">
				<div className="info-wrap clearfix">
					<div className="user-avatar left">
						<img className={classNames('one',{'avatar': this.state.avatarState})} src={this.props.comment.userAvatar} alt="" onLoad={this.showSelf.bind(this)}/>
					</div>
					<div className="user-info left">
						<h4 className="user-name a-line ">{this.props.comment.userName}</h4>
						<time className="comment-time a-line">{this.props.comment.commentTime}</time>
					</div>
					<div className="like right clearfix">
						<em className={classNames('like-icon',{'on': this.state.likeIconState})}></em>
						<span className="like-num right">{this.props.comment.likeNum}</span>
					</div>
				</div>
				<p className="text">{this.props.comment.commentText}</p>
			</div>
		);
	}
}
export default CommentItem;