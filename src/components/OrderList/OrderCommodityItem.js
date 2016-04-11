import React from 'react';

class OrderCommodityItem extends React.Component {
	render() {
		let data = this.props.data;
		let hasPrice = this.props.hasPrice;
		let showPrice;

		if (hasPrice) {
					showPrice = <div className='show-price'>数量：{data.commodityNum}&nbsp;&nbsp;金额：{data.commodityPrice}</div>;
				}else {
					showPrice = null;
				}
		return (
		  <li className=" OrderCommodityItem clearfix" key={data.id}>
				<div className="commodity-image">
				 <img src={data.src} alt="订单商品图" title="订单商品图" width="100%"/>
				</div>
				<div className="commodity-title">
				  {data.title}
				  {showPrice}
				</div>
			</li>
		);
	}
}

export default OrderCommodityItem;