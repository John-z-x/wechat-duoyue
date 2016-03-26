//每天列表
import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Slider from '../SliderUIComponent/Slider';

import EverydayContent from './EverydayContent';
import EveryDayDates from './EveryDayDates';
import ScrollPage from './ScrollPage';
import EveryDayScrollBottom from './EveryDayScrollBottom';
import Utils from '../../utils/utils.js';

import withStyles from '../../decorators/withStyles';
import styles from './PageEveryDay.scss';

let everyData = [
  {"id":"1","src":"/imagesforarticle/6.png","title": "青春文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"三天前","peoplenum":"17"},
  {"id":"2","src":"/imagesforarticle/6.png","title": "职场进阶","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"四天前","peoplenum":"18"},
  {"id":"3","src":"/imagesforarticle/6.png","title": "经典文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"五天前","peoplenum":"19"},
  {"id":"4","src":"/imagesforarticle/6.png","title": "网络文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"六天前","peoplenum":"20"}
];

let EverydayData ={
  SliderList: [
    {"id": "1", "url": "/images/fifth.jpg", "title": ""},
    {"id": "2", "url": "/images/sixth.jpg", "title": ""},
  ]
};

@withStyles(styles)
class EverydayPageHome extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      everyData: everyData, //页面数据
      everyPage: 1, //当前页码
      totalPage: 3, //总页码
      prePage: 0, //上次页面滚动的高度
      arrPrePage: [0], //获取每页滚动高度
      bottomDisplay: false, //页面加载完底部显示判断
    }
    Utils.bindMethods(this, "onChildChanged");
  }

  //每页数据加载
  onChildChanged(){
    let everyData = this.state.everyData;
    let everyDayTotalItem = [];

    everyData.map( (item,index)=>
      everyDayTotalItem[index] = item
    );
    
    this.setState({
      everyData: everyDayTotalItem.concat(everyData[0]),
    });

    //获取保存每次滚动高度，以判断当前进入第几页
    let arrPrePage = this.state.arrPrePage;
    arrPrePage.push(document.documentElement.scrollHeight);
  }
  
  render() {
    let everyData = this.state.everyData;
    return(
        <div className="EverydayPage">
          <Slider data={EverydayData.SliderList}/>
          <div id="EverydayTopic">
          {
            everyData.map(function(everyday,index){
              return(
                  <Link to={`/everyday/${index}/display`} key={`everyday${index}`}>
                    <div className="everyday-box">
                      <div className="item-title">
                        <img src="/imagesforarticle/null.gif" className="juhe-icon-wenzhang"/>
                        · 文章 ·
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
            everyData={this.state.everyData} 
            everyPage={this.state.everyPage} 
            totalPage={this.state.totalPage} 
            prePage={this.state.prePage} 
            arrPrePage={this.state.arrPrePage} />
        </div>
    )
  }
}

export default EverydayPageHome;