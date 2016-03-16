'use strict'
import React from 'react';
import classnames from 'classnames';
import CommentItem from './CommentItem';
import CommentItemCommunity from './CommentItemCommunity';
import CommentItemPurchaseAdvice from './CommentItemPurchaseAdvice';

class CommentList extends React.Component {
	render() {
		let commentNodes = this.props.data.map((item,i)=>{
			let comment;
	    if (this.props.options !== '') {
	      switch(this.props.options) {
	        case 'off':
	          comment = null;
	          break;
	        case 'Community':
	        	comment = <CommentItemCommunity comment={item} key={i}/>;
	        	break;
	        case 'PurchaseAdvice':
	        	comment = <CommentItemPurchaseAdvice comment={item} key={i}/>;
	        	break;
	        default:
	          comment = <CommentItem comment={item} key={i}/>;
	      }
	    }
			return (
				comment
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