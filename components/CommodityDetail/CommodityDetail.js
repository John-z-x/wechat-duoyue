import React from 'react';
import ReactDOM from 'react-dom';
import CommodityDetailTop from './CommodityDetailTop';
import CommodityDetailContent from './CommodityDetailContent';
import CommodityDetailClass from './CommodityDetailClass';
import CommodityDetailOperate from './CommodityDetailOperate';
import Slider from '../../components/SliderUIComponent/Slider';
import CommodityDetailCollection from './CommodityDetailCollection';

import withStyles from '../../decorators/withStyles';
import styles from './CommodityDetail.scss';


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
			{"id": "1", "url": "images/third.jpg", "title": "长江出版社"}
		],

	collectionData: {
	titleText: '视频选集',
	titleNum: '125656',
	videoList: [
		{id:1,Src: 'http://file.duoyue.me/upload/product/20151201/2015_12_01_210602073.jpg',Poster: 'http://file.duoyue.me/upload/product/20151208/2015_12_08_225159102.jpg',Title: '当代昆曲 ', Desc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制'},
		{id:2,Src: 'http://file.duoyue.me/upload/product/20151208/2015_12_08_225159102.jpg',Poster: 'http://file.duoyue.me/upload/product/20151201/2015_12_01_211242515.jpg',Title: '想要传送一封简讯给你', Desc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制'},
		{id:3,Src: 'http://file.duoyue.me/upload/product/20151201/2015_12_01_210602073.jpg',Poster: 'http://file.duoyue.me/upload/product/20151208/2015_12_08_225159102.jpg',Title: '岳云鹏郭麒麟争德云一哥', Desc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制'},
		{id:4,Src: 'http://file.duoyue.me/upload/product/20151201/2015_12_01_211242515.jpg',Poster: 'http://file.duoyue.me/upload/product/20151201/2015_12_01_211242515.jpg',Title: '岳云鹏郭麒麟争德云一哥 ', Desc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制'},
		{id:5,Src: 'http://file.duoyue.me/upload/product/20151201/2015_12_01_210602073.jpg',Poster: 'http://file.duoyue.me/upload/product/20151201/2015_12_01_211242515.jpg',Title: '岳云鹏郭麒麟争德云一哥 亲儿子狂虐不肖徒弟', Desc: '共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制共同打造梦幻巨制'}
	]
},
};

@withStyles(styles)
class CommodityDetail extends React.Component {
	render() {
	  return(
	  	<div className="CommodityDetail">
          <CommodityDetailTop/>
          <Slider data={shopIndexData.SliderList}/>
          <CommodityDetailContent/>
          <CommodityDetailCollection data={shopIndexData.collectionData}/>
          <CommodityDetailClass/>
          <CommodityDetailOperate/>
        </div>
	  );
	}
}

export default CommodityDetail;