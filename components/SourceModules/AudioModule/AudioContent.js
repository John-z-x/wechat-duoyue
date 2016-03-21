import React from 'react';


class AudioContent extends React.Component {
   constructor(props) {
    super(props);
    //this.nextSound = this.nextSound.bind(this);
    
   }
   componentDidMount() {
     console.log(this.props.data.isFav)
   }
   
  render() {
    return (
      <div className="AudioContent flex-container">
        <AudioTopMenu data={this.props.data.isFav}/>
        <div id="sliderPage">
        
          <div className="page-left" id="pageLeft">
            <div className="music-detail">
              <div className="detail-pic">
                <img src={this.props.data.picture} alt="专辑封面" id="detailCover" />
              </div> 
              <div className="music-desc">
                <div className="music-desc-con">
                  <div id="descTitle" className="desc-title">{this.props.data.title}</div>
                  <div id="descSinger" className="desc-singer">歌手：{this.props.data.singer}</div>
                </div>
              </div>
            </div>
            <div className="music-info " id="musicInfo">
              <p className="info-con" id="infoCon">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quas commodi autem, debitis sit dolor quos ab quaerat molestias excepturi delectus sunt vero quis sapiente corporis laboriosam adipisci maxime neque.</p>
              <div id="disDescBtn" className="dis-desc-btn"></div>
            </div> 
            <div className="clear"></div>
            // REC
          </div>
          
          <div className="page-center flex-item" id="pageCenter">
            <div id="ablumPic" className="album-pic">
              <img id="albumCover" className="album-cover" src={this.props.data.picture} />
            </div>
            <div className="flex-item">
              <div id="musicTitle" className="music-title">{this.props.data.title}</div>
              <div id="musicMenu" className="music-menu">
                <div id="favBtn" className="fav-btn">
                  <img id="isGood" src="/images/mobile/audio/musicFav.png" alt="点赞" />
                </div>
                <div id="favNum" className="fav-num">{this.props.data.fav}</div>
                <div className="list-controls">
                  <div id="listNum" className="list-num">{this.props.now+1}/{this.props.adata}</div>
                  <div id="listBtn" className="list-btn">
                    <img src="/images/mobile/audio/musicList.png" alt="列表" />
                  </div>
                </div>
              </div>
              <div className="music-progress">
                <div id="progress_bg" className="music-progress-box">
                  <div id="progress_buffer">
                    <div id="progress"></div>
                  </div>
                  <div className="progress-dot-bg"></div>
                  <div id="progress_dot"></div>
                </div>
                <div id="musicTime" className="music-time">{}</div>
              </div>
            </div>
          </div>
          
          <div className="page-right" id="pageRight">
            <div className="content" >
              <ul id="lrc_list">
                抱歉，暂无歌词
              </ul>
            </div>
          </div>
        </div>
        
        <div id="indicatorArea" className="indicator-area">
          <div className="indicator-box">
            <div id="page1" className="page-no"></div>
            <div id="page2" className="page-active"></div>
            <div id="page3" className="page-no"></div>
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

        <textarea id="lrc_content"></textarea> 
      </div>
    );
  }
}

export default AudioContent;