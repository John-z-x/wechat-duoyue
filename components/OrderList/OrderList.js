import React from 'react';
import OrderListContent from './OrderListContent';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';

import withStyles from '../../decorators/withStyles';
import styles from './OrderList.scss';

const orderData = [
{ 
	"orderId":"1",
	"status":"退货中",
	"orderNum":"01211151115",
	"pay":"82",
	"date":"2016/01/05 17:42:49",
	"orderList":[
		{"id":"1","src":"http://file.duoyue.me/upload/book/book/20151126/2015_11_26_165518879.jpg","title":"一救姻缘"},
		{"id":"2","src":"http://file.duoyue.me/upload/book/book/20151124/2015_11_24_142531972.jpg","title":"二救姻缘"},
		{"id":"3","src":"http://file.duoyue.me/upload/book/book/20151130/2015_11_30_200105765.jpg","title":"三救姻缘"},
		{"id":"4","src":"http://file.duoyue.me/upload/book/book/20151126/2015_11_26_165518879.jpg","title":"三救姻缘"}
  ]
},

{ 
	"orderId":"2",
	"status":"发货中",
	"orderNum":"012113113113",
	"pay":"82",
	"date":"2014/04/05 17:42:49",
	"orderList":[
		{"id":"1","src":"http://file.duoyue.me/upload/book/book/20151130/2015_11_30_200105765.jpg","title":"三救姻缘"},
		{"id":"2","src":"http://file.duoyue.me/upload/book/book/20151126/2015_11_26_165518879.jpg","title":"三救姻缘"},
		{"id":"3","src":"http://file.duoyue.me/upload/book/book/20151126/2015_11_26_165518879.jpg","title":"一救姻缘"},
		{"id":"4","src":"http://file.duoyue.me/upload/book/book/20151124/2015_11_24_142531972.jpg","title":"二救姻缘"}
		
  ]
}

]

@withStyles(styles)
class OrderList extends React.Component {
  render() {
  	return(
  		<div className="OrderList">
  			<CommonHeader>
  				<ReturnButton/>
  			</CommonHeader>
  			<OrderListContent data={orderData}/>
  		</div>
  	);
  }
};

export default OrderList;