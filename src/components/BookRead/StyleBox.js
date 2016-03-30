import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './StyleBox.scss';

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
class StyleBox extends React.Component{
  showFontBox(){
    document.getElementById('FontBox').style.display='block';
  }

  getStyle(e){
    let type = e.target.getAttribute("styleType"),
        changeStyle = this.props.changeStyle;
    changeStyle(type);
  }

  render(){
    return (
          <div className="StyleBox" id="StyleBox" style={{display: "none"}}>  
            <div className="checkstyle" id="articleStyle" >
              <div className="tu"></div>
              <div className="top">
                  <span className="small" id = "small" styleType="size">A-</span>
                  <span className="big" id="big" styleType="size">A+</span>
              </div>
              <div className="middle" id="check_middle" onClick={this.showFontBox}>
                  <span className="middleFont">字体</span>
                  <span className="chooseFont" id="chooseFont">选择字体></span>
              </div>
              <div className="bottom" >
                  <span className="fontStyleItem white" id="white" type="white" styleType="color">A</span>
                  <span className="fontStyleItem yellow" id="yellow" type="yellow" styleType="color">A</span>
                  <span className="fontStyleItem green" id="green" type="green" styleType="color">A</span>
                  <span className="fontStyleItem black" id="black" type="black" styleType="color">A</span>
              </div>
            </div>
          </div>
        );  
      }
    }
  export default StyleBox;