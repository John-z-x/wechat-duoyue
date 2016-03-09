import React from 'react';

class ConfirmTop extends React.Component {

	render() {
		return (
			<div className="confirm-top clearfix">
				<div className="confirm-title left" onClick={ ()=> this.props.LoadData(1) }>购物车</div>
				<div className="cancel right" onClick={this.props.ModifyCover}></div>
			</div>
		);
	}
}

export default ConfirmTop;