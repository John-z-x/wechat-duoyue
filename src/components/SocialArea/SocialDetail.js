import React from 'react';
import CommentBox from '../CommentBox/CommentBox.js';
import withStyles from '../../decorators/withStyles';
import styles from './SocialDetail.scss';

var dataArray = {
	title: '你觉得你什么时候最帅',
	intra: '足球已经越来越位人痴迷，足球场的设计也越来越美观，你喜欢哪种足球体育场呢？'
}


@withStyles(styles)
class SocialDetail extends React.Component {
	render() {
		let commentBoxOptions = {
			commentHeader: 'off',
			commentItem: 'Community',
			commentWriteGuide: 'off',
			commentForm: 'Community',
		};
		return (
				<div className="SocialDetail" >
					<div id="banner-pic">
			        <img src="http://file.duoyue.me/upload/group/logo/20151126/2015_11_26_160438732.jpg" />
			    </div>
			    <div className="banner-content" >
		        <div className="banner-content-title">{dataArray.title}</div>
		        <div className="banner-content-intra">{dataArray.intra}</div>
			    </div>	
			    <CommentBox options={commentBoxOptions}></CommentBox>	    
				</div>
			);
	}
}
export default SocialDetail;