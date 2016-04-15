import React from 'react';
import PageLink from './PageLink';

import Utils from '../../../utils/utils.js';
////import withstyles from '../../../decorators/withStyles';
import styles from './ClickPage.scss';

//@withStyles(styles)
class ClickPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: this.props.totalCount,  //总页码 从1开始  
      pageIndex:  this.props.pageIndex, //当前页 从1开始
      prevText: this.props.prevText,  //上一页文本
      nextText: this.props.nextText,  //下一页文本
      showLinkNum: this.props.showLinkNum, // 设定页码显示个 从0开始
      dotText: this.props.dotText,  //设定一定页码时显示"..." 以防过多页面整体效果影响
      alwaysShow: true, //当总页数只有一页时是否显示 
    }
    Utils.bindMethods(this, "callBack");
  }

  callBack(index){
    let pageIndex = this.state.pageIndex;
    this.setState({
      pageIndex: index,
    });
    this.props.callBack(index); 
  }

  //获取到页码html PageLink.js
  getPageLink(p){  
      return <PageLink key={p.Key} text={p.Text} index={p.Index} className={p.ClassName} callBack={this.callBack}/>;  
  }


  render(){
    let totalCount = this.state.totalCount,
        pageIndex = this.state.pageIndex,
        prevText = this.state.prevText,
        nextText = this.state.nextText,
        dotText = this.state.dotText,
        showLinkNum = this.state.showLinkNum;

    let display='';  
    if(!this.state.alwaysShow || this.state.totalCount == 0){  
        display = this.props.totalCount <= 0 ? 'none':'';  
    }
    let totalPages = totalCount+1;    
    let arr=[];  
    let prevDisplay = 1 == pageIndex?'disabled':'page_number_prev';  
    let lastDisplay = totalPages-1 == pageIndex?'disabled':'page_number_next'; 
    
    /*添加prevText*/
    arr.push(  
      this.getPageLink({  
          Key : "P",  
          Text :  prevText,  
          Index : Math.max(pageIndex-1,0),  
          ClassName : prevDisplay  
      })  
    );

    if(this.state.showLinkNum > 0){

      /*判断"..."头部显示*/
      if(prevDisplay != "disabled" && pageIndex >= this.state.showLinkNum){
        arr.push(  
            this.getPageLink({  
                Key : "dP",  
                Text :  dotText,  
                Index : 0,  
                ClassName : "dot"  
            })  
        );
      }

      /*循环生成相关页码数字*/
      let startIndex = parseInt((pageIndex / this.state.showLinkNum)) * this.state.showLinkNum;  
      let endIndex = Math.min(startIndex + this.state.showLinkNum,totalPages);  
      for(; startIndex < endIndex; startIndex++){ 
        if(startIndex <= totalPages && startIndex >= 1){
          if(startIndex != pageIndex){
            arr.push(  
              this.getPageLink({  
                  Key : startIndex,  
                  Text : startIndex,  
                  Index : startIndex,  
                  ClassName : startIndex == pageIndex?'page_number_over':'page_number'  
              })  
            ); 
          }else{
            arr.push(  
              this.getPageLink({  
                  Key : startIndex,  
                  Text : startIndex,  
                  Index : startIndex,  
                  ClassName : startIndex == pageIndex?'page_number_over':'page_number'  
              })  
            ); 
          }
        } 
      }

      /*判断"..."尾部显示*/
      if(lastDisplay != "disabled" && endIndex != totalPages ){
        arr.push(  
            this.getPageLink({  
                Key : "dN",  
                Text :  dotText,  
                Index : 0,  
                ClassName : "dot"  
            })  
        );
      }
    }else{
      prevDisplay = lastDisplay  = "disabled";
    }

    /*添加nextText*/
    arr.push(  
        this.getPageLink({  
            Key : "n",  
            Text :  nextText,  
            Index : Math.min(pageIndex+1,totalPages-1),  
            ClassName : lastDisplay  
        })
    )
    console.log(arr);
    return (  
        <div className="ClickPage list_page_split clearfix" id="pageBox" style={{display:display}}>
          {arr}  
        </div> 
    ) 
  }    
}
export default ClickPage;