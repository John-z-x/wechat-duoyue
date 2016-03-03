var React = require('react');

var GoodsNumModify = React.createClass({

	modifyNum: function(event) {
	 	let type = event.target.innerHTML	
	 	let id = this.props.id
	 	//console.log(this.ref);
	 	let num = parseInt(this.refs.num.innerHTML, 10)
		//提交后台并返回成功后继续。。
		if (type.indexOf("+") > -1) {
      this.props.ModifyNum(id, num + 1)
		}else if (num > 1) {
			this.props.ModifyNum(id, num - 1)
	 	}
	},
	render: function() {
		const { num, ModifyNum }  = this.props
		//console.log(this.props);
		return (
			<div className="classify-price right">
				<a className="goods-classify left change-item-number" onClick={this.modifyNum}> - </a>
				<a className="goods-classify left" ref="num">{num}</a>
				<a className="goods-classify left change-item-number" onClick={this.modifyNum}> + </a> 
			</div>
		)
	}
})

module.exports = GoodsNumModify;