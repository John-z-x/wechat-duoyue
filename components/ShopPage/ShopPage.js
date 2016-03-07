import React from 'react';
import CartBox from '../CartBox/CartBox.js';
import ShopContent from '../ShopContent/ContentIndex.js';

class ShopPage extends React.Component {
	render() {
		return (
      <div className="shop_page">
				<CartBox />
				<ShopContent />
      </div>
		);
	}
}

export default ShopPage;