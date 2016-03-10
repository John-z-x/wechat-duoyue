import React from 'react';
import SocialAreaItem from './SocialAreaItem';

import withStyles from '../../decorators/withStyles';
import styles from './SocialArea.scss';

var dataArray =
[
	 {
		title: '足球体育场',
		intra: '足球已经越来越位人痴迷，足球场的设计也越来越美观，你喜欢哪种足球体育场呢？',
		bgPic: 'http://file.duoyue.me/upload/group/logo/20151126/2015_11_26_160118287_a.jpg',
		userPic: 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM4fiaXugrQIeniaHZ83d573aw82eoNiawGicXDx1KjTz6pMHRqWndFpUyAlWrbzS25x3GSQk1cMElibvUB70Wc5dzoibhdXNnbF64gow/132',
		words: '你好',
		time: '2015/12/17 12:04:29',
		href: ''
	},

	{
		title: '足球',
		intra: '足球已经越来越位人痴迷，你喜欢哪种足球体育场呢？',
		bgPic: 'http://file.duoyue.me/upload/group/logo/20151126/2015_11_26_160118287_a.jpg',
		userPic: 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM4fiaXugrQIeniaHZ83d573aw82eoNiawGicXDx1KjTz6pMHRqWndFpUyAlWrbzS25x3GSQk1cMElibvUB70Wc5dzoibhdXNnbF64gow/132',
		words: '你好吗',
		time: '2015/12/17 12:04:29',
		href: ''
	},

	 {
		title: '足球体场',
		intra: '足球已经越来越位人痴迷，足球场的设计也越来越美观，场呢？',
		bgPic: 'http://file.duoyue.me/upload/group/logo/20151126/2015_11_26_160438732_a.jpg',
		userPic: 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM4fiaXugrQIeniaHZ83d573aw82eoNiawGicXDx1KjTz6pMHRqWndFpUyAlWrbzS25x3GSQk1cMElibvUB70Wc5dzoibhdXNnbF64gow/132',
		words: '你好吧',
		time: '2015/12/17 12:04:29',
		href: ''
	}
]

@withStyles(styles)
class SocialArea extends React.Component {

	render() {
		let socialAreaItems = dataArray.map(function(items,id) {
			return (
					<SocialAreaItem data={items} key={id}/>
			)
		});
		return (
				<div className="SocialArea">
					{socialAreaItems}
				</div>
		)
	}
}
export default SocialArea;