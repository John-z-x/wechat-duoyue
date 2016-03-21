import React from 'react';

class PlayControlPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  playPause() {
    document.getElementById('mysound').pause();
    
  }
  previousSound() {
    console.log("previous");
  }
  nextSound() {
    console.log("next");
  }
  render() {
    return (
      <div id="playController" className="PlayControlPanel play-controller">
        <div id="SoundBottom" className="audio-bg">
          <div className="audio-all">
            <div className="audio-button">
              <div className="audio-previous" onClick={this.previousSound.bind(this)}></div>
              <div id="btn_play" className="audio-play" onClick={this.playPause.bind(this)}></div>
              <div className="audio-next" onClick={this.nextSound.bind(this)}></div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}
export default PlayControlPanel;