import React from 'react';
import { Link } from 'react-router';

class OrderStatus extends React.Component {
	render() {
			let data = this.props.data;
			
		return(
			<div className="OrderStatus">
				<div className="status-box ">
					<div className="pay-status-number clearfix">
						<div className="left">
							<div className="pay-status">
								{data.status}
							</div>
							<div className="order-number">
								订单编号：{data.num}
							</div>
						</div>
						<Link to={`/pay/`} >
							<div className="pay-way right">
								{data.way}
							</div>
						</Link>
					</div>
					<div className="thank-point">感谢您在RAYS购物，欢迎您的再次光临！</div>
				</div>
			</div>
		);
	}
}

export default OrderStatus;