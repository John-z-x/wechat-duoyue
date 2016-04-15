import React from 'react';

////import withstyles from '../../decorators/withStyles';
import styles from './Modal.scss';

//@withStyles(styles)
class Modal extends React.Component {
  render() {
    let classname = this.props.className ? this.props.className : "";
    return (
      <div className="Modal" onClick={ () => this.props.onModalClick && this.props.onModalClick()}>
        <div className={ classname}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;