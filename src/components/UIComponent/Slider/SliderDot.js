import React from 'react';

class SliderDot extends React.Component {
  render() {
    const { nums, index, classname } = this.props;
    let dotBoxClass = classname || "slider_dot";
    let dots = [];
    for( let i = 0; i < nums; i++ ) {
      if(index === (i+1))
        dots.push("slider_dot_hover");
      else
        dots.push("slider_dot_item");
    }
    let dotsCode = dots.map(function(item, index) {
      return (
          <span className ={"dot "+item} key={index} >.</span>
      );
    });
    return (
        <div className = {"SliderDot "+ dotBoxClass}>
          {dotsCode}
        </div>
    );
  }
}

export default SliderDot;