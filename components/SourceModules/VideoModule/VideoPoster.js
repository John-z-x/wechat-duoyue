'use strict';
import React from 'react';

class VideoPoster extends React.Component {
	constructor(props) {
    super(props);
    // console.log(this)
    this.state = {
    };
  }
  togglePlay() {
  	let myVideo = this.refs.myVideo;
  	if (myVideo.paused) {
  		myVideo.play();
  	} else {
  		myVideo.pause();
  	}
  }
	render() {
		return (
			<div className="video-poster" onClick={this.togglePlay.bind(this)}>
				<video className="my-video" src={this.props.data.videoSrc} preload="none" poster={this.props.data.videoPoster} id="my-video" ref="myVideo"></video>
			</div>
		);
	}
}


export default VideoPoster;