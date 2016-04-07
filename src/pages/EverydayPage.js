//每天列表
import React, {PropTypes} from 'react';

class EverydayPage extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
        <div className="EverydayPage">
          {this.props.children}
        </div>
    )
  }
}

export default EverydayPage;