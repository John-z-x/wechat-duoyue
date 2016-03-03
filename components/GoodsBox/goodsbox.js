var React = require('react');
var ConfirmTop = require('../ConfirmTop/confirmtop.js');
var GoodsList = require('../GoodsList/goodslist.js');
var ConfirmFooter = require('../ConfirmFooter/confirmfooter.js');

var GoodsBox = React.createClass({
	render: function() {
		const { data, actions } = this.props
		return (
			<div className={"shopping-goods clearfix "}>
				<ConfirmTop ModifyCover={actions.ModifyCover} LoadData={actions.LoadData}/>
				<GoodsList data={data} actions={actions} />
				<ConfirmFooter data={data} />
			</div>
		)
	}
})

module.exports = GoodsBox;