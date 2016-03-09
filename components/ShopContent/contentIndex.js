import React from 'react';
import PageHeader from './PageHeader.js';
import BannerArea from './BannerArea.js';
import SortNav from './SortNav.js';
import RecommendBookMoudle from './RecommendBookModule.js';
import SortBrowse from './SortBrowse.js';
import Slider from '../SliderUIComponent/Slider.js';

var allData = {
	hdData: {
		title: '单品',
		data: [
						{className: 'book-store-menu', href: '/danpin'},
					 	{className: 'good-store-menu', href: '/shop'}
				  ],
	},
	banData:  [
							{href: 1, imgSrc: '/images/1.jpg'},
					    {href: 2, imgSrc: '/images/2.png'},
					    {href: 3, imgSrc: '/images/6.jpg'}
					  ],
	sortData: {
		title: '热门分类',
		data: [
						{src: '/images/01.png', title: '经典文学'},
						{src: '/images/02.png', title: '青春文学'},
						{src: '/images/03.png', title: '职场进阶'},
						{src: '/images/04.png', title: '网络文学'}
					],
	},
	newbksData: {
		title: "本周新书推荐",
		data: [
						{href: '', src: '/images/6.jpg', title: '那些年我们追过的女孩', price: 17.34},
					  {href: '', src: '/images/5.jpg', title: '微微一笑', price: 17.34},
					  {href: '', src: '/images/6.jpg', title: '那些年我们追过的女孩', price: 17.34},
					  {href: '', src: '/images/5.jpg', title: '微微一笑倾人城', price: 17.34}
					],
		recmdText: '查看更多新书',
	},
	sortBrowseData: {
		title: "图书分类浏览",
		data: [
						{href: 'http://www.baidu.com', src: '/images/6.jpg', sortTitle: '经典文学', num: '5', bkTitle: '品书会让生活染上香气'},
						{href: 'http://www.baidu.com', src: '/images/6.jpg', sortTitle: '经典文学', num: '5', bkTitle: '品书会让生活染上香气'},
						{href: 'http://www.baidu.com', src: '/images/6.jpg', sortTitle: '经典文学', num: '5', bkTitle: '品书会让生活染上香气'},
						{href: 'http://www.baidu.com', src: '/images/6.jpg', sortTitle: '经典文学', num: '5', bkTitle: '品书会让生活染上香气'}

		]
	},
	SliderList: [
		{"id": "1", "url": "images/first.jpg", "title": "长江出版社"},
		{"id": "2", "url": "images/second.jpg", "title": "哈尔冰出版社"},
		{"id": "3", "url": "images/third.jpg", "title": "北京出版社"}
	]
}


class ContentIndex extends React.Component {
	render() {
		return (
			<div className="main-wrap">
				<Slider data={allData.SliderList}/>
				<SortNav sortData={allData.sortData}/>
				<RecommendBookMoudle data={allData.newbksData}/>
				<RecommendBookMoudle data={allData.newbksData}/>
				<SortBrowse data={allData.sortBrowseData}></SortBrowse>
			</div>
		);
	}
}


export default ContentIndex;

