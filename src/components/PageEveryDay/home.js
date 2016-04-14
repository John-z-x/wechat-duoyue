//每天列表
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Slider from '../UIComponent/Slider/Slider';

import EverydayContent from './EverydayContent';
import EveryDayDates from './EveryDayDates';
import ScrollPage from '../UIComponent/ScrollPage/ScrollPage';

import * as everydayActions from '../../actions/EverydayActions';
import * as slideActions from '../../actions/SlideActions';

import Utils from '../../utils/utils.js';

import withStyles from '../../decorators/withStyles';
import styles from './PageEveryDay.scss';

@withStyles(styles)
class EverydayPageHome extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      everyData: this.props.list, //页面数据
      everyPage: 1, //当前页码 
      totalPage: 5, //总页码 
      arrPrePage: [0], //获取每页滚动高度
      bottomDisplay: false, //页面加载完底部显示判断
    }
    this.loading = false;
    Utils.bindMethods(this, "onChildChanged");
  }

  componentWillUnmount(){
    this.props.everydayActions.everydayListRemove();
  }
  
  componentDidMount() {
    this.props.slideActions.slideDataLoad("everydaySlide");
    this.props.everydayActions.everydayListLoad();
  }

  //每页数据加载
  onChildChanged(){
    let everyData = this.props.list;
    let everyPage = this.state.everyPage;
    let totalPage = this.state.totalPage;
    let arrPrePage = this.state.arrPrePage;

    if (this.loading) return;
    this.loading = true;
    let _self = this;
    setTimeout(function() {

      _self.loading = false;
      if(everyPage > totalPage){
        _self.setState({
          bottomDisplay: true,
        })
        return; 
      }
      _self.props.everydayActions.everydayListLoadMore(everyData[0]);
      arrPrePage.push(document.documentElement.scrollHeight);

    }, 500)

  }

  render() {
    const { list, slideData } = this.props;
    return(
        <div className="EverydayPageHome">
          <Slider data={slideData}/>
          <div id="EverydayTopic">
          {
            list.map((everyday,index) => {
              let src ="";
              return(
                  <Link to={`/everyday/${index}/display`} key={`everyday${index}`}>
                    <div className="everyday-box">
                      <div className="item-title">
                        <img src={src} className="juhe-icon-wenzhang"/>
                        <span className="article-icon"></span>
                        {index}· 文章 ·
                      </div>
                      <EverydayContent data={everyday}/>
                      <EveryDayDates data={everyday}/>
                    </div>
                  </Link>
              );
            })
          }
          </div>
          <ScrollPage callbackParent={this.onChildChanged}
            everyData={this.props.list}
            everyPage={this.state.everyPage}
            totalPage={this.state.totalPage}
            arrPrePage={this.state.arrPrePage} />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.everyday,
    slideData: state.slide
  };
}

function mapDispatchToProps(dispatch) {
  return {
    everydayActions: bindActionCreators(everydayActions, dispatch),
    slideActions: bindActionCreators(slideActions, dispatch)
  };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EverydayPageHome);

EverydayPageHome.propTypes={
  list:PropTypes.array.isRequired,
  slideData:PropTypes.array.isRequired
}
