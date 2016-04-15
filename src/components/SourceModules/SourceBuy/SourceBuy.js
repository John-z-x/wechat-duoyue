import React from 'react';
import SourceBuyDescription from './SourceBuyDescription';
import SourceBuyButton from './SourceBuyButton';
import CommonHeader from '../../HeaderComponents/CommonHeader';
import ReturnButton from '../../HeaderComponents/ReturnButton';


////import withstyles from '../../../decorators/withStyles';
import styles from './SourceBuy.scss';

const sourceBuyData = {
	'src':'http://file.duoyue.me/upload/source/20151229/2015_12_29_182842252_b.jpg',
	'title':'【每周好书推荐】莎士比亚全集',
	'price':"48.00",
	'des':'梁实秋1930年开始着手翻译莎士比亚的戏剧，从1936年商务印书馆首次出版他译的莎士比亚戏剧8种，至1967年最终完成《莎士比亚全集》的翻译并出版，共历时37年。梁实秋是中国独自一人翻译《莎士比亚全集》的第一人。',

}

//@withStyles(styles)
class SourceBuy extends React.Component {
 render() {
 	return(
 		<div className="SourceBuy">
 			<CommonHeader>
 				<ReturnButton/>
 			</CommonHeader>
 			<SourceBuyDescription data={sourceBuyData}/>
 			<SourceBuyButton data={sourceBuyData.price}/>
 		</div>
 	);
 }
} 

export default SourceBuy;
