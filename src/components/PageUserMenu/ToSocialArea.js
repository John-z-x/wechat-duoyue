import React from "react";
import {Link} from 'react-router';

class ToSocialArea extends React.Component {
  render() {
    return (
        <div className="ToSocialArea">
          <div className="menu-box">
            <Link to="/socialarea" className="link">
              <div className="menu-content clearfix">
                <div className="shequ"></div>
                <div className="menu-bottom-td">社区
                  <span className="menu-title">{'  '}志同道合/学习交友</span>
                </div>
                <div className="arrow_go"></div>
              </div>
            </Link>
          </div>
        </div>
    );
  }
}

export default ToSocialArea;