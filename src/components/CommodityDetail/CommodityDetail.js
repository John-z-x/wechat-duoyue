import React from 'react';
import ReactDOM from 'react-dom';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton  from '../HeaderComponents/ReturnButton';
import SearchButton from '../HeaderComponents/SearchButton';

import CommodityDetailIntroduce from './CommodityDetailIntroduce';
import CommodityDetailClass from './CommodityDetailClass';
import CommodityDetailOperate from './CommodityDetailOperate';
import Slider from '../UIComponent/Slider/Slider';
import CommodityDetailCollection from './CommodityDetailCollection';

import withStyles from '../../decorators/withStyles';
import styles from './CommodityDetail.scss';


let commodityDetailData = {
	SliderList: [
			{"id": "1", "url": "http://file.duoyue.me/upload/product/20160224/2016_02_24_203735155_b.jpg", "title": ""},
			{"id": "2", "url": "http://file.duoyue.me/upload/product/20160224/2016_02_24_203731608_b.jpg", "title": ""}
		],

	collectionData: {
		titleText: '相关推荐',
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
					<CommonHeader>
						<ReturnButton />
						<SearchButton />
					</CommonHeader>
				 <div className="CommodityDetailContent">
           <Slider data={commodityDetailData.SliderList}/>
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
				 </div>
          <CommodityDetailIntroduce/>
          <CommodityDetailCollection data={commodityDetailData.collectionData}/>
          <CommodityDetailClass/>
          <CommodityDetailOperate/>
        </div>
	  );
	}
}

export default CommodityDetail;