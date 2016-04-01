'use strict';
import React from 'react';
import { Link } from 'react-router';

class VideoCollection extends React.Component {

	render() {
    let data = this.props.data;
    let videoCollectionItem = data.videoList.map((item,i) => {
      return (
        <li className="video-list-cell" dataSrc={item.videoSrc} key={i} onClick={()=>{this.props.funcs(i)}}>
          <div className="poster">
            <img src={item.videoPoster} alt={item.videoTitle}/>
          </div>
          <h4 className="desc">{item.videoTitle}</h4>
        </li>
      )
    });
		return (
			<div className="VideoCollection video-collection">
        <div className="title-wrap clearfix">
          <h3 className="title-text left">{data.titleText}</h3>
          <Link to='/source/video/4/videolist' className="title-num right">
            共<span>{data.videoList.length}</span>个<em className="icon"/>
          </Link>
        </div>
        <div className="video-list-wrap">
          <ul className="video-list">
          {videoCollectionItem}
          </ul>
        </div>
      </div>
		);
	}
}

export default VideoCollection;