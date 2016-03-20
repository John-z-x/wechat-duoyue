import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './Modal.scss';

@withStyles(styles)
class Modal extends React.Component {
  render() {
    let classname = this.props.className ? this.props.className : "";
    return (
      <div className="Modal">
        <div className={"modal-content "+ classname}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;