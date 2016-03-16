import React from 'react';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';

class OrderList extends React.Component {
  render() {
  	return(
  		<div className="OrderList">
  			<CommonHeader>
  				<ReturnButton/>
  			</CommonHeader>
				{ this.props.children }
  		</div>
  	);
  }
};

export default OrderList;