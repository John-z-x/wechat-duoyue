import React from 'react';
import _ from 'lodash';

class AudioList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audios: [],
      index: 0
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      audios: this.props.data
    })
  }

  //compare(text, searchArr) {
  //  let searchStartTime = Date.now(), searchEndTime, isOverTime = false, OVERTIMEBASE = 1;
  //  let pattern = new RegExp(text, 'ig');
  //  try {
  //    let firstIndex;
  //    searchArr.filter( (item, i) => {
  //      searchEndTime = Date.now();
  //      let timePassed = (searchEndTime - searchStartTime)/1000;
  //
  //      if(timePassed > OVERTIMEBASE) {
  //        isOverTime = true;
  //        throw new Error('OVERTIME');
  //      }else if(!isOverTime && !firstIndex )//&& ( item.title.toLocaleLowerCase().search(pattern) > -1 || item.singer.toLocaleLowerCase().search(pattern) > -1) ))
  //      {
  //        firstIndex = i;
  //        return firstIndex;
  //      }
  //
  //    })
  //  }catch(e) {
  //    if(e.message == 'OverTime') {
  //      return -1;
  //    }
  //  }
  //}

  handleSearchChange() {
    let searchText = this.refs.search.value, searchAnswer;
    let searchStartTime = Date.now(), searchEndTime, isOverTime = false, OVERTIMEBASE = 1;
    let pattern = new RegExp(searchText, 'ig');
    if(searchText != "") {
      searchAnswer = this.props.data.filter((item) => {
          return item.title.toLocaleLowerCase().search(pattern) > -1 || item.singer.toLocaleLowerCase().search(pattern) > -1
        }
      );
    }else {
      searchAnswer = this.props.data;
    }
    this.setState({
      audios: searchAnswer
    })
  }

  render() {
    let dataList = this.state.audios, _self = this, index = this.props.index, pauseClassname;
    return (
      <div className="AudioList" id="musicList">
        <div className="audio-playing-title clearfix">
          <a className="unit-list-menu-btn" id="unit-list-menu-btn"></a>
          全部音频 ( {dataList.length}首 )
          <div className="close-list-btn" onClick={this.props.onListClick}></div>
        </div>
        <div className="audio-search-wrap" id="audio-search-wrap">
          <div className="audio-search-box">
            <input className="audio-search-input" ref="search" type="text" placeholder="请输入关键词" onChange={this.handleSearchChange}/>
            <a className="audio-search-btn" id="audio-search-btn"></a>
          </div>
        </div>
        <div id="songsList" className="songs-list">
          <table className="sound-list-table" id="play-item-box">
            <tbody>
              {
                  dataList.map( (ele,i) => {
                    pauseClassname = this.props.isPlaying ? "sound-play-right-playing" : "sound-play-right-pause";
                    if(this.props.data[index].id != ele.id) {
                      return (
                          <tr className="play-item" key={i} onClick={ () => _self.props.onChooseClick(ele.id - 1)}>
                            <td className="sound-list-number">{i + 1}</td>
                            <td className="sound-play-tableleft">
                              <div className="sound-pause">{ele.title}</div>
                            </td>
                            <td width="40" className="sound-play-right-pause"></td>
                          </tr>
                      );
                    }else {
                      return (
                        <tr className="play-item" key={i} onClick={ () => _self.props.onChooseClick(ele.id - 1)}>
                          <td className="sound-list-number">{i + 1}</td>
                          <td className="sound-play-tableleft">
                            <div className="sound-playing">{ele.title}</div>
                          </td>
                          <td width="40" className={pauseClassname}></td>
                        </tr>
                      );
                    }
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