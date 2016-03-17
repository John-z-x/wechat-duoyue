import React  from 'react';
import Cover from '../Cover/Cover';
import Confirm from './Confirm';
import Alert from './Alert';
import CommonHeader from '../HeaderComponents/CommonHeader';
import CollectButton from '../HeaderComponents/CollectButton';
import ReturnButton from '../HeaderComponents/ReturnButton';
import CommentButton from '../HeaderComponents/CommentButton';
import DownLoadButton from '../HeaderComponents/DownLoadButton';

const CONFIRM_CONTENT = "确定删除?";

const alertContentCancel = {
  "img": "http://www.duoyue.me/wechat/1018/3021/images/top/save.png",
  "content": "取消收藏"
}

const alertContentSuccess = {
  "img": "http://www.duoyue.me/wechat/1018/3021/images/top/save.png",
  "content": "收藏成功"
}

const FavorButtonClass =  {
  "Favor": "favorclass",
  "noFavor": "nofavorclass"
}

class TestPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      alert: "hide"
    }
    //this.alert = this.alert.bind(this);
    this.onFavorChange = this.onFavorChange.bind(this);
    this.alertContent = alertContentSuccess;
  }

  onFavorChange(isFavor) {
    let _self = this;
    this.alertContent = !isFavor ? alertContentSuccess : alertContentCancel;
    this.setState({
      alert:"show"
    })
    this.timer = window.setTimeout( function() {
      _self.setState({
        alert: "hide"
      })
    }, 3000)
  }

  onCommentClick() {
    console.log("Comment Will Come!");
  }

  onDownLoadClick() {
    console.log("Let us Down Load!");
  }

  componentWillUnmount() {
    window.clearTimeout(this.timer);
  }

  render() {
    return (
      <div >
        <Cover cover={false}/>
        <CommonHeader>
          <ReturnButton />
          <DownLoadButton OnDownLoadClick={this.onDownLoadClick}/>
          <CommentButton OnCommentClick={this.onCommentClick}/>
          <CollectButton onFavorChange={this.onFavorChange}/>
        </CommonHeader>
        <Alert Content={this.alertContent} ShowOrHide={this.state.alert} />
      </div>
    );
  }
}

export default TestPage;


//confirmAction(result) {
//
//}
//<Confirm content={CONFIRM_CONTENT} confirmAction={this.confirmAction} />
