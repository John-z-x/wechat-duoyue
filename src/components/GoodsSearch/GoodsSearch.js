import React from 'react';

////import withstyles from '../../decorators/withStyles';
import styles from './GoodsSearch.scss';

import GoodsListHeader from '../GoodsList/GoodsListHeader';
import GoodsListTitle from '../GoodsList/GoodsListTitle';
import CategoryItem from '../PageShopIndex/CategoryItem';
import GoodsSearchInput from './GoodsSearchInput';


const GoodsListData = [
  {"id": "1","name": "加入色影无忌", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151208/2015_12_08_212851760.jpg", "price": 300.00},
  {"id": "2","name": "[翩翩]刺绣手镯｜大赢刺绣", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204655415.jpg", "price": 398.00},
  {"id": "3","name": "真亚麻小包", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_203701224.jpg", "price": 175.00},
  {"id": "4","name": "[lollipop] 项链|春风十里", "href": "/shop/goodsbuy/1","imgUrl": "http://file.duoyue.me/upload/product/20151201/2015_12_01_204854611.jpg", "price": 460.00}
]

//@withStyles(styles)
class GoodsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: []
    }
  }

  render() {
    return (      
      <div className="GoodsList">
        <GoodsListHeader />
        <GoodsSearchInput />
        <section className="goods-list-box clearfix">
          <GoodsListTitle data={"重磅推荐"} />
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

export default GoodsSearch;