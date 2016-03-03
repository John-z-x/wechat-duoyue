import React from 'react'

import CartBox from '../CartBox/cartbox.js'

import ShopContent from '../ShopContent/contentIndex.js'

class ShopPage extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
    //console.log(this.props);
		return (
      <div className="shop_page">
				<CartBox />
				<ShopContent />
      </div>
		)
	}
}

export default ShopPage