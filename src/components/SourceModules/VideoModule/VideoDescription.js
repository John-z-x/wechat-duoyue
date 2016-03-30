'use strict';
import React from 'react';
import classNames from 'classnames';

class VideoDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swich: null,
      wrapHeight: null,
      contentHeight: null
    };
  }
  activeVideoDescState() {
    let 
      desc = this.refs.desc,
      descWrap = this.refs.descWrap,
      wrapHeight = descWrap.clientHeight,
      contentHeight = desc.clientHeight;
    if (wrapHeight < contentHeight) {
      this.setState({
        swich: false,
        wrapHeight: descWrap.clientHeight,
        contentHeight: desc.clientHeight,
      });
    } else {
      this.refs.toggleBtn.style.display = "none";
    }
  }
  toggleShowDesc(event) {
    let 
      desc = this.refs.desc,
      descWrap = this.refs.descWrap;
      
    const 
      condition = this.state.swich,
      wrapHeight = this.state.wrapHeight,
      contentHeight = this.state.contentHeight;
    if (!condition) {
      descWrap.style.maxHeight = contentHeight + 'px';
      this.setState({
        swich: true,
      });
    } else {
      descWrap.style.maxHeight = wrapHeight + 'px';
      this.setState({
        swich: false,
      });
    }
  }
  componentDidMount() {
    this.activeVideoDescState();
  }
	render() {
		return (
			<div className="video-description">
        <h3 className="title">{this.props.data.videoTitle}</h3>
        <section className="desc-wrap" ref="descWrap">
          <article className="desc" ref="desc">
            {this.props.data.videoDesc}
          </article>
        </section>
        <a href="javascript:void(0)" className="toggle-text-btn" onClick={this.toggleShowDesc.bind(this)} ref="toggleBtn">
          <em className={classNames('icon',{'reversal': !this.state.swich})}></em>
        </a>
      </div>
		);
	}
}

export default VideoDescription;