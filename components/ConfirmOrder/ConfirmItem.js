import React from 'react';

class ConfirmItem extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <li id={data.id} className="ConfirmItem flex">
	      <div className="item-img">
          <img src={data.headurl} alt="商品图片"/>
        </div>
        <div className="item-info">
          <ul>
            <li className="item-name">{data.title}</li>
            <li className="item-detail">
              <span className="price-signal">￥</span>
              <span className="item-price">{data.price}</span>
              <span className="item-count">×{' '+data.num}</span>
            </li>
          </ul>
        </div>    
      </li>
    );
  }
}

export default ConfirmItem;