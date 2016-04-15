import React, { PropTypes} from 'react';

class ShopIndexPage extends React.Component {

	static propTypes = {
		children: PropTypes.any
	};

	render() {
		return (
      <div className="ShopIndexPage">
				{ this.props.children}
      </div>
		);
	}
}

export default ShopIndexPage;