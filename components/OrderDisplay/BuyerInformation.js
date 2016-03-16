import React from 'react';

class BuyerInformation extends React.Component {
	render() {
		let data = this.props.data;
		return(
			<div className="BuyerInformation">
				<div className="buyer-box">
					<span className="receiver">{data.receiver}</span>
					<span className="phone-number">{data.buyerPhone}</span>
					<div>{data.buyerAddress}</div>
				</div>
			</div>
		);
	}
}

export default BuyerInformation;