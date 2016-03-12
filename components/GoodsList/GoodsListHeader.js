import React from 'react';

class GoodsListHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <span className="click-goback left"></span>
        <span className="search-goods right"></span>
      </div>
    );
  }
}

export default GoodsListHeader;