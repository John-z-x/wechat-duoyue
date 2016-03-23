// 'use strict';
import React from 'react';
import TopMaskerLayer from './TopMaskerLayer';
import AudioContent from './AudioContent';
import PlayControlPanel from './PlayControlPanel';
import AudioList from './AudioList';
import RelateRecommend from './RelateRecommend';

import CommonHeader from '../../HeaderComponents/CommonHeader';
import ReturnButton from '../../HeaderComponents/ReturnButton';
import CollectButton from '../../HeaderComponents/CollectButton';
import CommentButton from '../../HeaderComponents/CommentButton';
import DownLoadButton from '../../HeaderComponents/DownLoadButton';

import Alert from '../../Modals/Alert';

import withStyles from '../../../decorators/withStyles';
import styles from './AudioModule.scss';

const alertContent = {
  "img": "http://www.duoyue.me/wechat/1018/3021/images/top/save.png",
  "content": "此资源暂时不提供下载功能"
}

const soundList = [
  {
    "id": 1,
    "isGood": 0,
    "isFav": true,
    "fav": 3,
    "title": "李白",
    "path": "http://file.duoyue.me/upload/source/sound/20160112/2016_01_12_170605679.mp3",
    "desc": "由简单快乐发行，2013李荣浩全创作新专辑《模特》的首波主打歌《李白》，是他在音乐中旁观这个世界，以淡淡的自嘲意味去表达，对于人与人之间的关系看似亲切，实则疏离的普遍现象。也希望人们在听到《李白》这首歌的时候，能够不用在乎外界的评价眼光，用直觉和本心去生活，率性自由而不被世俗所束缚",
    "singer": "李荣浩",
    "picture": "http://file.duoyue.me/upload/source/20160112/2016_01_12_171009919.png",
    "lrc": ""
  },
  {
    "id": 2,
    "isGood": 1,
    "isFav": true,
    "fav": 1,
    "title": "直到世界尽头",
    "path": "http://file.duoyue.me/upload/source/sound/20160113/2016_01_13_110346108.mp3",
    "desc": "beyond是中国香港的摇滚乐队。1983年beyond正式成立，由黄家驹、叶世荣、邓炜谦、李荣潮四名成员组成。1988年至1993年，beyond由黄家驹、黄贯中、黄家强、叶世荣四名成员组成。1994年至2005年，beyond由黄贯中、黄家强、叶世荣三名成员组成。",
    "singer": "WANDS",
    "picture": "http://file.duoyue.me/upload/source/20160113/2016_01_13_111015934.png",
    "lrc": ""
  },
  {
    "id": 3,
    "isGood": 0,
    "isFav": false,
    "fav": 4,
    "title": "好想大声说喜欢你",
    "path": "http://file.duoyue.me/upload/source/sound/20160113/2016_01_13_110332545.mp3",
    "desc": "灌篮高手插曲，好想大声说喜欢你",
    "singer": "BAAD",
    "picture": "http://file.duoyue.me/upload/source/20160113/2016_01_13_111015934.png",
    "lrc": ""
  },
  {
    "id": 4,
    "isGood": 1,
    "isFav": false,
    "fav": 8,
    "title": "模特",
    "path": "http://file.duoyue.me/upload/source/sound/20160112/2016_01_12_170608229.mp3",
    "desc": "李荣浩以前为别人制作专辑，而《模特》是第一次为自己制作，参与了专辑中大部分歌的作词作曲，最能够表达自己。《模特》这张专辑，不但涵盖了人们在不同阶段中的角色，更是邀请到国际音乐创作团队，所有作品均由真实木质乐器录制，添加多种别致的音乐元素。可以说，《模特》不仅多元化的展示了李荣浩的个人音乐创作天分，也是李荣浩与国际音乐制作团队的合作成果",
    "singer": "李荣浩",
    "picture": "http://file.duoyue.me/upload/source/20160112/2016_01_12_171009919.png",
    "lrc": ""
  }
];

@withStyles(styles)
class AudioModule extends React.Component {
  constructor(props) {
    super(props);
    this.isPlay = false;
    this.state = {
      soundIndex: 0,  //正在播放的歌曲
      downLoadModal: false, //下载框的显示隐藏
      audioList: false, //搜索歌曲显示隐藏
      timeLong: 0, // 歌曲的时常
      progressValue: 0, //歌曲的进度
      isPlaying: true //是否正在播放
    };
    this.onDownLoadClick = this.onDownLoadClick.bind(this);
    this.onControllClick = this.onControllClick.bind(this);
  }

  //自动播放
  componentDidMount() {
    let audio = this.refs.audio, _self = this;
    this.isPlay = true;
    this.setState({
      isPlaying: true
    });
    audio.play();
    audio.addEventListener("timeupdate", _self.updateProgress.bind(this), false);
    audio.addEventListener("ended", () =>  _self.onControllClick("next") , false);
  }
  //歌曲进度条控制
  updateProgress() {
    let audio = this.refs.audio,progressValue;
    if(!isNaN(audio.duration)) {
      progressValue = audio.currentTime/audio.duration;
      this.setState({
        timeLong: audio.duration,
        progressValue: progressValue
      });
      //console.log(this.state.progressValue);
    }
  }
  //下载功能
  onDownLoadClick() {
    this.setState({
      downLoadModal: true
    });
    this.downLoadTimer = setTimeout( ()=> {
      this.setState({
        downLoadModal: false
        })
    }, 2000 )
  }
 //切歌自动播放
  componentDidUpdate(prevPorps, prevState) {
    if(prevState.soundIndex != this.state.soundIndex) {
      this.refs.audio.play();
      this.setState({
        isPlaying: true
      });
    }
  }
  //暂停，上一首，下一首播放歌曲
  onControllClick(type) {
    let audio = this.refs.audio;
    let prev = (this.state.soundIndex > 0) ? this.state.soundIndex - 1 : soundList.length - 1;
    let next = this.state.soundIndex < soundList.length - 1 ? this.state.soundIndex + 1 : 0;
    switch(type) {
      case "prev":
        this.setState({
          soundIndex: prev
        });
        break;
      case "pause":
        if(!this.state.isPlaying) {
          audio.play();
        }else {
          audio.pause();
        }
        this.setState({
          isPlaying: !this.state.isPlaying
        });
        break;
      case "next":
        this.setState({
          soundIndex: next
        });
        break;
      default :
        return null;
    }
  }

  onCommentClick() {

  }

  componentWillUnmount() {
    window.clearTimeout(this.downLoadTimer);
  }
  //显示隐藏搜索列表
  onListClick() {
    this.setState({
      audioList: !this.state.audioList
    });
  }
  //搜索列表选择歌曲
  onChooseClick(index) {
    console.log(index+"out");
    this.setState({
      soundIndex: index
    });
  }

  onProgressControll(type,progressValue) {
    let audio = this.refs.audio;
    switch(type) {
      case "start":
        this.setState({
          isPlaying: false
        });
        audio.pause();
        break;
      case "end":
        audio.currentTime = audio.duration*progressValue;
        audio.play();
        this.setState({
          isPlaying: true,
          progressValue: progressValue
        });



      default :
        return null;
    }
  }

  render() {
    let soundPageHeight = document.documentElement.clientHeight - 90 + "px";
    return (
      <div className="AudioModule">
        <CommonHeader>
          <ReturnButton />
          <CollectButton />
          <CommentButton />
          <DownLoadButton OnDownLoadClick={this.onDownLoadClick}/>
        </CommonHeader>

        <div className="sound-page" style={{height: soundPageHeight}}>
          <audio className="mysound" ref="audio" src={soundList[this.state.soundIndex].path}></audio>
          <AudioContent index={this.state.soundIndex} data={soundList} onListClick={this.onListClick.bind(this)} timeLong={this.state.timeLong}
              progressValue={this.state.progressValue} isPlaying={this.state.isPlaying} onProgressControll={this.onProgressControll.bind(this)}/>
          {
            this.state.audioList &&  <AudioList data={soundList} onListClick={this.onListClick.bind(this)} index={this.state.soundIndex} onChooseClick={this.onChooseClick.bind(this)} isPlaying={this.state.isPlaying}/>
          }
        </div>

        <PlayControlPanel onControllClick={this.onControllClick} isPlaying={this.state.isPlaying}/>

        {
          this.state.downLoadModal && <Alert content={alertContent}/>
        }
      </div>
    );
  }
}



export default AudioModule;

//    [00:00.00]李荣浩-李白
//    [00:03.11]词曲：李荣浩
//    [00:11.18]微博：weibo.com/shebeyonds
//    [00:17.42]大部分人让我学习
//    [00:19.61]去看世俗的眼光
//    [00:25.73]我认真
//    [00:26.53]学习了世俗眼光
//    [00:28.89]世俗到天亮
//    [00:33.71]一部外国电影
//    [00:35.31]没听懂一句话
//    [00:37.78]看完结局才是笑话
//    [00:42.03]你看我多乖多聪明
//    [00:44.59]多么听话 多奸诈
//    [00:50.75]喝了几大碗米酒
//    [00:52.79]再离开是为了模仿
//    [00:59.17]一出门
//    [00:59.80]不小心吐的那幅
//    [01:02.24]是谁的书画
//    [01:07.04]你一天一口一个
//    [01:09.04]亲爱的对方
//    [01:11.18]多么不流行的模样
//    [01:15.31]都应该练练书法
//    [01:17.34]再出门闯荡
//    [01:19.08]才会有人热情买帐
//    [01:22.89]要是能重来
//    [01:24.94]我要选李白
//    [01:26.90]好几百年前做的好坏
//    [01:29.52]没那么多人猜
//    [01:31.39]要是能重来
//    [01:33.13]我要选李白
//    [01:35.24]至少我还能
//    [01:36.40]写写诗来澎湃
//    [01:38.26]逗逗女孩
//    [01:39.65]要是能重来
//    [01:41.52]我要选李白
//    [01:43.52]创作也能到
//    [01:44.69]那么高端
//    [01:46.23]被那么多人崇拜
//    [01:50.97]要是能重来
//    [01:52.92]
//    [01:53.59]喝了几大碗米酒
//    [01:55.44]再离开是为了模仿
//    [02:01.76]一出门
//    [02:02.44]不小心吐的那幅
//    [02:04.83]是谁的书画
//    [02:09.60]你一天一口一个
//    [02:11.63]亲爱的对方
//    [02:13.71]多么不流行的模样
//    [02:17.95]都应该练练书法
//    [02:19.90]再出门闯荡
//    [02:21.48]才会有人热情买帐
//    [02:25.46]要是能重来
//    [02:27.43]我要选李白
//    [02:29.45]好几百年前做的好坏
//    [02:32.18]没那么多人猜
//    [02:33.80]要是能重来
//    [02:35.79]我要选李白
//    [02:37.69]至少我还能
//    [02:38.98]写写诗来澎湃
//    [02:40.81]逗逗女孩
//    [02:42.14]要是能重来
//    [02:44.09]我要选李白
//    [02:46.12]创作也能到
//    [02:47.32]那么高端
//    [02:48.86]被那么多人崇拜
//    [02:53.52]要是能重来
//    [02:55.56]
//    [03:27.19]要是能重来
//    [03:30.01]我要选李白
//    [03:32.00]好几百年前做的好坏
//    [03:34.81]没那么多人猜
//    [03:36.42]要是能重来
//    [03:38.42]我要选李白
//    [03:40.37]至少我还能
//    [03:41.61]写写诗来澎湃
//    [03:43.46]逗逗女孩
//    [03:44.81]要是能重来
//    [03:46.75]我要选李白
//    [03:48.69]创作也能到
//    [03:49.94]那么高端
//    [03:51.55]被那么多人崇拜
//    [03:56.12]要是能重来
//    [03:58.38]微博：weibo.com/shebeyonds
