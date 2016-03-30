'use strict';
import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

class VideoCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {

  }
	render() {
    let videoCollectionItem = _.map(this.props.data.videoList, (item,i) => {
      return (
        <li className="video-list-cell" dataSrc={item.videoSrc} key={i} onClick={()=>{this.props.funcs(i)}}>
          <div className="poster">
            <img src={item.videoPoster} alt={item.videoTitle}/>
          </div>
          <h4 className="desc">{item.videoTitle}</h4>
        </li>
      )
    })
		return (
			<div className="video-collection">
        <div className="title-wrap clearfix">
          <h3 className="title-text left">{this.props.data.titleText}</h3>
          <Link to='/source/video/4/videolist' className="title-num right">
            共 {this.props.data.videoList.length} 个<em className="icon"></em>
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