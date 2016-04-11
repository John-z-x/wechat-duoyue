'use strict';
import React from 'react';

class VideoPoster extends React.Component {

  togglePlay() {
  	let myVideo = this.refs.myVideo;
  	if (myVideo.paused) {
  		myVideo.play();
  	} else {
  		myVideo.pause();
  	}
  }

	render() {
		let { data } = this.props;
		return (
			<div className="VideoPoster" onClick={::this.togglePlay}>
				<video className="my-video" src={data.videoSrc} preload="none" poster={data.videoPoster} id="my-video" ref="myVideo" />
			</div>
		);
	}
}

export default VideoPoster;