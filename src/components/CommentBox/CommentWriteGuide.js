import React, { PropTypes }  from 'react';
import classNames from 'classnames';

class CommentWriteGuide extends React.Component {
	onClick() {
		this.props.func();
	}
	render() {
		return (
			<div className="comment-write-guide clearfix">
				<div className="write-comment-btn" onClick={ this.props.func && ::this.onClick}>
					<em className="icon"></em>写评论
				</div>
				<div className="comment-num right">
					{this.props.count || 0}			
				</div>
			</div>
		)
		
	}
} 

CommentWriteGuide.propTypes = {
  func: PropTypes.func.isRequired,
}

export default CommentWriteGuide;