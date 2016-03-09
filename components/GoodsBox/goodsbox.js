import React from 'react';
import ConfirmTop from './ConfirmTop';
import GoodsList from './GoodsList';
import ConfirmFooter from './ConfirmFooter';

class GoodsBox extends React.Component {
	render() {
		const { data, actions } = this.props;
		return (
			<div className={"shopping-goods clearfix "}>
				<ConfirmTop ModifyCover={actions.ModifyCover} LoadData={actions.LoadData}/>
				<GoodsList data={data} actions={actions} />
				<ConfirmFooter data={data} />
			</div>
		);
	}
}

export default GoodsBox;