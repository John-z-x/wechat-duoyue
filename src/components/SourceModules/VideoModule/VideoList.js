'use strict';
import React from 'react';
import { Link } from 'react-router';
import CommonHeader from '../../HeaderComponents/CommonHeader.js';
import ReturnButton from '../../HeaderComponents/ReturnButton';
////import withstyles from '../../../decorators/withStyles';
import styles from './VideoModule.scss';

const data = [
  {videoListId: "1", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153636196.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {videoListId: "2", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153308432.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {videoListId: "3", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153842889.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {videoListId: "4", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153636196.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {videoListId: "5", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153308432.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {videoListId: "6", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153842889.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {videoListId: "7", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153636196.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {videoListId: "8", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153308432.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {videoListId: "9", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153842889.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {videoListId: "10", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153636196.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {videoListId: "11", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153308432.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {videoListId: "12", poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153842889.jpg', desc: '把66部韩剧的动心'},
  
  ];

//@withStyles(styles)
class VideoList extends React.Component {

	render() {
    let videoListItem = data.map((item, i) => {
      return (
        <Link to="/source/video/4" className="v-col-page-cell left" key={i}>
          <div className="poster">
            <img src={item.poster} alt="poster" title="image"/>
            {/*<aside className="v-attr">视频时长：10</aside>*/}
          </div>
          <h3 className="desc">{item.desc}</h3>
        </Link>
      )
    });
		return (
			<div className="VideoList">
        <CommonHeader>
          <ReturnButton/>
        </CommonHeader>
        <div className="video-list-content">
          {videoListItem}
        </div>
      </div>
		);
	}
}

export default VideoList;
