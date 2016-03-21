//页码
import React from 'react';

class EveryDayPageNum extends React.Component {
  render() {
    let pageDisplay = this.props.pageDisplay;
    let styleObj={
      display: pageDisplay ? 'block': 'none',
    }
    return(
      <div className="scrollPage"  style={styleObj}>
        <span className="sCurrentPage">{this.props.everyPage}</span>/<span className="sTotalPage">{this.props.totalPage}</span>
      </div>
    )
  }
}

export default EveryDayPageNum;
