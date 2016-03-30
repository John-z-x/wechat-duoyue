import React from 'react';
import BookSourceBox from './BookSourceBox';
import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';

import withStyles from '../../decorators/withStyles';
import styles from './BookSourceList.scss';

var dataArray =
[
	{
		'id': '1',
		'href': 'www.baidu.com',
		'bgSrc': 'http://file.duoyue.me/upload/source/20160113/2016_01_13_171111087.png',
		'type': 'PDF',
		'typeSrc': require('../../../assets/images/PDF01.png'),
		'count': '1个',
		'boxTitle': '能量库：周杰伦歌词全集',
		'boxDesc': '他说他会唱到唱不动为止，十五年来的燃力爆棚，歌词也是美的动人心魄，一个大写的JAY。'
	},
	{
		'id': '2',
		'href': 'www.baidu.com',
		'bgSrc': 'http://file.duoyue.me/upload/source/20151128/2015_11_28_154003544.png',
		'type': '音频',
		'typeSrc': require('../../../assets/images/music_icon01.png'),
		'count': '1首',
		'boxTitle': '能量库：周杰伦歌词全集',
		'boxDesc': '他说他会唱到唱不动为止，十五年来的燃力爆棚，歌词也是美的动人心魄，一个大写的JAY。'
	},
	{
		'id': '3',
		'href': 'www.baidu.com',
		'bgSrc': 'http://file.duoyue.me/upload/source/20160127/2016_01_27_163000073.png',
		'type': '视频',
		'typeSrc': require('../../../assets//images/video01.png'),
		'count': '4个',
		'boxTitle': '能量库：周杰伦歌词全集',
		'boxDesc': '他说他会唱到唱不动为止，十五年来的燃力爆棚，歌词也是美的动人心魄，一个大写的JAY。'
	},
	{
		'id': '4',
		'href': 'www.baidu.com',
		'bgSrc': 'http://file.duoyue.me/upload/source/20160127/2016_01_27_163000073.png',
		'type': '图片',
		'typeSrc': require('../../../assets/images/image01.png'),
		'count': '10张',
		'boxTitle': '能量库：周杰伦歌词全集',
		'boxDesc': '他说他会唱到唱不动为止，十五年来的燃力爆棚，歌词也是美的动人心魄，一个大写的JAY。'
	}
];

@withStyles(styles)
class BookSourceList extends React.Component {
	render(){
		let SourceBoxes = dataArray.map((item) =>{
				return (
					<BookSourceBox data={item} key={item.id}/>
				);
			}
		);
		return (
						<div className="SourceList">
							<CommonHeader>
								<ReturnButton />
							</CommonHeader>
							<div className="title">配套资源</div>
							{SourceBoxes}
							<div className="bottom">
					      <hr className="line" />
					      <span className="bottom-text">已经加载到底了</span>
					      <hr className="line" />
					      <div className="clearfix"></div>
					    </div>
					  </div>  
					);
				}
			}

			export default BookSourceList;
