import React from 'react';
import ReactDOM from 'react-dom';
import IndicatorArea from './IndicatorArea';
import utils from '../../../utils/utils.js';
import RelateRecommend from './RelateRecommend';
import LrcScroll from './LrcScroll';

const lrc = "[ti:平凡之路(电影《后会无期》主题曲)]<br>[ar:朴树]<br>[al:平凡之路(电影《后会无期》主题曲)]<br>[by:]<br>[offset:700]<br>[00:00.31]后会无期主题歌<br>[00:02.41]朴树 - 平凡之路<br>[00:03.76]作词：韩寒 朴树 <br>[00:05.67]作曲：朴树 编曲：朴树<br>[00:07.16]<br>[00:12.12]徘徊着的 在路上的 <br>[00:17.47]你要走吗<br>[00:23.30]易碎的 骄傲着 <br>[00:28.85]那也曾是我的模样<br>[00:34.65]沸腾着的 不安着的 <br>[00:40.36]你要去哪<br>[00:46.10]谜一样的 沉默着的 <br>[00:51.85]故事你真的在听吗<br>[00:56.35]我曾经跨过山和大海 <br>[00:59.65]也穿过人山人海<br>[01:02.80]我曾经拥有着一切 <br>[01:05.10]转眼都飘散如烟<br>[01:07.85]我曾经失落失望失掉所有方向<br>[01:13.56]直到看见平凡才是唯一的答案<br>[01:31.80]当你仍然 <br>[01:33.20]还在幻想 <br>[01:37.50]你的明天<br>[01:43.10]她会好吗 还是更烂 <br>[01:49.88]对我而言是另一天<br>[01:53.43]我曾经毁了我的一切 <br>[01:56.64]只想永远地离开<br>[01:59.92]我曾经堕入无边黑暗 <br>[02:02.24]想挣扎无法自拔<br>[02:04.89]我曾经象你象他象那野草野花<br>[02:10.64]绝望着 渴望着 <br>[02:13.64]也哭也笑平凡着<br>[03:03.48]向前走 就这么走 <br>[03:06.33]就算你被给过什么<br>[03:09.18]向前走 就这么走 <br>[03:11.93]就算你被夺走什么 <br>[03:14.88]向前走 就这么走 <br>[03:17.68]就算你会错过什么<br>[03:20.43]向前走 就这么走 <br>[03:23.23]就算你会<br>[03:25.88]我曾经跨过山和大海 <br>[03:28.24]也穿过人山人海<br>[03:30.54]我曾经拥有着一切 <br>[03:33.79]转眼都飘散如烟<br>[03:36.34]我曾经失落失望失掉所有方向<br>[03:42.14]直到看见平凡才是唯一的答案<br>[03:47.79]我曾经毁了我的一切 <br>[03:50.94]只想永远地离开<br>[03:53.49]我曾经堕入无边黑暗 <br>[03:56.39]想挣扎无法自拔<br>[03:59.14]我曾经象你象他象那野草野花<br>[04:04.89]绝望着 渴望着 也哭也笑平凡着<br>[04:10.74]我曾经跨过山和大海 <br>[04:13.64]也穿过人山人海<br>[04:16.24]我曾经问遍整个世界 <br>[04:19.59]从来没得到答案<br>[04:22.98]我不过象你象他象那野草野花<br>[04:27.74]冥冥中这是我 唯一要走的路啊<br>[04:34.75]时间无言 <br>[04:36.25]如此这般<br>[04:40.40]明天已在眼前<br>[04:46.55]风吹过的 路依然远<br>[04:51.65]你的故事讲到了哪";

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
    let data = prevProps.audioData.data[prevProps.audioData.index], DEFAULT_INFO_HEIGHT = 85;
    if(data.id == this.props.audioData.data[this.props.audioData.index].id) return;
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
  }

  componentDidMount() {
    let container = this.refs.container,  DEFAULT_INFO_HEIGHT = 85;
    let data = this.props.audioData.data[this.props.audioData.index];
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
    LrcScroll.init(lrc);
    if(this.refs.lrc.innerHTML !== "") {
      LrcScroll.start(() => { return this.props.duration*this.props.progressValue; });
    }
  }

  componentWillReceiveProps(np) {
    let data = np.audioData.data[np.audioData.index], DEFAULT_INFO_HEIGHT = 85;
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
    let { audioData } = this.props,
        { index, showInfo, isFavor, left } = this.state;
    let data = audioData.data[audioData.index], dataList = audioData.data;
    let time = utils.timeFormat(audioData.duration);
    let ab = audioData.isPlaying ? "running" : "paused" ;
    let infoClassname = showInfo ? "music-info-open" : "music-info" ;
    let infoControllClass = showInfo ? "dis-desc-btn-hide" : "dis-desc-btn-show";
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