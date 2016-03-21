import React from 'react';

class AudioTopMenu extends React.Component {
  constructor(props) {
    super(props);
    //this.nextSound = this.nextSound.bind(this);
    this.state = {
      favClassName: this.props.data != 0 ? "top-fav-icon-over" : "top-fav-icon",
    }
   }
  changeFav() {
    if(this.props.data!=0) {
      this.setState({
        favClassName :  "top-fav-icon",
      })
    }
    else {
      this.setState({
        favClassName : "top-fav-icon-over"
      })
    }
  }
  componentDidMount() {
    console.log();
    
  }
  
   
  render() {
    return (
      <div id="musicTop" className="music-top flex-item clearfix">
				<div id="topMenu" className="top-menu">
        <img src="/images/mobile/audio/back_check.png" />
        </div>
				<div id="topFav" className="top-fav" onClick={this.changeFav.bind(this)}>
					<em className={this.state.favClassName}></em>
				</div>
				<div id="topComment" className="top-comment">
					<em className="top-comment-icon"></em>
				</div>
				<div className="download-btn" id="download-btn">
					<em className="download-btn-icon"></em>
				</div>
			</div>
    );
  }
}

export default AudioTopMenu;