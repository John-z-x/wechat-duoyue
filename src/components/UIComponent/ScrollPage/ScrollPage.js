import React from 'react';
import EveryDayPageNum from './EveryDayPageNum';
import EveryDayScrollBottom from './EveryDayScrollBottom';

import Utils from '../../../utils/utils.js';
////import withstyles from '../../../decorators/withStyles';
import styles from './ScrollPage.scss';

//@withStyles(styles)
class ScrollPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageDisplay: false,  //页码显示判断
      everyPage: this.props.everyPage, //当前页码 从0开始
      totalPage: this.props.totalPage,  //总页码
      prePage: 0,  //上次页面滚动的高度
      arrPrePage: this.props.arrPrePage, //获取每页滚动高度
      bottomDisplay: false, //页面加载完底部显示判断
    }
    this.isFirst = true;
    this.isonceFinish = false;
    Utils.bindMethods(this, "onScrollPage", "isScroll", "onScrollListAdd","isScrollUpDown");
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


  //滚动加载数据
  onScrollListAdd(){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowH = document.documentElement.clientHeight;
    let prePage = this.state.prePage;

    let arrPrePage = this.state.arrPrePage;
    let everyPage = this.state.everyPage;
    let totalPage = this.state.totalPage;

    this.onScrollPage();
    if (scrollTop > prePage) {
      this.isScrollUpDown('down',arrPrePage);
    } else {
      this.isScrollUpDown('up',arrPrePage);
    }

    if(everyPage != totalPage && everyPage < totalPage){
      if(!this.isScroll()) return;        
      if(this.isFirst || this.isonceFinish ){
        this.props.callbackParent();
        this.isonceFinish = false;
      }  
    }else{
      this.setState({
        bottomDisplay: true,
      })
      return;
    }
    
  }


  //滚动加载的条件
  isScroll(){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let windowH = document.documentElement.clientHeight;
      let prePage = this.state.prePage;

      let arrPrePage = this.state.arrPrePage;

      if (scrollTop > prePage) {
        this.isScrollUpDown('down',arrPrePage);
      } else {
        this.isScrollUpDown('up',arrPrePage);
      }
      this.setState({
        prePage: scrollTop,
      })

      return (windowH + prePage + windowH / 10 > document.body.scrollHeight) ? true : false;
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
          this.setState({
            everyPage:i,
          })
          break;
        }
      }
    } else {
      for (let i = 0; i < arrPrePageNum; i++) {
        if (scrollTop < arrPrePage[i]) {
          this.setState({
            everyPage: i,
          })
          break;
        }
      }
    }
  }

  //滚动前页面内容数据变化，绑定解除
  componentWillMount(){

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
 
    if(scrollTop > prePage) {
       this.isScrollUpDown('down',arrPrePage);
    } else {
       this.isScrollUpDown('up',arrPrePage);
    }
    this.setState({
        prePage: scrollTop,
    })
  
    arrPrePage.push(document.documentElement.scrollHeight);
    window.addEventListener("scroll", this.onScrollListAdd, false);
  }

  //渲染页码与底部
  render() {
    let pageDisplay = this.state.pageDisplay,
        everyPage = this.state.everyPage,
        totalPage = this.state.totalPage,
        arrPrePage = this.state.arrPrePage;

    return (
      <div className="ScrollPage">
        <EveryDayPageNum pageDisplay={pageDisplay} everyPage={everyPage} totalPage={totalPage} arrPrePage={arrPrePage} />
        <EveryDayScrollBottom  bottomDisplay={this.state.bottomDisplay}/>
      </div>
    );
  }
}

export default ScrollPage;