import React from 'react';

class ConfirmTop extends React.Component {

	render() {
		return (
			<div className="ConfirmTop confirm-top clearfix">
				<div className="confirm-title left" onClick={ ()=> this.props.loadData(1) }>购物车</div>
				<div className="cancel right" onClick={this.props.modifyCover}></div>
			</div>
		);
	}
}

export default ConfirmTop;