import React from 'react';

class OrderCommodityItem extends React.Component {
	render() {
		let data = this.props.data;
		return (
		  <li className=" OrderCommodityItem clearfix" key={data.id}>
				<div className="commodity-image">
				 <img src={data.src} alt="commodity-image" width="100%"/>
				</div>
				<div className="commodity-title">
				  {data.title}
				</div>
			</li>
		);
	}
}

export default OrderCommodityItem;