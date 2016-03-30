//页码
import React from 'react';

class EveryDayPageNum extends React.Component {
  render() {
    let pageDisplay = this.props.pageDisplay;
    let styleObj={
      display: pageDisplay ? 'block': 'none',
    }
    return(
      <div className="EveryDayPageNum"  style={styleObj}>
        <span className="sCurrentPage" id="sCurrentPage">{this.props.everyPage}</span>/<span className="sTotalPage" id="sTotalPage">{this.props.totalPage}</span>
      </div>
    )
  }
}

export default EveryDayPageNum;
