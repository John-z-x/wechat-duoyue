//每天
import React from 'react';
import { Link } from 'react-router';

class ToEveryday extends React.Component{
  render() {
    return(
      <Link to="/everyday/" className="to-everyday clearfix">
        <div className="everyday-word left">每天</div>
        <div className="icon right">
         <img src="/imagesforarticle/arrow_info.png"  alt=" "/>
        </div>
      </Link>
    );
  }
}
export default ToEveryday;