//每天文章日期
import React from 'react';

class EveryDayDates extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="EveryDayDates">
        {data.day}
        <span className="eye-icon"></span>
        {data.peoplenum}
      </div>
    );
  }
}

export default EveryDayDates;
