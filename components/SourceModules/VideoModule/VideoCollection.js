'use strict';
import React from 'react';

class VideoCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {

  }
	render() {
		return (
			<div className="video-collection">
        <div className="title-wrap clearfix">
          <h3 className="title-text left">{this.props.data.titleText}</h3>
          <a className="title-num right" href="">共{this.props.data.titleNum}个<em className="icon"></em></a>
        </div>
        <div className="video-list-wrap">
          <ul className="video-list">
          {
            this.props.data.videoList.map((item,i) => {
              return (
                <li className="video-list-cell" dataSrc={item.videoSrc} key={i}>
                  <div className="poster">
                    <img src={item.videoPoster} alt=""/>
                  </div>
                  <h4 className="desc">{item.videoTitle}</h4>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
		);
	}
}

export default VideoCollection;