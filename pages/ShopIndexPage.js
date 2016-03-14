import React from 'react';

import Cart from '../components/CartUIComponent/Cart';
import Slider from '../components/SliderUIComponent/Slider';
import Nav from '../components/PageShopIndex/Nav';
import HotNews from '../components/PageShopIndex/HotNews';
import Category from '../components/PageShopIndex/Category';

import withStyles from '../decorators/withStyles';
import styles from '../components/PageShopIndex/PageShopIndex.scss';

let shopIndexData = {
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
			{"id": "1", "url": "/images/third.jpg", "title": "长江出版社"}
		]
};

@withStyles(styles)
class ShopIndexPage extends React.Component {

	render() {
		let categoryCode = shopIndexData.Categorys.map( (item, i) =>
			<Category data={item} key={i}/>
		);
		return (
      <div className="ShopIndexPage">
				<Slider data={shopIndexData.SliderList}/>
        <Nav url={"default"}/>
        <HotNews />
        <ul className="content">
        	{categoryCode}
        </ul>
				<Cart />
      </div>
		);
	}
}

export default ShopIndexPage;