import React , { PropTypes }from 'react';
import OrderCommodityItem from './OrderCommodityItem';

class OrderListContent extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }	
	render() {
		let data = this.props.data;
		console.log(data);
		let OrderContent;
		if(!data) {
			OrderContent = null;
		}else {
				{
					OrderContent =data.map((orderItem)=>{
 					return(
 						<div className="order-item" key={orderItem.orderId}>
 						  <div className="order-title clearfix">
 						  	<div className="order-status">{orderItem.status}</div>
 						  	<div className="order-number">订单号：{orderItem.orderNum}</div> 
 						  </div>
 						  <ul className="order-commodity">
 						  {
 						  	orderItem.orderList.map((item) =>{
 						  		return (
 						  			<OrderCommodityItem data={item} key={item.id}/>
 						  		);
 						  	})
 						  }
 						  </ul>
 						  <div className="order-information clearfix">
 						  	<div className="order-pay">实付款：<span className="pay-money">￥{orderItem.pay}</span></div>
 						  	<div className="order-date">{orderItem.date}</div>
 						  </div>
 						  <div className="order-delete">删除</div>
 						</div>
 					);
					})
				}
		}
		return(
			<div className="OrderBox">
				<div className="my-order">我的订单</div>
				<div className="OrderListContent">
					{OrderContent}
				</div>
			</div>
		);  
	}
}

export default OrderListContent;