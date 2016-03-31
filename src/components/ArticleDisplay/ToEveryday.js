//每天
import React from 'react';
import { Link } from 'react-router';

class ToEveryday extends React.Component{
  render() {
    let color = this.props.color;
    let bgColor = color == "white" ? "white" : "#333";
    let fontColor = color == "white" ? "black" : "#ccc";
    let src = require("../../../assets/images/imagesforarticle/arrow_info.png");

    return(
      <Link to="/everyday/" className="ToEveryday clearfix" style={{backgroundColor: bgColor}}>
        <div className="everyday-word left" style={{color: fontColor}}>每天</div>
        <div className="icon right">
         <img src={src} alt=" "/>
        </div>
      </Link>
    );
  }
}
export default ToEveryday;