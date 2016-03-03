var React = require('react');
var GoodsNumModify = require('../GoodsNumModify/goodsnummodify.js');

var GoodsItem = React.createClass({
	deleteItem: function(event) {
		//后台返回成功后继续。。
    this.props.actions.DeleteItem(this.props.data.id);
	},
	render: function() {
		const { data, actions } = this.props
		//console.log(this.props.actions);
		return (
			<li className="goods-item flex">
				<div className="goods-img left">
					<img src={data.headurl} alt="图片" width="70" height="70"/>
				</div>
				<div className="goods-detail left">
					<div className="goods-title">{data.title}</div>
					<div className="goods-size">{data.size}</div>
					<div className="goods-price clearfix">
						<div className="oneprice left">¥{data.price}</div>
						<div className="cancel-goods right" onClick={this.deleteItem}>删除</div>
						<GoodsNumModify num={data.num} id={data.id} ModifyNum={actions.ModifyNum}/>
					</div>
				</div>
			</li>
		)
	}
})

module.exports = GoodsItem;