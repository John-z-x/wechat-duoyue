'use strict';
import React from 'react';
import { Link } from 'react-router';
import CommonHeader from '../../HeaderComponents/CommonHeader.js';
import ReturnButton from '../../HeaderComponents/ReturnButton';
import CommentBox from '../../CommentBox/CommentBox';

class SourceComment extends React.Component {
	render() {
		let commentBoxOptions = {
			commentHeader: 'on',
			commentItem: 'on',
			commentWriteGuide: 'on',
			commentForm: 'on',
			headerText: '相关评论',
			hdCommentAmount: 'on',
		};
		return (
			<div className="SourceComment main-wrap">
				<CommonHeader>
					<ReturnButton/>
				</CommonHeader>
				<CommentBox options={commentBoxOptions}></CommentBox>
			</div>
		);
	}
}


export default SourceComment;