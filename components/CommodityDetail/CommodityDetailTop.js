import React from 'react';
import ReactDOM from 'react-dom';

class CommodityDetailTop extends React.Component {
	render() {
	  return(
	  	<div className="CommodityDetailTop">
        <div className="back-search-header  clearfix">
	       	<div className="back">  
	       	   <img src="../../images/CommodityDetailImage/back_check.png" />            
	        </div>
        <a href="">
         <div className="search">
           <img  src="../../images/CommodityDetailImage/icon_Search.png" />
         </div>
        </a>
	      </div>  
      </div>
	  );
	}
}

export default CommodityDetailTop;