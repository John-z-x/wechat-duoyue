import React from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ReturnButton.scss';

@withStyles(styles)
class ReturnButton extends React.Component{

  handleBack(){
    window.history.back();
  }

  render(){
    return (
      <span className="ReturnButton left"></span>
    );
  }
};

export default ReturnButton;