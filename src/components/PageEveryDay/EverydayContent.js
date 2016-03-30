//每天文章列表内容
import React from 'react';
import EveryDayDates from './EveryDayDates';

class EverydayContent extends React.Component {
  render() {
    const data = this.props.data;
    return (
        <div>
          <div className="list-contents">
            <img src={data.src} width="100%"/>
          </div>
          <div className="contents-title">{data.title}</div>
          <div className="contents-desc">{data.desc}</div>
        </div>
    );
  }
}

export default EverydayContent;