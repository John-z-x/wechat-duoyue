'use strict';
import React from 'react';
import VideoPoster from './VideoPoster.js';
import VideoDescription from './VideoDescription.js';
import VideoCollection from './VideoCollection.js';
import BrowseMoreBtn from './BrowseMoreBtn.js';
import RelevantCommentTitle from './RelevantCommentTitle.js';
import withStyles from '../../../decorators/withStyles';
import styles from './VideoModule.scss';


const sourceVideoData = {
	videoPosterData: {
		videoSrc: 'http://file.duoyue.me/upload/source/video/20151219/2015_12_19_163211703.mp4',
		videoPoster: 'http://file.duoyue.me/upload/source/20151219/2015_12_19_163916786.png'
	},
	videoDescData: {
		title: '当代昆曲 唯美呈现 《春江花月夜》当代昆曲 唯美呈现 《春江花月夜》',
		text: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制',
	},
	videoCollectionData: {
		titleText: '视频选集',
		titleNum: '125656',
		videoList: [
			{videoSrc: 'http://file.duoyue.me/upload/source/video/20151219/2015_12_19_163211703.mp4',videoPoster: 'http://file.duoyue.me/upload/source/20151219/2015_12_19_163916786.png',videoTitle: '当代昆曲 唯美呈现 《春江花月夜》当代昆曲 唯美呈现 《春江花月夜》', videoDesc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制'},
			{videoSrc: 'http://file.duoyue.me/upload/source/video/20151216/2015_12_16_151250239.mp4',videoPoster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153308432.jpg',videoTitle: '想要传送一封简讯给你，我好想好想你；想要立刻打通电话给你，我好想好想你；每天起床的第一件事情，就是好想好想无论晴天还是下雨都好想好想你......就是喜欢这么甜甜腻腻，有本事，你宠我一辈子啊！', videoDesc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制'},
			{videoSrc: 'http://file.duoyue.me/upload/source/video/20151219/2015_12_19_163211703.mp4',videoPoster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_154703908.jpg',videoTitle: '岳云鹏郭麒麟争德云一哥 亲儿子狂虐不肖徒弟', videoDesc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制'},
			{videoSrc: 'http://file.duoyue.me/upload/source/video/20151219/2015_12_19_163211703.mp4',videoPoster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_154703908.jpg',videoTitle: '岳云鹏郭麒麟争德云一哥 亲儿子狂虐不肖徒弟', videoDesc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制'},
			{videoSrc: 'http://file.duoyue.me/upload/source/video/20151219/2015_12_19_163211703.mp4',videoPoster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_154703908.jpg',videoTitle: '岳云鹏郭麒麟争德云一哥 亲儿子狂虐不肖徒弟', videoDesc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制'},
			
		]
	},
	BrowseMoreBtnData: {
		href: 'http//:www.duoyue.me/wechat/1018/3021/source/index.aspx?type=4&keyword='
	}
};

@withStyles(styles)
class VideoModule extends React.Component {
	render() {
		return (
			<div className="VideoModule main-wrap">
				<VideoPoster data={sourceVideoData.videoPosterData}/>
				<VideoDescription data={sourceVideoData.videoDescData}/>
				<VideoCollection data={sourceVideoData.videoCollectionData}/>
				<BrowseMoreBtn data={sourceVideoData.BrowseMoreBtnData}/>
				{/*<RelevantCommentTitle/>*/}
			</div>
		);
	}
}


export default VideoModule;