var React = require('react');
var $ = require('jquery')

var ShowCart = React.createClass({
  ModifyCover: function() {
    let ModifyCover = this.props.ModifyCover
    //$("body").css("overflow", "hidden")
    ModifyCover();
  },
	render: function() {
		const { data, ModifyCover} = this.props
		let num = 0 ; 
	  data.map( item => {
      num += parseInt(item.num, 10)
	  })
		if (num > 0) {
			return (
				<div className="shopping-cart" onClick={this.ModifyCover}>
					<div className="goods-num">{num}</div>
				</div>
			)
		}else {
			return null
		}
	},
})

module.exports = ShowCart