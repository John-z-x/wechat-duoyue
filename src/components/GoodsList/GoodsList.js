import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './GoodsList.scss';

import GoodsListHeader from './GoodsListHeader';
import GoodsListTitle from './GoodsListTitle';
import CategoryItem from '../PageShop/CategoryItem';

const headerData = [
  {'headerId': 0, 'headerText': '搜索结果'},
  {'headerId': 1, 'headerText': '精品热卖'},
  {'headerId': 2, 'headerText': '重磅推荐'},
  {'headerId': 3, 'headerText': '新品速递'},
];

const GoodsListData = [
  {"id": "1","name": "加入色影无忌", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151208/2015_12_08_212851760.jpg", "price": 300.00},
  {"id": "2","name": "[翩翩]刺绣手镯｜大赢刺绣", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204655415.jpg", "price": 398.00},
  {"id": "3","name": "真亚麻小包", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_203701224.jpg", "price": 175.00},
  {"id": "4","name": "[lollipop] 项链|春风十里", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204854611.jpg", "price": 460.00}
]

@withStyles(styles)
class GoodsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: []
    }
  }
  render() {
    const { typeId } = this.props.params;
    let headerText;
    headerData.map((item)=>{if(item.headerId==typeId){headerText=item.headerText;}})
    return (
      <div className="GoodsList">
        <GoodsListHeader />
        <section className="goods-list-box clearfix">
          <GoodsListTitle data={headerText} />
          <ul>
            {
              GoodsListData.map( (item, index) => {
                return (
                  <CategoryItem data={item} key={`goods_${index}`} />
                );
              })
            }
          </ul>
        </section>
      </div>
    );
  }
}

export default GoodsList;