//每天文章日期
import React from 'react';

class EveryDayDates extends React.Component {
  render() {
    const data = this.props.data;
    let src = require("../../../assets/images/imagesforarticle/null.gif");
    return (
      <div className="dates">
        {data.day}
        <img src={src} className="juhe-icon-liulan"/>
        {data.peoplenum}
      </div>
    );
  }
}

export default EveryDayDates;
