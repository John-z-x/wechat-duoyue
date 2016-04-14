'use strict'
import React, { PropTypes }  from 'react';
import classnames from 'classnames';

class CommentList extends React.Component {
	
	render() {
		let Item = this.props.Item;
		const { comments, actions } = this.props;
		let commentNodes = comments.map((item, i) => 
			{
				return (
					<Item 
						key={i}
						{...item}
						actions={actions}
					/>
				)
			}
		)
		return (
			<div className="CommentList comment-list">
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
