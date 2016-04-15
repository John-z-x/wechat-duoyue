/*
 * Created on 2016-03-15 10:05
 *
 * By Susan Su
 */

'use strict';

import React from 'react';

import Slider from '../UIComponent/Slider/Slider';
import SortNav from './SortNav';
import RecommendBookModule from './RecommendBookModule';
import SortBrowse from './SortBrowse';

////import withstyles from '../../decorators/withStyles';
import styles from './PageShop.scss';

let shopData = {

  sortData: {
    title: '热门分类',
    data: [
      {href: '/danpin/booklist/0', src: require('../../../assets/images/01.png'), title: '经典文学'},
      {href: '/danpin/booklist/1', src: require('../../../assets/images/02.png'), title: '青春文学'},
      {href: '/danpin/booklist/2',src: require('../../../assets/images/03.png'), title: '职场进阶'},
      {href: '/danpin/booklist/3',src: require('../../../assets/images/04.png'), title: '网络文学'}
    ],
  },
  newbksData: {
    title: "本周新书推荐",
    data: [
      {href: '/danpin/bookbuy/6227', src: 'http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591_cut_c.jpg', title: '他来了请闭眼', price: 31.50},
      {href: '/danpin/bookbuy/6227', src: require('../../../assets/images/6.jpg'), title: '那些年我们追过的女孩', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require('../../../assets/images/5.jpg'), title: '微微一笑', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require('../../../assets/images/6.jpg'), title: '那些年我们追过的女孩', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require('../../../assets/images/5.jpg'), title: '微微一笑倾人城', price: 17.34}
    ],
    recmdText: '查看更多新书',
    href: "/danpin/newbooklist/0"
  },
  hotbksData: {
    title: "本周热点推荐",
    href: "/danpin/newbooklist/1",
    data: [
      {href: '/danpin/bookbuy/6227', src: 'http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591_cut_c.jpg', title: '他来了请闭眼', price: 31.50},
      {href: '/danpin/bookbuy/6227', src: require('../../../assets/images/6.jpg'), title: '那些年我们追过的女孩', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require('../../../assets/images/5.jpg'), title: '微微一笑', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require('../../../assets/images/6.jpg'), title: '那些年我们追过的女孩', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require('../../../assets/images/5.jpg'), title: '微微一笑倾人城', price: 17.34}
    ],
    recmdText: '查看更多推荐',
  },
  sortBrowseData: {
    title: "图书分类浏览",
    data: [
      {href: '/danpin/booklist/1', src: require("../../../assets/images/6.jpg"), sortTitle: '经典文学', num: '5', bkTitle: '品书会让生活染上香气'},
      {href: '/danpin/booklist/2', src: require("../../../assets/images/6.jpg"), sortTitle: '青春文学', num: '5', bkTitle: '品书会让生活染上香气'},
      {href: '/danpin/booklist/3', src: require("../../../assets/images/6.jpg"), sortTitle: '职场进阶', num: '5', bkTitle: '品书会让生活染上香气'},
      {href: '/danpin/booklist/4', src: require("../../../assets/images/6.jpg"), sortTitle: '网络文学', num: '5', bkTitle: '品书会让生活染上香气'}

    ]
  },
  SliderList: [
    {"id": "1", href: '/danpin/bookbuy/6227',"url": require("../../../assets/images/first.jpg"), "title": ""},
    {"id": "2", href: '/danpin/bookbuy/6227',"url": require("../../../assets/images/second.jpg"), "title": ""},
    {"id": "3", href: '/danpin/bookbuy/6227',"url": require("../../../assets/images/third.jpg"), "title": ""}
  ]
}

////@withStyles(styles)
class ShopPageHome extends React.Component {

  render() {
    return (
        <div className="ShopPage">
          <Slider data={shopData.SliderList}/>
          <SortNav sortData={shopData.sortData}/>
          <RecommendBookModule data={shopData.newbksData}/>
          <RecommendBookModule data={shopData.hotbksData}/>
          <SortBrowse data={shopData.sortBrowseData}/>
        </div>
    );
  }
}

export default ShopPageHome;