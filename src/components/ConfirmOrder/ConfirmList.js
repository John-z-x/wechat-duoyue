import React from 'react';
import ConfirmItem from './ConfirmItem';

class ConfirmList extends React.Component {
  render() {
    return (
      <ul className="ConfirmList">
        {
          this.props.data.map((item, index)=> {
            return (
              <ConfirmItem data={item} key={index} />
            );
          })
        }
      </ul>
    );
  }
}

export default ConfirmList;