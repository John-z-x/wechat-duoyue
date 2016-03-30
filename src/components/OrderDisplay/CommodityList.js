import React from 'react';
import OrderCommodityItem from "../OrderList/OrderCommodityItem"

class CommodityList extends React.Component {
	render() {
		return(
			<div className="CommodityList">
			  <div className="list-box">
			  	<div className="title">商品清单</div>
					<ul className="order-commodity">
						{
							this.props.data.map((item) =>{
								return(
									<OrderCommodityItem  data={item} hasPrice={true} key={item.id}/>
								);
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default CommodityList;