//每天文章列表内容
import React from 'react';
import EveryDayDates from './EveryDayDates.js';

class ListContents extends React.Component {
  render() {
    return (
        <div>
          <div className="list-contents">
            <img src={this.props.list.src} style={{width:"100%"}}/>
          </div>
          <div className="contents-title">{this.props.list.title}</div>
          <div className="contents-desc">{this.props.list.desc}</div>
          <EveryDayDates data={this.props}/>
        </div>
    );
  }
}

export default ListContents;