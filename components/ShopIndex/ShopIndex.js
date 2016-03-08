import React from 'react';
import PageHeader from '../ShopContent/PageHeader.js';
import CartBox from '../CartBox/CartBox.js';
import Slider from '../SliderUIComponent/Slider.js';
import Nav from './Nav.js';
import HotNews from './HotNews.js';
import Category from './Category.js';

var allData = {
	hdData: {
		title: "商城",
		data: [
						{clasName: 'book-store-menu', href: 'http://www.baidu.com'},
					 	{clasName: 'good-store-menu', href: 'http://www.facebook.com'}
				  ],
	},
	Navs: [
    
	],
	Categorys: [
    {
	    server: {
	    	title: "精品热卖",
	    	items: [
					{"id": "1","name": "加入色影无忌", "imgUrl": "http://file.duoyue.me/upload/product/20151208/2015_12_08_212851760.jpg", "price": 300.00},
					{"id": "2","name": "[翩翩]刺绣手镯｜大赢刺绣", "imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204655415.jpg", "price": 398.00},
					{"id": "3","name": "真亚麻小包", "imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_203701224.jpg", "price": 175.00},
					{"id": "4","name": "[lollipop] 项链|春风十里", "imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204854611.jpg", "price": 460.00}
	    	]
	    },
	    local: {
	    	categoryUrl: "http://www.duoyue.me/wechat/1018/3021/images/shangcheng/jingpingremai.png",
	    	goUrl: "http://www.duoyue.me/wechat/1018/3021/images/shangcheng/more.png"
	    }
    },
    {
	    server: {
	    	title: "重磅推荐",
	    	items: [
					{"id": "1","name": "加入色影无忌", "imgUrl": "http://file.duoyue.me/upload/product/20151208/2015_12_08_212851760.jpg", "price": 300.00},
					{"id": "2","name": "加入色影无忌", "imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204655415.jpg", "price": 398.00},
					{"id": "3","name": "加入色影无忌", "imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_203701224.jpg", "price": 175.00},
					{"id": "4","name": "加入色影无忌", "imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204854611.jpg", "price": 460.00}
	    	]
	    },
	    local: {
	    	categoryUrl: "http://www.duoyue.me/wechat/1018/3021/images/shangcheng/jingpingremai.png",
	    	goUrl: "http://www.duoyue.me/wechat/1018/3021/images/shangcheng/more.png"
	    }
    }
	],
	SliderList: [
			{"id": "1", "url": "images/first.jpg", "title": "长江出版社"},
			{"id": "2", "url": "images/second.jpg", "title": "哈尔冰出版社"},
			{"id": "3", "url": "images/third.jpg", "title": "北京出版社"},
			{"id": "4", "url": "images/third.jpg", "title": "北京出版社"}
		]
};
class ShopIndex extends React.Component {

	render() {
		let categoryCode = allData.Categorys.map( (item, i) =>
			<Category data={item} key={i}/>
		);
		return (
      <div className="">
				<PageHeader hdData={allData.hdData}/>
				<Slider data={allData.SliderList}/>
        <Nav url={"default"}/>
        <HotNews />
        <ul className="content">
        	{categoryCode}
        </ul>
				<CartBox />
      </div>
		);
	}
}

export default ShopIndex;