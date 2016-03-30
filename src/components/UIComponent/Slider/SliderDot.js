import React from 'react';

class SliderDot extends React.Component {
  render() {
    const { nums, index } = this.props;
    let dots = [];
    for( let i = 0; i < nums; i++ ) {
    	if(index === (i+1))
    	  dots.push("slider_dot_hover");
    	else 
    		dots.push("slider_dot_item");
    }
    let dotsCode = dots.map(function(item, index) {
      return (
        <span className ={item} key={index} ></span>
      );
    });
  	return (
      <div className = "slider_dot">
  			{dotsCode}
      </div>
    );
  }
} 

export default SliderDot;