import React from 'react';
import { Link } from 'react-router';

class CommodityDetailOperate extends React.Component {
	render() {
	  return(
	  	<div className="CommodityDetailOperate">
			  <footer id="footer" className="footer clearfix">
			    <div className="addcart left" id="addcart">
			      加入购物车
			    </div>
			    <Link to={`/ConfirmOrder`}>
		        <div className="settle left">
		          去结算
		        </div>
			    </Link>
			  </footer>
      </div>
	  );
	}
}

export default CommodityDetailOperate;