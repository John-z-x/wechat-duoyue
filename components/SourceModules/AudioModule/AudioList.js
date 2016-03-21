import React from 'react';

class AudioList extends React.Component {
  
  closeList() {
    document.getElementById('musicList').style.webkitTransform = "translateY(100%)"
  }
  render() {
    return (
      <div className="AudioList" id="musicList">
        <div className="audio-playing-title clearfix">
          <a className="unit-list-menu-btn" id="unit-list-menu-btn"></a>
          全部音频 ( {this.props.data.length}首 )
          <div className="close-list-btn" onClick={this.closeList.bind(this)}></div>
        </div>
        <div className="audio-search-wrap" id="audio-search-wrap">
          <div className="audio-search-box">
            <input className="audio-search-input" id="audio-search-input" type="text" placeholder="请输入关键词" />
            <a className="audio-search-btn" id="audio-search-btn"></a>
          </div>
        </div>
        <div id="songsList" className="songs-list">
          <table className="sound-list-table" id="play-item-box">
            <tbody>
              {
                this.props.data.map(function(ele,i){
                  return(
                    <tr className="play-item" key={i}>
                      <td className="sound-list-number">{i+1}</td>
                      <td className="sound-play-tableleft">
                        <input type="hidden" name="audio-id" value={ele.id} />
                        <div id="sound_playing_div_i" name="playlist-item-title" className="sound-pause">{ele.title}</div>
                      </td>
                      <td width="40" id="sound_play_tableright_i" className="sound-play-right-playing"></td>
                    </tr>
                  );
                })
              }
            </tbody>   
          </table>
        </div>
      </div>
    );
  }
}

export default AudioList;