import React from 'react';
import EveryDayPageNum from './EveryDayPageNum';
import EveryDayScrollBottom from './EveryDayScrollBottom';

import Utils from '../../../utils/utils.js';
import withStyles from '../../../decorators/withStyles';
import styles from './ScrollPage.scss';

@withStyles(styles)
class ScrollPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageDisplay: false,  //页码显示判断
      everyPage: this.props.everyPage, //当前页码 从0开始
      totalPage: this.props.totalPage,  //总页码
      prePage: this.props.prePage,  //上次页面滚动的高度
      arrPrePage: this.props.arrPrePage, //获取每页滚动高度
      bottomDisplay: false, //页面加载完底部显示判断
    }
    
    Utils.bindMethods(this, "onScrollPage","isScrollUpDown", "onScrollListAdd");
  }

  //滚动判断页码是否显示
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

  //判断上下滚动条件，页码变化
  isScrollUpDown(isUpDown,arrPrePage){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowH = document.documentElement.clientHeight;
    let everyPage = this.state.everyPage;
    let arrPrePageNum = arrPrePage.length;

    if (isUpDown === 'down') {
      for (let i = 0; i < arrPrePageNum; i++) {
        if (scrollTop + windowH  < arrPrePage[i]) {
          console.log('已经进入' + i + '页');
          this.setState({
            everyPage:i,
          });
          break;
        }
      }
    } else {
      for (let i = 0; i < arrPrePageNum; i++) {
        if (scrollTop < arrPrePage[i]) {
          console.log('已经进入' + i + '页');
          this.setState({
            everyPage:i,
          });
          break;
        }
      }
    }
  }

  //滚动加载数据
  onScrollListAdd(){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowH = document.documentElement.clientHeight;
    let everyPage = this.state.everyPage;
    let totalPage = this.state.totalPage;
    let prePage = this.state.prePage;
    let arrPrePage = this.state.arrPrePage;

    if (scrollTop > prePage) {
      this.isScrollUpDown('down',arrPrePage);
    } else {
      this.isScrollUpDown('up',arrPrePage);
    }
    prePage = scrollTop;
    if (windowH + prePage + windowH/10 > document.body.scrollHeight) {
        if(everyPage != totalPage){
          this.props.callbackParent();
        }else{
          this.setState({
            everyPage: totalPage,
            bottomDisplay: true,
          });
          return;
        }
    }
    this.onScrollPage();
  }

  //滚动前页面内容数据变化，绑定解除
  componentWillMount(){
    let everyData = this.state.everyData;
    this.setState({
      everyData: everyData,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollListAdd, false);
  }

  //滚动加载
  componentDidMount() {
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

  //渲染页码与底部
  render() {
    let pageDisplay = this.state.pageDisplay,
        everyPage = this.state.everyPage,
        totalPage = this.state.totalPage,
        prePage = this.state.prePage,
        arrPrePage = this.state.arrPrePage,
        everyData = this.state.everyData;
    return (
      <div className="ScrollPage">
        <EveryDayPageNum everyData={everyData} pageDisplay={pageDisplay} everyPage={everyPage} totalPage={totalPage} prePage={prePage} arrPrePage={arrPrePage} />
        <EveryDayScrollBottom  bottomDisplay={this.state.bottomDisplay}/>
      </div>
    );
  }
}

export default ScrollPage;