import React from 'react';
import PageHeader from '../ShopContent/PageHeader.js';
import CartBox from '../CartBox/CartBox.js';
import Slider from '../SliderUIComponent/Slider.js';
import Nav from './Nav.js';


var allData = {
	hdData: {
		title: "商城",
		data: [
						{clasName: 'book-store-menu', href: 'http://www.baidu.com'},
					 	{clasName: 'good-store-menu', href: 'http://www.facebook.com'}
				  ],
	},
	Navs: [
    {"title": "尖货", "imgUrl": ""}
	],

};

class ShopIndex extends React.Component {
	render() {
		return (
      <div className="">
				<PageHeader hdData={allData.hdData}/>
				<Slider />
        <Nav />
				<CartBox />
      </div>
		);
	}
}

export default ShopIndex;