import React from 'react';
import ConfirmItem from './ConfirmItem';

class ConfirmList extends React.Component {
  render() {
    return (
      <ul className="ConfirmList">
        {
          this.props.data.map((item)=> {
            return (
              <ConfirmItem data={item} key={item.id} />
            );
          })
        }
      </ul>
    );
  }
}

export default ConfirmList;