import React from 'react';

class ReturnButton extends React.Component{

  handleBack(){
    window.history.back();
  }

  render(){
    return (
      <span className="ReturnButton left" onClick={this.handleBack}></span>
    );
  }
};

export default ReturnButton;