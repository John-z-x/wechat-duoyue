import React from 'react';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import BuyerInformation from './BuyerInformation';
import CommodityList from './CommodityList';
import OrderStatus from './OrderStatus';

import PriceInformation from './PriceInformation';


////import withstyles from '../../decorators/withStyles';
import styles from './OrderDisplay.scss';

const OrderDisplayData = {
	'orderStatus': {
		'status':'待支付',
		'num':'03157455',
		'way':'微信支付'
  },
	'buyerInformation': {
		'receiver':'ffffy',
		'buyerPhone':'13071277777',
		'buyerAddress':'湖北湖北湖北武汉武汉'
	},

	'productListing':[
		{'id':'1','src':'http://file.duoyue.me/upload/product/20151208/2015_12_08_212851760.jpg','title':'加入色影无忌','commodityNum':'10','commodityPrice':'300'},
		{'id':'2','src':'http://file.duoyue.me/upload/book/book/20151201/2015_12_01_110431890.jpg','title':'加入色影无忌','commodityNum':'5','commodityPrice':'400'},
		{'id':'3','src':'http://file.duoyue.me/upload/product/20151208/2015_12_08_212851760.jpg','title':'加入色影无忌','commodityNum':'1','commodityPrice':'500'},
		{'id':'4','src':'http://file.duoyue.me/upload/product/20151201/2015_12_01_204741121.jpg','title':'加入色影无忌','commodityNum':'1','commodityPrice':'600'}
	],
	'price':{
		'totalPrice':'1800',
		'preferential':'0',
		'postage':'0',
		'actualPay':'1800'
	}
}
//@withStyles(styles)
class OrderDisplay extends React.Component {
	render() {
		return(
			<div className="OrderDisplay">
				<CommonHeader>
					<ReturnButton/>
				</CommonHeader>
				<div className="display-title">订单详情</div>
				<OrderStatus data={OrderDisplayData.orderStatus}/>
				<BuyerInformation data={OrderDisplayData.buyerInformation}/>
				<CommodityList data={OrderDisplayData.productListing}/>
				<PriceInformation data={OrderDisplayData.price}/>
			</div>
		);
	}
}

export default OrderDisplay;
