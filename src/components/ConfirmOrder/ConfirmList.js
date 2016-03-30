import React from 'react';
import ConfirmItem from './ConfirmItem';

class ConfirmList extends React.Component {
  render() {
    return (
      <ul className="ConfirmList">
        {
          this.props.data.map(function(ele, i) {
            return (
              <ConfirmItem data={ele} key={i} />
            );
          })
        }
      </ul>
    );
  }
}

export default ConfirmList;