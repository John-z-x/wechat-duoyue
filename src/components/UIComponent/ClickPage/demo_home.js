//每天列表
import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Slider from '../SliderUIComponent/Slider';

import EverydayContent from './EverydayContent';
import EveryDayDates from './EveryDayDates';
import ClickPage from './ClickPage';
import Utils from '../../utils/utils.js';
////import withstyles from '../../decorators/withStyles';
import styles from './PageEveryDay.scss';

let everyData = [
  {"id":"1","src":require("../../../../assets/images/imagesforarticle/6.png"),"title": "青春文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"三天前","peoplenum":"17"},
  {"id":"2","src":require("../../../../assets/images/imagesforarticle/6.png"),"title": "职场进阶","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"四天前","peoplenum":"18"},
  {"id":"3","src":require("../../../../assets/images/imagesforarticle/6.png"),"title": "经典文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"五天前","peoplenum":"19"},
  {"id":"4","src":require("../../../../assets/images/imagesforarticle/6.png"),"title": "网络文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"六天前","peoplenum":"20"}
];

let EverydayData ={
  SliderList: [
    {"id": "1", "url": require('../../../../assets/images/fifth.jpg'), "title": ""},
    {"id": "2", "url": require('../../../../assets/images/sixth.jpg'), "title": ""},
  ]
};
//@withStyles(styles)
class EverydayPageHome extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      everyData: everyData,  //列表数据
      totalCount: 10,  //总页码 从1开始  
      pageIndex: 3,   //当前页 从1开始
      prevText:"上一页",  //上一页文本
      nextText:"下一页",   //下一页文本
      showLinkNum: 6,  // 设定页码显示个 从0开始
      dotText:"...",  // "..."文本
      callBack: this.pageIndexChanged  //callback返回当前页码，操作主页面进行数据切换
    }
    Utils.bindMethods(this, "pageIndexChanged");
  }

  //每页数据切换操作  点击页码看内容中"文章"是否相对应
  pageIndexChanged(curP){
    let everyData = this.state.everyData;
    let pageIndex = this.state.pageIndex;
    let array = [];
    let changed = true;
    everyData.map((item,index) => {
      array[index] = item;
    })
    this.setState({
      everyData: array,
      pageIndex: curP,
    });
  }

  render() {
    let everyData = this.state.everyData;
    let pageIndex = this.state.pageIndex;
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
                        <img src="/imagesforarticle/null.gif" alt="图片" title="图片" className="juhe-icon-wenzhang"/>
                        ·{pageIndex} 文章 ·
                      </div>
                      <EverydayContent data={everyday}/>
                      <EveryDayDates data={everyday}/>
                    </div>
                  </Link>
              );
            })
          }
          </div>
          <ClickPage  callBack={this.pageIndexChanged}
            totalCount={this.state.totalCount} 
            pageIndex={this.state.pageIndex} 
            prevText={this.state.prevText} 
            nextText={this.state.nextText} 
            dotText={this.state.dotText}
            showLinkNum={this.state.showLinkNum} />
        </div>
    )
  }
}

export default EverydayPageHome;