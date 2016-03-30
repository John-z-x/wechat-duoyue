'use strict';
import React from 'react';
import { Link } from 'react-router';
import VideoPoster from './VideoPoster.js';
import VideoDescription from './VideoDescription.js';
import VideoCollection from './VideoCollection.js';
import BrowseMoreBtn from './BrowseMoreBtn.js';
import RelevantCommentTitle from './RelevantCommentTitle.js';
import CommonHeader from '../../HeaderComponents/CommonHeader.js';
import ReturnButton from '../../HeaderComponents/ReturnButton';
import CommentButton from '../../HeaderComponents/CommentButton';
import DownLoadButton from '../../HeaderComponents/DownLoadButton';
import CollectButton from '../../HeaderComponents/CollectButton';
import CommentBox from '../../CommentBox/CommentBox';
import withStyles from '../../../decorators/withStyles';
import styles from './VideoModule.scss';



const videoData = {
	titleText: '视频选集',
	videoList: [
		{videoSrc: 'http://file.duoyue.me/upload/source/video/20151219/2015_12_19_163211703.mp4',videoPoster: 'http://file.duoyue.me/upload/source/20151219/2015_12_19_163916786.png',videoTitle: '当代昆曲 唯美呈现 ', videoDesc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制'},
		{videoSrc: 'http://file.duoyue.me/upload/source/video/20151216/2015_12_16_151250239.mp4',videoPoster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153308432.jpg',videoTitle: '想要传送一天喜欢这么', videoDesc: '共同打造打造梦幻巨'},
		{videoSrc: 'http://file.duoyue.me/upload/source/video/20151219/2015_12_19_163211703.mp4',videoPoster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_154703908.jpg',videoTitle: '岳云鹏', videoDesc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻'},
		{videoSrc: 'http://file.duoyue.me/upload/source/video/20151219/2015_12_19_163211703.mp4',videoPoster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_154703908.jpg',videoTitle: '岳云鹏郭麒麟争德云一哥 亲儿子狂虐不肖徒弟', videoDesc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦'},
		{videoSrc: 'http://file.duoyue.me/upload/source/video/20151219/2015_12_19_163211703.mp4',videoPoster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_154703908.jpg',videoTitle: '岳云鹏郭麒麟争德云一哥 亲儿子狂虐不肖徒弟', videoDesc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共'},
		
	]
}


@withStyles(styles)
class VideoModuleHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayData: videoData.videoList[0],
		};
		this.switchVideo = this.switchVideo.bind(this);
	}
	switchVideo(index) {
		this.setState({
			displayData: videoData.videoList[index]
		})
	}
	render() {
		let commentBoxOptions = {
			commentHeader: 'on',
			commentItem: 'on',
			commentWriteGuide: 'off',
			commentForm: 'Community-Pen',
			headerText: '相关评论',
			hdCommentAmount: 'on',
		};
		return (
			<div className="VideoModuleHome main-wrap">
				{this.props.children}
				<CommonHeader>
					<ReturnButton/>
					<CommentButton />
					<Link to="/source/downloadpage">
						<DownLoadButton/>
					</Link>
					<CollectButton></CollectButton>
				</CommonHeader>
				<VideoPoster data={this.state.displayData}/>
				<VideoDescription data={this.state.displayData}/>
				<VideoCollection data={videoData} funcs={this.switchVideo}/>
				<BrowseMoreBtn/>
				<CommentBox options={commentBoxOptions}></CommentBox>
			</div>
		);
	}
}



export default VideoModuleHome;