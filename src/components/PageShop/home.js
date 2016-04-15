/*
 * Created on 2016-03-15 11:45
 *
 * By Susan Su
 */

'use strict';
import React, { PropTypes }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Slider from '../UIComponent/Slider/Slider';
import Nav from './Nav';
import HotNews from './HotNews';
import Category from './Category';

import { slideDataLoad } from '../../actions/SlideActions';
import * as shopActions from '../../actions/ShopActions';

import withStyles from '../../decorators/withStyles';
import styles from './PageShopHome.scss';

@withStyles(styles)
class PageShopHome extends React.Component {

  componentDidMount() {
    const {
      actions: {
        fetchProductType, 
        fetchHotNews, 
        fetchProductList
      },
      slideDataLoad
    } = this.props;

    fetchProductType();
    fetchHotNews();
    fetchProductList("hot", 4);
    fetchProductList("recommend", 4);
    slideDataLoad("shopSlide");
  }

  render() {
    const { slideListData, productTypeData, hotNewsData, hotProductData, recommendProductData } = this.props;

    return (
      <div className="PageShopHome">
        <Slider data={ slideListData }/>
        <Nav data={ productTypeData }/>
        <HotNews data={ hotNewsData }/>
        <ul className="content">
          <Category data={ hotProductData }/>
          <Category data={ recommendProductData }/>
        </ul>
      </div>
    );
  }
}

PageShopHome.PropTypes = {
  shop: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {
    shop: { productList, slideList, productType, hotNews } 
  } = state;
  const data = {
    hotProduct: {
      "title": "精品热卖",
      "data": productList.hot,
      "href": "shop/goodslist/hot"
    },
    recommendProduct: {
      "title": "重磅推荐",
      "data": productList.recommend,
      "href": "shop/goodslist/recommend"
    },
  }

  return {
    slideListData: slideList,
    productTypeData: productType,
    hotNewsData: hotNews,
    hotProductData: data.hotProduct,
    recommendProductData: data.recommendProduct
  };
}

function mapDispatchToProps(dispatch) {
  return {
    slideDataLoad: bindActionCreators(slideDataLoad, dispatch),
    actions: bindActionCreators(shopActions, dispatch)
  };
}

PageShopHome =  connect(
  mapStateToProps,
  mapDispatchToProps
)(PageShopHome);

export default PageShopHome;
