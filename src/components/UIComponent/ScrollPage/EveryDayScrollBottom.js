//每天文章日期
import React from 'react';

class EveryDayScrollBottom extends React.Component {
  render() {
    let bottomDisplay = this.props.bottomDisplay;
    let styleObj={
      display: bottomDisplay ? 'block': 'none',
    }
    return(
      <div className="EveryDayScrollBottom"  style={ styleObj }>别滚动了，已经到底了。。。</div>
    )
  }
}

export default EveryDayScrollBottom;
