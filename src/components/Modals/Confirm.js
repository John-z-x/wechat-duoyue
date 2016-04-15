import React from 'react';

////import withstyles from '../../decorators/withStyles';
import styles from './Confirm.scss';

//@withStyles(styles)
class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.confirmResult = this.confirmResult.bind(this);
  }

  confirmResult(result) {
    this.props.confirmResult && this.props.confirmResult(result);
  }

  render() {
    return (
      <div className={"Confirm"}>
        <span className="confirm-content">{this.props.content}</span>
        <div className="confirm-text">
          <button className="confirm-no" onClick={ ()=> { return this.confirmResult(false); }}>取消</button>
          <button className="confirm-yes" onClick={ ()=> { return this.confirmResult(true); }}>好</button>
        </div>
      </div>
    );
  }
}

export default Confirm;