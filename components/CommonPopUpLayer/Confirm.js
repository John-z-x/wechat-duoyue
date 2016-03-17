import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './Confirm.scss';

@withStyles(styles)
class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.confirmResult = this.confirmResult.bind(this);
  }

  confirmResult(result) {
    this.props.confirmAction && this.props.confirmAction(result);
  }

  render() {
    return (
      <div className="Confirm">
        <span className="content">{this.props.content}</span>
        <div className="text">
          <button className="no" onClick={ ()=> { return this.confirmResult(false); }}>取消</button>
          <button className="yes" onClick={ ()=> { return this.confirmResult(true); }}>好</button>
        </div>
      </div>
    );
  }
}

export default Confirm;