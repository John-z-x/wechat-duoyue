import React from 'react';

class CommodityDetailOperate extends React.Component {
	render() {
	  return(
	  	<div className="CommodityDetailOperate">
			  <footer id="footer" className="footer clearfix">
			    <div className="addcart left" id="addcart">
			      加入购物车
			    </div>
			    <a href="">
		        <div className="settle left">
		          去结算
		        </div>
			    </a>
			  </footer>
      </div>
	  );
	}
}

export default CommodityDetailOperate;