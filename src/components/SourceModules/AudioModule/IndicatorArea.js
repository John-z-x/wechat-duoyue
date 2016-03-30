import React from 'react';

class IndicatorArea extends React.Component {
  render() {
    let array = [], classname;
    for(let i = 0; i< 3; i++) {
      classname = this.props.index == i ? "page-active" : "page-no";
      array.push(<div className={classname} key={i}></div> );
    }

    return (
      <div id="indicatorArea" className="indicator-area">
        {array}
      </div>
    );
  }
}

export default IndicatorArea;