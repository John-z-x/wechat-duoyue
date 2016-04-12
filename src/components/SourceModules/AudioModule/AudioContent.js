import React from 'react';
import ReactDOM from 'react-dom';
import IndicatorArea from './IndicatorArea';
import utils from '../../../utils/utils.js';
import RelateRecommend from './RelateRecommend';
import LrcScroll from './LrcScroll';

class AudioContent extends React.Component {
  constructor (props) {
    super(props);
    this.width = document.documentElement.clientWidth;
    this.state =  {
      index: 1,  //判断处于哪一个界面
      left: -this.width, //用于界面滚动
      overInfo: false, //判断描述信息是否超出
      showInfo: false, //是否显示全部描述信息
      isFavor: false, //是否点赞
      favorNum: 0, //点赞数量
    };
    this.SLIDER_TIME = 3000;
    //this.data = { touchstart , startX, marginLeft. isSlidering}
  }

  //控制描述信息的显示隐藏
  toggleInfo() {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }

  //点赞功能并且数量增加
  onZanClick() {
    if(this.state.isFavor) return;
    this.setState({
      isFavor: true,
      favorNum: this.state.favorNum + 1
    });
  }

  componentDidUpdate(prevProps) {
    let data = prevProps.audioData.data[prevProps.audioData.index], newData = this.props.audioData.data[this.props.audioData.index], DEFAULT_INFO_HEIGHT = 66;
    if(data.id == newData.id) return;
    //切换歌曲时判断信息描述内容长度是否超出
    if(this.refs.info.offsetHeight > DEFAULT_INFO_HEIGHT ) {
      this.setState({
        overInfo: true
      });
    }else {
      this.setState({
        overInfo: false
      });
    }
    LrcScroll.init(newData.lrc);
    LrcScroll.start(() => {
      return this.props.audioData.duration * this.props.audioData.progressValue;
    });
  }

  componentDidMount() {
    let container = this.refs.container,  DEFAULT_INFO_HEIGHT = 66;
    let data = this.props.audioData.data[this.props.audioData.index];
    let { duration, progressValue } = this.props.audioData;
    //屏幕滑动
    this.slide(container);
    //加载完毕时判断信息描述内容长度是否超出
    if(this.refs.info.offsetHeight > DEFAULT_INFO_HEIGHT ) {
      this.setState({
        overInfo: true
      })
    }
    //判断是否赞过和赞的数量
    if(data.isFav) {
      this.setState({
        isFavor: true
      })
    }
    this.setState({
      favorNum: data.fav
    });
    //载入歌词
    LrcScroll.init(data.lrc);
    LrcScroll.start(() => {
      return this.props.audioData.duration * this.props.audioData.progressValue;
    });
  }



  componentWillReceiveProps(np) {
    let data = np.audioData.data[np.audioData.index], DEFAULT_INFO_HEIGHT = 66;
    if(data.id == this.props.audioData.data[this.props.audioData.index].id) return;
    //判断是否赞过和赞的数量
    if(data.isFav) {
      this.setState({
        isFavor: true
      })
    }else {
      this.setState({
        isFavor: false
      })
    }
    this.setState({
      favorNum: data.fav
    });
    if(this.refs.info.offsetHeight > DEFAULT_INFO_HEIGHT ) {
      this.setState({
        overInfo: true
      })
    }
  }

  touchStart(e) {
    this.touchstart = e.targetTouches;
    this.startX = this.touchstart[0].pageX;
    this.marginLeft = this.state.left;
  }

  touchMove(e) {
    e.preventDefault();
    let touchmove = e.targetTouches;
    this.moveX = touchmove[0].pageX - this.startX;
    this.setState({
      left: this.marginLeft + this.moveX
    });
  }

  touchEnd(e) {
    let moveX = this.moveX, index = this.state.index;
    let width = document.documentElement.clientWidth;
    this.moveX = 0;
    if(moveX < 0 ) {
      if(moveX < -50 ) {
        if(this.state.index < 2) {
          this.setState({
            index: index + 1,
            left: -(index+1)*width
          });
        }else {
          this.setState({
            left: -index*width
          });
        }
      }else {
        this.setState({
          left: -index*width
        })
      }
    }else {
      if(moveX > 50) {
        if(this.state.index > 0) {
          this.setState({
            index: index - 1,
            left: -(index-1)*width
          });
        }else {
          this.setState({
            left: -index*width
          });
        }
      }else {
        this.setState({
          left: -index*width
        });
      }
    }
  }

  slide(node) {
    node.addEventListener("touchstart", ::this.touchStart, false);
    node.addEventListener('touchmove', ::this.touchMove, false);
    node.addEventListener('touchend', ::this.touchEnd, false);
  }

  componentWillUnmount() {
    let container = this.refs.container, progressDot = this.refs.progressDot;
    container.removeEventListener("touchstart", ::this.touchStart, false);
    container.removeEventListener('touchmove', ::this.touchMove , false);
    container.removeEventListener('touchend', ::this.touchEnd , false);
    LrcScroll.stop();
  }

  render() {
    let { audioData, audioFuns } = this.props,
        { index, showInfo, isFavor, left } = this.state;
    let data = audioData.data[audioData.index], dataList = audioData.data;
    let time = utils.timeFormat(audioData.duration);
    let ab = audioData.isPlaying ? "running" : "paused" ;
    let infoClassname = showInfo ? "music-info-open" : "music-info" ;
    let infoControllClass = showInfo ? "dis-desc-btn-hide" : "dis-desc-btn-show";
    let infoConClassname = showInfo ? "info-con-open" : "info-con";
    let favorSrc = isFavor ? require("../../../../assets/images/mobile/audio/musicFaved.png") :
        require("../../../../assets/images/mobile/audio/musicFav.png");
    let musicListSrc = require("../../../../assets/images/mobile/audio/musicList.png");
    return (
      <div className="AudioContent flex-container"ref="container">
        <div className="slider-page" id="sliderPage" style={{marginLeft: left}}>
          <div className="page-left" id="pageLeft" style={{width: this.width+"px"}}>
            <div className="music-detail">
              <div className="detail-pic">
                <img src={data.picture} alt="专辑封面" id="detailCover" />
              </div>
              <div className="music-desc">
                <div className="music-desc-con">
                  <div id="descTitle" className="desc-title">{data.title}</div>
                  <div id="descSinger" className="desc-singer">歌手：{data.singer}</div>
                </div>
              </div>
            </div>

            
            <div className={infoClassname} ref="info">
              <p className={infoConClassname} >{data.desc}</p>
            {
              this.state.overInfo &&
              <div className={infoControllClass} onClick={this.toggleInfo.bind(this)}></div>
            }
            </div>

            <RelateRecommend dataList={dataList}/>
          </div>

          <div className="page-center flex-item" style={{width: this.width+"px"}}>
            <div className="album-pic">
              <img className="album-cover" src={data.picture} style={{"animationPlayState": ab}} />
            </div>
            <div className="flex-item">
              <div className="music-title">{data.title}</div>
              <div  className="music-menu">
                <div className="fav-btn">
                  <img src={favorSrc} alt="点赞" onClick={this.onZanClick.bind(this)}/>
                </div>
                <div className="fav-num">{this.state.favorNum}</div>
                <div className="list-controls">
                  <div id="listNum" className="list-num">{audioData.index + 1}/{audioData.data.length}</div>
                  <div id="listBtn" className="list-btn" >
                    <img src={musicListSrc} alt="列表" onClick={() => audioFuns.onListClick()}/>
                  </div>
                </div>
              </div>
              <div className="music-progress">
                {this.props.children}
                <div id="musicTime" className="music-time">{time.minutes+":"+time.seconds}</div>
              </div>
            </div>
          </div>

          <div className="page-right" id="pageRight" style={{width: this.width+"px"}}>
            <div className="content" >
              <ul ref="lrc" id="lrc_list">
                </ul>
            </div>
          </div>
        </div>

        <div className="unit-index-wrap" id="unit-index-wrap">
          <div className="unit-index-header clearfix">
            <a className="back-btn" href="javascript:void(0)"/>
            <a className="close-btn" href="javascript:void(0)"/>
          </div>
          <div className="unit-index-body" id="unit-index-body">
            <a className="unit-index-item clearfix" href="">
              <div className="unit-item-text a-line"></div>
              <em className="item-next-btn"/>
            </a>
          </div>
        </div>

        <IndicatorArea index={index}/>
        <textarea id="lrc_content"></textarea>
      </div>
    );
  }
}

export default AudioContent;