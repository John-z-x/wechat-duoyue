'use strict';
import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

class VideoDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false, //是否显示全部信息
      isOver: false //是否需要显示箭头
    };
    this.OVER_HEIGHT = 36;
    //this.toggleShowDesc = this.toggleShowDesc.bind(this);
  }
  activeVideoDescState() {
    let descHeight = findDOMNode(this.refs.desc).clientHeight;
    this.OVER_HEIGHT = findDOMNode(this.refs.descWrap).clientHeight;

    if (descHeight > this.OVER_HEIGHT) {
      this.setState({
        isOver: true
      });
    }else {
      this.setState({
        isOver: false
      });
    }
    //初始化箭头方向
    this.setState({
      showAll: false
    })
  }

  toggleShowDesc() {
    this.setState({
      showAll: !this.state.showAll
    })
  }

  componentDidMount() {
    this.activeVideoDescState();
  }

  componentDidUpdate(nextProps) {
    if(nextProps.index == this.props.index) return;
    this.activeVideoDescState();
  }

	render() {
    let maxHeight = this.state.showAll ? "" : this.OVER_HEIGHT;
    let { videoTitle, videoDesc} = this.props.data, {isOver, showAll} = this.state;
		return (
			<div className="VideoDescription video-description">
        <h3 className="title">{videoTitle}</h3>
        <section className="desc-wrap" style={{maxHeight: maxHeight}} ref="descWrap">
          <article className="desc" ref="desc">
            {videoDesc}
          </article>
        </section>
        {
          isOver &&
          <span className="toggle-text-btn" onClick={::this.toggleShowDesc}>
            <em className={classNames('icon',{'reversal': !showAll})}/>
          </span>
        }
      </div>
		);
	}
}

export default VideoDescription;