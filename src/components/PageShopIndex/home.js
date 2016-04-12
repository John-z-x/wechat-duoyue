/*
 * Created on 2016-03-15 11:45
 *
 * By Susan Su
 */

'use strict';
import React from 'react';

import Slider from '../UIComponent/Slider/Slider';
import Nav from './Nav';
import HotNews from './HotNews';
import Category from './Category';

import withStyles from '../../decorators/withStyles';
import styles from './PageShopIndex.scss';

let shopIndexData = {
  Navs: [

  ],
  Categorys: [
    {
      server: {
        "id":1,
        title: "精品热卖",
        items: [
          {"id": "1","name": "木质纹理，丝丝入心", "href": "/shop/goodsbuy/1", "imgUrl": "http://file.duoyue.me/upload/product/20160224/2016_02_24_203735155_b.jpg", "price": 52.80},
          {"id": "2","name": "[翩翩]刺绣手镯｜大赢刺绣", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204655415.jpg", "price": 398.00},
          {"id": "3","name": "真亚麻小包","href": "/shop/goodsbuy/1", "imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_203701224.jpg", "price": 175.00},
          {"id": "4","name": "[lollipop] 项链|春风十里", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204854611.jpg", "price": 460.00}
        ]
      },
      local: {
        categoryUrl: "http://www.duoyue.me/wechat/1018/3021/images/shangcheng/jingpingremai.png",
        goUrl: "http://www.duoyue.me/wechat/1018/3021/images/shangcheng/more.png"
      }
    },
    {
      server: {
        "id":2,
        title: "重磅推荐",
        items: [
          {"id": "1","name": "加入色影无忌", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151208/2015_12_08_212851760.jpg", "price": 300.00},
          {"id": "2","name": "加入色影无忌", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204655415.jpg", "price": 398.00},
          {"id": "3","name": "加入色影无忌", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_203701224.jpg", "price": 175.00},
          {"id": "4","name": "加入色影无忌", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204854611.jpg", "price": 460.00}
        ]
      },
      local: {
        categoryUrl: "http://www.duoyue.me/wechat/1018/3021/images/shangcheng/jingpingremai.png",
        goUrl: "http://www.duoyue.me/wechat/1018/3021/images/shangcheng/more.png"
      }
    }
  ],
  SliderList: [
    {"id": "1", "url": require('../../../assets/images/third.jpg'), "title": ""}
  ]
};

@withStyles(styles)
class ShopIndexPageHome extends React.Component {

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
      </div>
    );
  }
}

export default ShopIndexPageHome;