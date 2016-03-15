import React from 'react';

import Cart from '../components/CartUIComponent/Cart';

class ShopPage extends React.Component {
	render() {
		return (
      <div className="ShopPage">
				<Cart />
				{this.props.children}
      </div>
		);
	}
}

export default ShopPage;