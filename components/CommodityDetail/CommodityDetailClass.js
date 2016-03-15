import React from 'react';
import { Link } from 'react-router';

class CommodityDetailClass extends React.Component {
	render() {
	  return(
	  	<div className="CommodityDetailClass">
		      <Link to="/shop/goodslist/1">
				    <div className="bottom-pic">
				      <img src="/images/CommodityDetailImage/xinpinsudi.png" />
				    </div>
		     <div className="bottom-title">顽意&nbsp;&nbsp;<img width="20px" src="/images/CommodityDetailImage/more.png" /></div>
		     </Link>
      </div>
	  );
	}
}

export default CommodityDetailClass;