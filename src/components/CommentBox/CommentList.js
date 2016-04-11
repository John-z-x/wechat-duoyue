'use strict'
import React, { PropTypes }  from 'react';
import classnames from 'classnames';

class CommentList extends React.Component {
	
	render() {
		let Item = this.props.Item;
		const { comments, actions } = this.props;
		let commentNodes = comments.map(item => 
			{
				return (
					<Item 
						key={item.id}
						{...item}
						actions={actions}
					/>
				)
			}
		)
		return (
			<div className="comment-list">
				{ commentNodes }
			</div>
		);
	}
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

export default CommentList;