var React = require('react');
var GoodsItem = require('../GoodsItem/goodsitem.js');

var GoodsList = React.createClass({
	
	render: function() {
		const { data, actions } = this.props
    //console.log(data);
		let itemNodes = data.map(function(items) {
				return (
					<GoodsItem data={items}  actions={actions} id={items.id} key={items.id}/>
				)
		})
		if( data.length < 1) {
			itemNodes.push(<li className="nullBox" key="nullBox">您的购物车已经空了</li>)
		}
		return (
			<ul className="cart-goods" >
				{itemNodes}
			</ul>
		);
	},
})

module.exports = GoodsList;