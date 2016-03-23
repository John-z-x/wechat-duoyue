import React from 'react';
import IndicatorArea from './IndicatorArea';
import utils from '../../../utils/utils.js';
import RelateRecommend from './RelateRecommend';

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
      progressControlling: false, //是否手动控制进度条
      progressLeft: 0 //手动控制进度条的位置
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

  onZanClick() {
    if(this.state.isFavor) return;
    this.setState({
      isFavor: true,
      favorNum: this.state.favorNum + 1
    });
  }

  componentDidMount() {
    let container = this.refs.container, progressDot = this.refs.progressDot;
    let data = this.props.data[this.props.index];
    //屏幕滑动
    this.slide(container);
    this.moveProgress(progressDot);
    //计算歌曲进度条总长度
    this.progressLong = this.refs.progress.offsetWidth;
    //判断信息描述内容长度是否超出
    if(this.refs.info.offsetHeight > 85 ) {
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
    })
  }

  touchStartProgress(e) {
    e.stopPropagation();
    this.setState({
      progressControlling: true,
      progressLeft: this.props.progressValue*this.progressLong
    });
    this.touchstartP = e.targetTouches;
    this.startXP = this.touchstartP[0].pageX;
    this.marginLeftP = this.state.progressLeft;
    this.props.onProgressControll("start");
  }

  touchMoveProgress(e) {
    e.stopPropagation();
    let touchmove = e.targetTouches, left = this.state.progressLeft;
    this.moveXP = touchmove[0].pageX - this.startXP;
    if( left > 0 && left < this.progressLong ) {
      this.setState({
        progressLeft: this.marginLeftP + this.moveXP
      });
    }
  }

  touchEndProgress(e) {
    e.stopImmediatePropagation();
    let progressValue = this.state.progressLeft/this.progressLong;
    this.setState({
      progressControlling: false
    });
    console.log(progressValue);
    this.props.onProgressControll("end", progressValue);
  }

  moveProgress(node) {
    let _self = this;
    node.addEventListener("touchstart", _self.touchStartProgress.bind(_self), false);
    node.addEventListener('touchmove', _self.touchMoveProgress.bind(_self), false);
    node.addEventListener("touchend", _self.touchEndProgress.bind(_self), false);
  }

  componentWillReceiveProps(np) {
    let data = np.data[np.index];
    //判断是否赞过和赞的数量
    if(data.id == this.props.data[this.props.index].id) return;
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
    })
  }

  touchStart(e) {
    this.touchstart = e.targetTouches;
    this.startX = this.touchstart[0].pageX;
    this.marginLeft = this.state.left;
  }

  touchMove(e) {
    let touchmove = e.targetTouches;
    this.moveX = touchmove[0].pageX - this.startX;
    this.setState({left: this.marginLeft + this.moveX});
  }

  touchEnd(e) {
    let moveX = this.moveX, sliderList = 3, end, index = this.state.index;
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
    let _self = this;
    node.addEventListener("touchstart", _self.touchStart.bind(_self), false);
    node.addEventListener('touchmove', _self.touchMove.bind(_self), false);
    node.addEventListener('touchend', _self.touchEnd.bind(_self), false);
  }

  render() {
    let data = this.props.data[this.props.index], dataList = this.props.data;
    let width = this.props.progressValue*this.progressLong;
    let time = utils.timeFormat(this.props.timeLong);
    let ab = this.props.isPlaying ? "running" : "paused" ;
    let infoClassname = this.state.showInfo ? "music-info-open" : "music-info" ;
    let infoControllClass = this.state.showInfo ? "dis-desc-btn-hide" : "dis-desc-btn-show";
    let favorSrc = this.state.isFavor ? "/images/mobile/audio/musicFaved.png" : "/images/mobile/audio/musicFav.png";
    return (
      <div className="AudioContent flex-container"ref="container">
        <div className="slider-page" id="sliderPage" style={{marginLeft: this.state.left}}>
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
            <div className={infoClassname}>
              <p className="info-con" ref="info">{data.desc}</p>
            </div>
            {
             this.state.overInfo &&
              <div className={infoControllClass} onClick={this.toggleInfo.bind(this)}></div>
            }
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
                  <div id="listNum" className="list-num">{this.props.index + 1}/{this.props.data.length}</div>
                  <div id="listBtn" className="list-btn" >
                    <img src="/images/mobile/audio/musicList.png" alt="列表" onClick={() => this.props.onListClick()}/>
                  </div>
                </div>
              </div>
              <div className="music-progress">
                {
                  this.state.progressControlling ?
                    (
                      <div id="progress_bg" className="music-progress-box" ref="progress">
                        <div id="progress_buffer">
                          <div id="progress" style={{width: this.state.progressLeft + "px"}}></div>
                        </div>
                        <div className ="progress-dot-bg"></div>
                        <div id="progress_dot" ref="progressDot" style={{marginLeft: this.state.progressLeft + "px"}}></div>
                      </div>
                    )
                    :
                    (
                      <div id="progress_bg" className="music-progress-box" ref="progress">
                        <div id="progress_buffer">
                        <div id="progress" style={{width: width + "px"}}></div>
                        </div>
                        <div className="progress-dot-bg"></div>
                        <div id="progress_dot" ref="progressDot" style={{marginLeft: width + "px"}}></div>
                      </div>
                    )
                }
                <div id="musicTime" className="music-time">{time.minutes+":"+time.seconds}</div>
              </div>
            </div>
          </div>

          <div className="page-right" id="pageRight" style={{width: this.width+"px"}}>
            <div className="content" >
              <ul id="lrc_list">
                抱歉，暂无歌词
              </ul>
            </div>
          </div>
        </div>

        <div className="unit-index-wrap" id="unit-index-wrap">
          <div className="unit-index-header clearfix">
            <a className="back-btn" href="javascript:void(0)"></a>
            <a className="close-btn" href="javascript:void(0)"></a>
          </div>
          <div className="unit-index-body" id="unit-index-body">
            <a className="unit-index-item clearfix" href="">
              <div className="unit-item-text a-line"></div>
              <em className="item-next-btn"></em>
            </a>
          </div>
        </div>

        <IndicatorArea index={this.state.index}/>
        <textarea id="lrc_content"></textarea>
      </div>
    );
  }
}

export default AudioContent;