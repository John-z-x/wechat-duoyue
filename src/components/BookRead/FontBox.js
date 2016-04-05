import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './FontBox.scss';

@withStyles(styles)
class FontBox extends React.Component{
  hideFontBox(){
    document.getElementById('FontBox').style.display='none';
  }
  render(){
    return(  
        <div className="FontBox" id="FontBox" style={{display:'none'}}>
          <div className="articleStyle" id="fontstyle">
            <div className="tu"></div>
            <div className="articleStyleTitle">
              <a className="articleTitlePic"><img id="return" className="return" src="/images/ArticleImages/back.png" onClick={this.hideFontBox}/></a>
              <div className="articleTitleContent">字体</div>
            </div>
            <div className="articleStyleFont fontStyleItem">
              <img src="/images/ArticleImages/choose.png" className="articleFontPic" id="articleFontPic1" />
              <div className="articleFontContent"  id="fangzheng" styleType="font">方正书宋简体</div>
            </div>
            <div className="articleStyleFont fontStyleItem" >
              <img src="/images/ArticleImages/choose.png" className="articleFontPic" id="articleFontPic2"/>
              <div className="articleFontContent" id="system" styleType="font">系统字体</div>
            </div>
            <div className="articleStyleFont fontStyleItem">
              <img src="/images/ArticleImages/choose.png" className="articleFontPic" id="articleFontPic3"/>
              <div className="articleFontContent" id="siyuan" styleType="font">方正兰亭纤黑</div>
            </div>
          </div>
        </div>
        );  
      }
    }
  export default FontBox;    