//每天文章日期
import React from 'react';

class EveryDayDates extends React.Component {
  render() {
    var day = this.props.data.list.day;
    var peoplenum = this.props.data.list.peoplenum;
    return(
    <div className="dates">
      {day}  
      <img src="/imagesforarticle/null.gif" className="juhe-icon-liulan"/>
      {peoplenum}
    </div>
    );
  }
}

export default EveryDayDates;
