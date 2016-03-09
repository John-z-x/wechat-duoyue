//每天文章日期
import React from 'react';

class EveryDayDates extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="dates">
        {data.day}
        <img src="/imagesforarticle/null.gif" className="juhe-icon-liulan"/>
        {data.peoplenum}
      </div>
    );
  }
}

export default EveryDayDates;
