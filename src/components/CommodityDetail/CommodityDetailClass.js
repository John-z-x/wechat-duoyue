import React from 'react';
import { Link } from 'react-router';

class CommodityDetailClass extends React.Component {
	render() {
	  return(
	  	<div className="CommodityDetailClass">
        <Link to="/shop/goodslist/1">
          <div className="bottom-pic">
            <span className="bottom-list-btn"></span>
          </div>
		      <div className="bottom-title">
            <span>尖货</span>
            <span className="bottom-title-pic"></span>
          </div>
		    </Link>
      </div>
	  );
	}
}

export default CommodityDetailClass;