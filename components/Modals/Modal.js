import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './Modal.scss';

@withStyles(styles)
class Modal extends React.Component {
  render() {
    let classname = this.props.className ? this.props.className : "";
    let display = this.props.display ? "show" : "hide" ;
    return (
      <div className={"Modal "+ display}>
        <div className={"modal-content "+ classname}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;