import React from 'react';

class CommodityDetailContent extends React.Component {
	render() {
	  return(
	  	<div className="CommodityDetailContent display">
 				<div className="content">
	 				<div className="goods-title">
	         茶席何味，品生活之味，不同主题、根据主人不同心情设计的茶席。
	   			</div>
			    <div className="goods-detail clearfix">
			      <div className="goods-price left">
			  	    ¥680
			      </div>
			      <div className="isdelivery left">
         		  快递:&nbsp;<span>"免运费"</span> 
        		</div>    
			 	  </div>
			 	</div>
		  		<div className="delivery">
			      <span className="delivery-title">包邮</span>
			      满10元包邮
		      </div>
        <div className="choose-style"></div>
			  <div className="introduce">
			    <div className="graphic">
			      图文详情
			    </div>
			    <div className="introduce-img">    
			      <div className="info_shangpin">
              黑胡桃孔签黑胡桃孔签黑胡桃孔签黑胡桃孔签黑胡桃孔签
			      </div>    
			    </div>
			  </div>
      
      </div>
	  );
	}
}

export default CommodityDetailContent;