//每天
import React from 'react';

class ToEveryday extends React.Component{
  render() {
    return(
      <a  className="to-everyday clearfix">
        <div className="everyday-word left">每天</div>
        <div className="icon right">
         <img src="/imagesforarticle/arrow_info.png"  alt=" "/>
        </div>
      </a>
    );
  }
}
export default ToEveryday;