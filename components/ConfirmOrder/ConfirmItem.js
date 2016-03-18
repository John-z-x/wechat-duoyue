import React from 'react';

class ConfirmItem extends React.Component {
  render() {
    return (
      <li id={this.props.data.id} className="ConfirmItem flex">
	      <div className="item-img">
          <img src={this.props.data.coverURL} alt="商品图片"/>
        </div>
        <div className="item-info">
          <ul>
            <li className="item-name">{this.props.data.title}</li>
            <li className="item-detail">
              <span className="price-signal">￥</span>
              <span className="item-price">{this.props.data.price}</span>
              <span className="item-count">×&nbsp;{this.props.data.count}</span>
            </li>
          </ul>
        </div>    
      </li>
    );
  }
}

export default ConfirmItem;