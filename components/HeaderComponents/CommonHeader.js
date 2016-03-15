import React from 'react';

import withstyles from '../../decorators/withStyles';
import styles from './CommonHeader.scss';

@withstyles(styles)
class CommonHeader extends React.Component {
  render() {
    return (
      <header className="CommonHeader clearfix">
        <div className="header">
          {this.props.children}
        </div>
      </header>
    );
  }
}

export default CommonHeader;

