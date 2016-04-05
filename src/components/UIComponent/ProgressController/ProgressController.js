import React from 'react';
import { findDOMNode } from 'react-dom';

import widthStyles from '../../../decorators/withStyles';
import styles from "./ProgressController.scss";

@widthStyles(styles)
class ProgressController extends React.Component {

  touchStartProgress(e) {
    let { onProgressControll, progressValue } = this.props;
    e.stopPropagation();
    e.preventDefault();
    this.startXP = e.targetTouches[0].pageX;
    this.startV = progressValue;
    onProgressControll("start", progressValue);
  }

  touchMoveProgress(e) {
    e.stopPropagation();
    e.preventDefault();
    let touchmove = e.targetTouches, { onProgressControll } = this.props,
        progressValueNew, progressLong = this.progressLong;
    let moveX = touchmove[0].pageX - this.startXP;
    progressValueNew = this.startV + moveX/progressLong;
    if( progressValueNew >= 0 && progressValueNew <= 1 ) {
      onProgressControll("move", progressValueNew);
    }
  }

  touchEndProgress(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    let { onProgressControll, progressValue } = this.props;
    onProgressControll("end", progressValue);
  }

  moveProgress(node) {
    node.addEventListener("touchstart", ::this.touchStartProgress, false);
    node.addEventListener('touchmove', ::this.touchMoveProgress, false);
    node.addEventListener("touchend", ::this.touchEndProgress, false);
  }
  
  componentDidMount() {
    let progressDot = findDOMNode(this.refs.progressDot);
    this.progressLong = findDOMNode(this.refs.progress).offsetWidth;
    this.moveProgress(progressDot);
  }

  render() {
    let width = this.props.progressValue*this.progressLong;
    return (
      <div className="ProgressController" id="ProgressController">
        <div id="progress_bg" className="music-progress-box" ref="progress">
          <div id="progress_buffer">
            <div id="progress" style={{width: width + "px"}}></div>
          </div>
          <div className="progress-dot-bg"></div>
          <div id="progress_dot" ref="progressDot" style={{marginLeft: width + "px"}}></div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default ProgressController;