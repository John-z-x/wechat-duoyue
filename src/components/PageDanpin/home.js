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
import { slideDataLoad } from '../../actions/SlideActions';

import Slider from '../UIComponent/Slider/Slider';
import SortNav from './SortNav';
import RecommendBookModule from './RecommendBookModule';
import SortBrowse from './SortBrowse';

import withStyles from '../../decorators/withStyles';
import styles from './PageDanpin.scss';

@withStyles(styles)
class DanpinPageHome extends React.Component {

  componentWillMount() {
    const {
        actions: {fetchBookListData, fetchBooktype},
        slideDataLoad
    } = this.props;
    fetchBooktype();
    fetchBookListData({"type": "new", "num": 6});
    fetchBookListData({"type": "hot", "num": 6});
    slideDataLoad("danpinSlide");
  }

  render() {
    let { sliderList, sortData, newbksData, hotbksData, sortBrowseData } = this.props;
    return (
        <div className="DanpinPageHome">
          <Slider data={sliderList}/>
          <SortNav sortData={sortData}/>
          <RecommendBookModule data={newbksData}/>
          <RecommendBookModule data={hotbksData}/>
          <SortBrowse data={sortBrowseData}/>
        </div>
    );
  }
}

DanpinPageHome.propTypes = {
  sliderList: PropTypes.array.isRequired,
  sortData: PropTypes.object,
  newbksData: PropTypes.object,
  hotbksData: PropTypes.object,
  sortBrowseData: PropTypes.object.isRequired
};


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
      href: "/danpin/newbooklist/new"
    },
    hotbksData: {
      title: "本周热点推荐",
      href: "/danpin/newbooklist/hot",
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
    actions: bindActionCreators(danpinActions, dispatch),
    slideDataLoad: bindActionCreators(slideDataLoad, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DanpinPageHome);