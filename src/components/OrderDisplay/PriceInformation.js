import React from 'react';

class PriceInformation extends React.Component {
	render() {
		let data = this.props.data;
		return(
			<div className="PriceInformation">
				<div className="price-box">
				  <div className="totalPrice">
				  	<span className="text-left">商品总额</span>
				  	<span className="text-right">￥{data.totalPrice}</span>
				  </div>
				  <div className="preferential">
				  	<span className="text-left">- 优惠</span>
				  	<span className="text-right">￥{data.preferential}</span>
				  </div>
				  <div className="postage">
				  	<span className="text-left">+ 运费</span>
				  	<span className="text-right"> ￥{data.postage}</span>
				  </div>
				  <div className="actual">实付款： <span className="actual-pay">{data.actualPay}</span></div>
				</div>
			</div>
		);
	}
}

export default PriceInformation;