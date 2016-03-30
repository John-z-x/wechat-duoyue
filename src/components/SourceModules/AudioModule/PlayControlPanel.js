import React from 'react';

class PlayControlPanel extends React.Component {

  onControllClick(type) {
    this.props.onControllClick(type);
  }

  render() {
    let playBtnClass = this.props.isPlaying ? "audio-play" : "audio-stop";
    return (
      <div id="playController" className="PlayControlPanel play-controller">
        <div id="SoundBottom" className="audio-bg">
          <div className="audio-all">
            <div className="audio-button">
              <div className="audio-previous" onClick={() => this.onControllClick("prev")}></div>
              <div id="btn_play" className={playBtnClass} onClick={() => this.onControllClick("pause")}></div>
              <div className="audio-next" onClick={() => this.onControllClick("next")}></div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}
export default PlayControlPanel;