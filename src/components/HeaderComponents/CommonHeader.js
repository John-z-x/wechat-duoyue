import React from 'react';

import withstyles from '../../decorators/withStyles';
import styles from './CommonHeader.scss';

@withstyles(styles)
class CommonHeader extends React.Component {
  render() {
    let { color} = this.props;
    return (
      <header className="CommonHeader">
        <div className={"header clearfix "+color}>
          {this.props.children}
        </div>
      </header>
    );
  }
}

export default CommonHeader;

