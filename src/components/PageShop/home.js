/*
 * Created on 2016-03-15 10:05
 *
 * By Susan Su
 */

'use strict';

import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as danpinActions from '../../actions/DanpinActions';

import Slider from '../UIComponent/Slider/Slider';
import SortNav from './SortNav';
import RecommendBookModule from './RecommendBookModule';
import SortBrowse from './SortBrowse';

import withStyles from '../../decorators/withStyles';
import styles from './PageShop.scss';

@withStyles(styles)
class ShopPageHome extends React.Component {

  componentWillMount() {
    const { fetchBookListData, fetchBooktype, fetchSliderList } = this.props.actions ;
    fetchBooktype();
    fetchBookListData('new');
    fetchBookListData('hot');
    fetchSliderList();
  }

  render() {
    let { sliderList, sortData, newbksData, hotbksData, sortBrowseData } = this.props;
    return (
        <div className="ShopPage">
          <Slider data={sliderList}/>
          <SortNav sortData={sortData}/>
          <RecommendBookModule data={newbksData}/>
          <RecommendBookModule data={hotbksData}/>
          <SortBrowse data={sortBrowseData}/>
        </div>
    );
  }
}

ShopPageHome.propTypes = {
  sortData: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {
      danpin: { bookType, bookList, sliderList }
      } = state;

  const data = {
    sortData: {
      title: '热门分类',
      data: bookType
    },
    newbksData: {
      title: "本周新书推荐",
      data: bookList.new,
      recmdText: '查看更多新书',
      href: "/danpin/newbooklist/0"
    },
    hotbksData: {
      title: "本周热点推荐",
      href: "/danpin/newbooklist/1",
      data: bookList.hot,
      recmdText: '查看更多推荐'
    },
    sortBrowseData: {
      title: "图书分类浏览",
      data: bookType
    },
    sliderList: sliderList
  };
  return {
    sortData: data.sortData,
    newbksData: data.newbksData,
    hotbksData: data.hotbksData,
    sortBrowseData: data.sortBrowseData,
    sliderList: data.sliderList
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(danpinActions, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopPageHome);