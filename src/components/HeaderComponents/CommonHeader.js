import React from 'react';

import withstyles from '../../decorators/withStyles';
import styles from './CommonHeader.scss';

@withstyles(styles)
class CommonHeader extends React.Component {
  render() {
    let bgColor = this.props.bgColor || "white";
    return (
      <header className="CommonHeader">
        <div className="header clearfix" style={{backgroundColor: bgColor}}>
          {this.props.children}
        </div>
      </header>
    );
  }
}

export default CommonHeader;

