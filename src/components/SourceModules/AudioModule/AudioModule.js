// 'use strict';
import React from 'react';
import { Link } from 'react-router';
import TopMaskerLayer from './TopMaskerLayer';
import AudioContent from './AudioContent';
import PlayControlPanel from './PlayControlPanel';
import AudioList from './audioList';
import ProgressController from '../../UIComponent/ProgressController/ProgressController';

import CommonHeader from '../../HeaderComponents/CommonHeader';
import ReturnButton from '../../HeaderComponents/ReturnButton';
import CollectButton from '../../HeaderComponents/CollectButton';
import CommentButton from '../../HeaderComponents/CommentButton';
import DownLoadButton from '../../HeaderComponents/DownLoadButton';

import Alert from '../../Modals/Alert';

import withStyles from '../../../decorators/withStyles';
import styles from './AudioModule.scss';

import LrcScroll from './LrcScroll';

import * as localStorge from '../../../utils/storage.js';
import Utils from '../../../utils/utils.js';

const alertContent = {
  "img": "http://www.duoyue.me/wechat/1018/3021/images/top/save.png",
  "content": "此资源暂时不提供下载功能"
};

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
    "lrc": "[ti:李白]<br>[ar:李荣浩]<br>[al:模特]<br>[by:]<br>[offset:0]<br>[00:01.58]李白 - 李荣浩<br>[00:04.51]词：李荣浩<br>[00:06.94]曲：李荣浩<br>[00:10.19]<br>[00:17.65]大部分人要我学习去看 世俗的眼光<br>[00:23.82]<br>[00:26.01]我认真学习了世俗眼光 世俗到天亮<br>[00:32.24]<br>[00:33.74]一部外国电影没听懂一句话<br>[00:38.06]看完结局才是笑话<br>[00:42.08]你看我多乖多聪明多么听话 多奸诈<br>[00:48.97]<br>[00:50.84]喝了几大碗米酒再离开是为了模仿<br>[00:57.44]<br>[00:59.37]一出门不小心吐的那幅是谁的书画<br>[01:05.60]<br>[01:07.03]你一天一口一个 亲爱的对方<br>[01:11.41]多么不流行的模样<br>[01:15.50]都应该练练书法再出门闯荡<br>[01:19.27]才会有人热情买帐<br>[01:23.08]要是能重来 我要选李白<br>[01:27.07]几百年前做的好坏 没那么多人猜<br>[01:31.80]要是能重来 我要选李白<br>[01:35.47]至少我还能写写诗来澎湃 逗逗女孩<br>[01:39.97]要是能重来 我要选李白<br>[01:43.70]创作也能到那么高端 被那么多人崇拜<br>[01:51.10]要是能重来<br>[01:53.35]喝了几大碗米酒再离开是为了模仿<br>[02:00.00]<br>[02:02.02]一出门不小心吐的那幅是谁的书画<br>[02:08.30]<br>[02:09.80]你一天一口一个 亲爱的对方<br>[02:13.93]多么不流行的模样<br>[02:18.10]都应该练练书法再出门闯荡<br>[02:21.97]才会有人热情买帐<br>[02:25.50]要是能重来 我要选李白<br>[02:29.74]几百年前做的好坏 没那么多人猜<br>[02:34.30]要是能重来 我要选李白<br>[02:37.99]至少我还能写写诗来澎湃 逗逗女孩<br>[02:42.55]要是能重来 我要选李白<br>[02:46.36]创作也能到那么高端 被那么多人崇拜<br>[02:53.97]要是能重来<br>[02:56.38]<br>[03:27.30]要是能重来 我要选李白<br>[03:32.43]几百年前做的好坏 没那么多人猜<br>[03:36.81]要是能重来 我要选李白<br>[03:40.75]至少我还能写写诗来澎湃 逗逗女孩<br>[03:45.37]要是能重来 我要选李白<br>[03:49.00]创作也能到那么高端 被那么多人崇拜<br>[03:56.54]要是能重来"
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
    this.state = {
      soundIndex: 0,  //正在播放的歌曲
      downLoadModal: false, //下载框的显示隐藏
      audioListDisplay: false, //搜索歌曲显示隐藏
      duration: 0, // 歌曲的时常
      progressValue: 0, //歌曲的进度
      isPlaying: true //是否正在播放
    };
    this.audioKey="sound_" + this.props.params.id;
    Utils.bindMethods(this, "populateStorage", "setAudioStyles","checkLocalStorage");
  }

  checkLocalStorage(){
    if(!localStorge.get(this.audioKey)) {
      this.populateStorage();//设置默认localStorage
    } else {
      this.setAudioStyles();
    }
  }

  populateStorage(){
    const { soundIndex  }=this.state;
    let stateValue={"soundIndex":soundIndex};
    statevalue=JSON.stringify(statevalue);
    localStorge.put(this.audioKey,stateValue);
  }

  setAudioStyles(){
    let localStorgeValue=JSON.parse(localStorge.get(this.audioKey));
    let soundIndex=localStorgeValue.soundIndex;
    this.setState({
      soundIndex: soundIndex
    })
  }


  //自动播放
  componentDidMount() {
    let audio = this.refs.audio, _self = this;
    this.setState({
      isPlaying: true
    });
    audio.play();
    audio.addEventListener("timeupdate", _self.updateProgress.bind(this), false);
    audio.addEventListener("ended", () =>  _self.onControllClick("next") , false);
    this.checkLocalStorage();
  }

  //歌曲进度条控制
  updateProgress() {
    let audio = this.refs.audio, progressValue;
    if(!audio) return;
    if(!isNaN(audio.duration)) {
      progressValue = audio.currentTime/audio.duration;
      this.setState({
        duration: audio.duration,
        progressValue: progressValue
      });
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
  componentDidUpdate(prevProps, prevState) {
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
        },::this.populateStorage);
        break;
      case "pause":
        if(!this.state.isPlaying) {
          audio.play();
          LrcScroll.start(() => { return this.refs.audio.currentTime;});
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
        },::this.populateStorage);
        break;
      default :
        return null;
    }
  }

  componentWillUnmount() {
    let audio = this.refs.audio, _self = this;
    window.clearTimeout(this.downLoadTimer);
    audio.removeEventListener("timeupdate", _self.updateProgress.bind(this), false);
    audio.removeEventListener("ended", () =>  _self.onControllClick("next") , false); 
    this.populateStorage();
  }
  //显示隐藏搜索列表
  onListClick() {
    this.setState({
      audioListDisplay: !this.state.audioListDisplay
    });
  }
  //搜索列表选择歌曲
  onChooseClick(index) {
    this.setState({
      soundIndex: index
    },::this.populateStorage);
  }

  onProgressControll(type, progressValue) {
    let audio = this.refs.audio;
    this.setState({
      progressValue: progressValue
    });
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
          isPlaying: true
        });
      default :
        return null;
    }
  }

  render() {
    let soundPageHeight = document.documentElement.clientHeight - 90 + "px";
    let { soundIndex, progressValue, duration, isPlaying } = this.state;
    let audioContentFuns = {
      onListClick: ::this.onListClick
    };
    let audioContentdata = {
      index: soundIndex,
      data: soundList,
      isPlaying: isPlaying,
      duration: duration,
      progressValue: progressValue
    };
    return (
      <div className="AudioModule">
        <CommonHeader>
          <ReturnButton />
          <CollectButton />
          <Link to="/source/commentpage">
            <CommentButton/>
          </Link>
          <DownLoadButton OnDownLoadClick={::this.onDownLoadClick}/>
        </CommonHeader>

        <div className="sound-page" style={{height: soundPageHeight}}>
          <audio className="mysound" ref="audio" src={soundList[soundIndex].path}/>
          <AudioContent audioData={audioContentdata} audioFuns={audioContentFuns}>
            <ProgressController progressValue={progressValue} onProgressControll={::this.onProgressControll}/>
          </AudioContent>
          {
            this.state.audioListDisplay &&  <AudioList data={soundList} onListClick={::this.onListClick} index={soundIndex} onChooseClick={::this.onChooseClick} isPlaying={isPlaying}/>
          }
        </div>

        <PlayControlPanel onControllClick={::this.onControllClick} isPlaying={isPlaying}/>

        {
          this.state.downLoadModal && <Alert content={alertContent}/>
        }
      </div>
    );
  }
}



export default AudioModule;


