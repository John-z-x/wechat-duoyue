import React from 'react';

import Cart from '../components/CartUIComponent/Cart';

class ShopIndexPage extends React.Component {

	render() {

		return (
      <div className="ShopIndexPage">
				<Cart />
				{ this.props.children}
      </div>
		);
	}
}

export default ShopIndexPage;