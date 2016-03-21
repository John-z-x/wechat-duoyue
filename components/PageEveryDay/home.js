//每天列表
import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Slider from '../SliderUIComponent/Slider';

import EverydayContent from './EverydayContent';
import EveryDayDates from './EveryDayDates';
import EveryDayPageNum from './EveryDayPageNum';
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
      everyData: everyData,
      pageDisplay: false,
      bottomDisplay: false,
      prePage: 0,
      arrPrePage: [0],
      everyPage: 0,
      totalPage: 3,
    }

    Utils.bindMethods(this, "onScrollPage", "isScrollUpDown", "onScrollData", "onScrollListAdd" );
  }

  onScrollPage(){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>50){
      this.setState({
        pageDisplay: true,
      })
    }else{
      this.setState({
        pageDisplay: false,
      })
    }
  }

  isScrollUpDown(isUpDown,arrPrePage){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowH = document.documentElement.clientHeight;
    let everyPage = this.state.everyPage;
    let arrPrePageNum = arrPrePage.length;

    if (isUpDown === 'down') {
      for (let i = 0; i < arrPrePageNum; i++) {
        if (scrollTop + windowH  < arrPrePage[i]) {
          this.setState({
            everyPage:i,
          });
          break;
        }
      }
    } else {
      for (let i = 0; i < arrPrePageNum; i++) {
        if (scrollTop < arrPrePage[i]) {
          this.setState({
            everyPage:i,
          });
          break;
        }
      }
    }
  }

  onScrollData(){
    let everyData = this.state.everyData;
    let everyDayTotalItem = [];
    let totalPage = this.state.totalPage;
    let everyPage = this.state.everyPage;

    everyData.map( (item,index)=>
      everyDayTotalItem[index] = item
    );
    this.setState({
      everyData: everyDayTotalItem.concat(everyData[0]),
    });

    if(everyPage >= totalPage){
      this.setState({
        everyData: everyData,
        everyPage: totalPage,
        bottomDisplay: true,
      });
    }

    let arrPrePage = this.state.arrPrePage;
    arrPrePage.push(document.documentElement.scrollHeight);
  }

  onScrollListAdd(){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowH = document.documentElement.clientHeight;

    let prePage = this.state.prePage;
    let arrPrePage = this.state.arrPrePage;

    if (scrollTop > prePage) {
      this.isScrollUpDown('down',arrPrePage);
    } else {
      this.isScrollUpDown('up',arrPrePage);
    }
    prePage = scrollTop;

    if (windowH + prePage + windowH/10 > document.body.scrollHeight) {
        this.onScrollData();
    }
    this.onScrollPage();
  }

  componentWillMount(){
    let everyData = this.state.everyData;
    this.setState({
      everyData: everyData,
    });
    window.removeEventListener("scroll", this.onScrollListAdd, false);
  }

  componentDidMount(){
    let oBox = document.getElementById("EverydayTopic");
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowH = document.documentElement.clientHeight;

    let arrPrePage = this.state.arrPrePage;
    let prePage = this.state.prePage;
    arrPrePage.push(document.documentElement.scrollHeight + oBox.offsetHeight/2);

    if(scrollTop > prePage) {
      this.isScrollUpDown('down',arrPrePage);
    } else {
      this.isScrollUpDown('up',arrPrePage);
    }
    prePage = scrollTop;

    window.addEventListener("scroll", this.onScrollListAdd, false);
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
          <EveryDayPageNum pageDisplay={this.state.pageDisplay} onScrollPage={this.onScrollPage} everyPage={this.state.everyPage} totalPage={this.state.totalPage} />
          <EveryDayScrollBottom bottomDisplay={this.state.bottomDisplay}/>
        </div>
    )
  }
}

export default EverydayPageHome;