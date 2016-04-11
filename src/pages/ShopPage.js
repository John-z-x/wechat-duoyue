import React, { PropTypes} from 'react';

class ShopPage extends React.Component {
	static propTypes = {
		children: PropTypes.any
	};

	render() {
		return (
      <div className="ShopPage">
				{this.props.children}
      </div>
		);
	}
}

export default ShopPage;