'use strict';
import React from 'react';
import CommonHeader from '../HeaderComponents/CommonHeader.js';
import ReturnButton from '../HeaderComponents/ReturnButton';
import CommentBox from '../CommentBox/CommentBox';

class BookConsult extends React.Component {
	render() {
		let commentBoxOptions = {
			commentHeader: 'on',
			commentItem: 'on',
			commentWriteGuide: 'off',
			commentForm: 'Community-Pen',
			headerText: '购买咨询',
			hdCommentAmount: 'off',
		};
		return (
			<div className="BookConsult main-wrap">
				<CommonHeader>
					<ReturnButton/>
				</CommonHeader>
				<CommentBox options={commentBoxOptions}></CommentBox>
			</div>
		);
	}
}


export default BookConsult;