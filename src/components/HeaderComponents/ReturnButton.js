import React from 'react';

class ReturnButton extends React.Component{

  handleBack(event){
    event.stopPropagation();
    window.history.back();
  }

  render(){
  	let text = !!this.props.text ? <em className="icon"></em> : null;
    return (
      <span className="ReturnButton left" onClick={this.handleBack}>{text}{this.props.text}</span>
    );
  }
};

export default ReturnButton;