import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './ArticleFontStyleModify.scss';

// const color = {
//   white: {
//     color: '#333',
//     bgcolor: '#fbfbfb',
//   },
//   yellow: {
//     color: '#333',
//     bgcolor:  '#f6f0e1',
//   },
//   green: {
//     color: '#333',
//     bgcolor: '#c7edcc',
//   },
//   black: {
//     color: 'rgb(51, 51, 51)',
//     bgcolor: '#1e1e1e',
//   }
// }

@withStyles(styles)
class ArticleFontStyleModify extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      showFontFamily: true, //控制字体选择的显示
      color: "white" //控制组件的颜色
    }
  }

  onReturnClick(e) {
    this.setState({
      showFontFamily: !this.state.showFontFamily
    })
  }

  onTypeClick(e) {
    let target = e.target, classname = target.getAttribute("class");
    let type = target.getAttribute("type"), value = classname.substring(0, classname.indexOf(" "));
    this.setState({
      [type]: value
    });
    this.props.onTypeChangeClick(type, value);
  }

  render(){
    let { showFontFamily } = this.state, { color, fontFamily } = this.props.data,
        fontArray = [
          {"name": "FZSSJW", "title": "方正书宋简体"},
          {"name": "FZLTXHJW", "title": "方正兰亭纤黑"},
          {"name": "YaHei", "title": "默认字体"}
        ];
    let colorStyle = color == "black" ? "black" : "white", arrowClass = color == "black" ? "tu-black": "tu-white",
        borderColor = color == "black" ? "#333" : "#e5e5e5";
    let fontFamilyCode = fontArray.map( (item, index) => {
      let checked = item.name.indexOf(fontFamily) > -1 ? <span className="articleFontPic"/> : null;
      return (
        <div className="articleStyleFont" key={index}>
          {checked}
          <div className={item.name+" articleFontContent"} style={{borderBottom: `1px solid ${borderColor}`}} type="fontFamily" onClick={::this.onTypeClick}>{item.title}</div>
        </div>
      );
    });

    return (
      <div className="ArticleFontStyleModify">
        {
          showFontFamily ?
            (
              <div className="StyleBox">
                <div className={"checkstyle "+colorStyle} style={{border: `1px solid ${borderColor}`}}>
                  <div className={arrowClass}></div>
                  <div className="top" style={{borderBottom: `1px solid ${borderColor}`}}>
                    <span className="small "  style={{borderRight: `1px solid ${borderColor}`}} type = "size" onClick={::this.onTypeClick}>A-</span>
                    <span className="big " type="size" onClick={::this.onTypeClick}>A+</span>
                  </div>

                  <div className="middle"  style={{borderBottom: `1px solid ${borderColor}`}} onClick={this.showFontBox}>
                    <span className="middleFont">字体</span>
                    <span className="chooseFont" onClick={::this.onReturnClick}>选择字体></span>
                  </div>
                  <div className="bottom" >
                    <span className="white fontStyleItem whiteBox" type="color" onClick={::this.onTypeClick}>A</span>
                    <span className="yellow fontStyleItem" type="color" onClick={::this.onTypeClick}>A</span>
                    <span className="green fontStyleItem" type="color" onClick={::this.onTypeClick}>A</span>
                    <span className="black fontStyleItem " style={{border: `1px solid ${borderColor}`}} type="color" onClick={::this.onTypeClick}>A</span>
                  </div>
                </div>
              </div>
            )
            :
            (
              <div className="FontBox">
                <div className={"articleStyle "+colorStyle} style={{border: `1px solid ${borderColor}`}}>
                  <div className={arrowClass}></div>
                  <div className="articleStyleTitle" style={{borderBottom: `1px solid ${borderColor}`}}>
                    <a className="articleTitlePic"><span className="return" onClick={::this.onReturnClick}>返回</span></a>
                    <div className="articleTitleContent">字体</div>
                  </div>
                  {fontFamilyCode}
              </div>
                </div>
          )
        }
        </div>
    );
  }
}

export default ArticleFontStyleModify;