import React from 'react';
import classNames from 'classnames';

class CommentWriteGuide extends React.Component {
	render() {
		return (
			<div className="comment-write-guide clearfix">
				<div className="write-comment-btn" onClick={this.props.funcs.toggleCommentForm}>
					<em className="icon"></em>写评论
				</div>
				<div className="comment-num right">
					12			
				</div>
			</div>
		)
		
	}
} 

export default CommentWriteGuide;