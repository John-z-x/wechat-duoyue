'use strict'
import React from 'react';
import classnames from 'classnames';
import Comment from './Comment';

class CommentList extends React.Component {
	render() {
		let commentNodes = this.props.data.map((item,i)=>{
			return (
				<Comment comment={item} key={i}/>
			);
		})
		return (
			<div className="comment-list">
				{commentNodes}
			</div>
		);
	}
}


export default CommentList;