import React from 'react';

class GoodsListTitle extends React.Component {
  render() {
    let title=this.props.data;
    return (
      <div className="goods-list-title">
        <span className="title-image"></span>
        <span className="title-name">{title}:</span>
      </div>
    );
  }
}


export default GoodsListTitle;