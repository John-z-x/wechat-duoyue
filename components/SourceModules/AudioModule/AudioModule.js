// 'use strict';
import React from 'react';
import TopMaskerLayer from './TopMaskerLayer';
import AudioContent from './AudioContent';
import PlayControlPanel from './PlayControlPanel';
import AudioList from './AudioList';

import withStyles from '../../../decorators/withStyles';
import styles from './AudioModule.scss';

const soundList = [
  {
    "id": 1,
    "isGood": 1,
    "isFav": 1,
    "fav": 1,
    "title": "直到世界尽头",
    "path": "http://file.duoyue.me/upload/source/sound/20160113/2016_01_13_110346108.mp3",
    "desc": "",
    "singer": "WANDS",
    "picture": "http://file.duoyue.me/upload/source/20160113/2016_01_13_111015934.png",
    "geci": ""
  },
  {
    "id": 2,
    "isGood": 0,
    "isFav": 1,
    "fav": 4,
    "title": "好想大声说喜欢你",
    "path": "http://file.duoyue.me/upload/source/sound/20160113/2016_01_13_110332545.mp3",
    "desc": "灌篮高手插曲，好想大声说喜欢你",
    "singer": "BAAD",
    "picture": "http://file.duoyue.me/upload/source/20160113/2016_01_13_111015934.png",
    "geci": ""
  },
  {
    "id": 3,
    "isGood": 0,
    "isFav": 0,
    "fav": 3,
    "title": "李白",
    "path": "http://file.duoyue.me/upload/source/sound/20160112/2016_01_12_170605679.mp3",
    "desc": "由简单快乐发行，2013李荣浩全创作新专辑《模特》的首波主打歌《李白》，是他在音乐中旁观这个世界，以淡淡的自嘲意味去表达，对于人与人之间的关系看似亲切，实则疏离的普遍现象。也希望人们在听到《李白》这首歌的时候，能够不用在乎外界的评价眼光，用直觉和本心去生活，率性自由而不被世俗所束缚",
    "singer": "李荣浩",
    "picture": "http://file.duoyue.me/upload/source/20160112/2016_01_12_171009919.png",
    "geci": ""
  },
  {
    "id": 4,
    "isGood": 1,
    "isFav": 1,
    "fav": 8,
    "title": "模特",
    "path": "http://file.duoyue.me/upload/source/sound/20160112/2016_01_12_170608229.mp3",
    "desc": "李荣浩以前为别人制作专辑，而《模特》是第一次为自己制作，参与了专辑中大部分歌的作词作曲，最能够表达自己。《模特》这张专辑，不但涵盖了人们在不同阶段中的角色，更是邀请到国际音乐创作团队，所有作品均由真实木质乐器录制，添加多种别致的音乐元素。可以说，《模特》不仅多元化的展示了李荣浩的个人音乐创作天分，也是李荣浩与国际音乐制作团队的合作成果",
    "singer": "李荣浩",
    "picture": "http://file.duoyue.me/upload/source/20160112/2016_01_12_171009919.png",
    "geci": ""
  }
]

@withStyles(styles)
class AudioModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundIndex: 0,
    }
  }
  
  componentDidMount() {
    document.getElementById("sliderPage").style.width = (window.innerWidth*3) + "px";
    document.getElementById("pageLeft").style.width = (window.innerWidth) + "px";
    document.getElementById("pageCenter").style.width = (window.innerWidth) + "px";
    document.getElementById("pageRight").style.width = (window.innerWidth) + "px";
    document.getElementById("sliderPage").style.marginLeft = (-window.innerWidth) + "px";
    document.getElementById("songsList").style.maxHeight = (window.innerHeight*0.64) + "px";
    document.getElementById("songsList").style.paddingBottom = (window.innerHeight*0.09) + "px";
    var audio = document.getElementById('mysound');
    audio.play();    
  }
  
  render() {
    let sound = this.state.soundIndex;
    return (
      <div className="AudioModule">
        <div className="sound-page">
          <audio id="mysound" src={soundList[sound].path}></audio>
          <TopMaskerLayer />
          <AudioContent now={sound} adata={soundList.length} data={soundList[sound]}/>
          <PlayControlPanel now={sound} data={soundList}/>
          <AudioList data={soundList}/> 
        </div>    
      </div>
    );
  }
}

export default AudioModule;