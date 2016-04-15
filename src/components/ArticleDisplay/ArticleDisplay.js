import React from 'react';
import { browserHistory } from 'react-router';
import Article from './Article';
import Commodity from './Commodity';
import ContentRelate from './ContentRelate';
import ToEveryday from './ToEveryday';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton  from '../HeaderComponents/ReturnButton';
import HeaderStyleModify from '../HeaderComponents/HeaderStyleModify';
import CommentButton from '../HeaderComponents/CommentButton';
import CollectButton from '../HeaderComponents/CollectButton';

import Modal from "../Modals/Modal";
import ModifyStyle from '../Modals/ModifyStyle';

////import withstyles from '../../decorators/withStyles';
import styles from './ArticleDisplay.scss';

////@withStyles(styles)
class ArticleDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontModifyDisplay: false,
      fontSize: 18,
      color: "white"
    }
  }

  onCommentClick() {
    //TODO
   //window.location.href="/source/commentpage";
    browserHistory.push("/source/commentpage");
  }
  //点击屏幕隐藏
  onModalClick() {
    this.setState({
      fontModifyDisplay: false
    })
  }
  //点击显示modal
  onHeaderStyleModifyClick(type) {
    this.setState({
      fontModifyDisplay: true
    })
  }
  //点击选择样式
  onModifyClick(type) {
    let fontsize, MaxFontSize = 22, MinFontSize = 16;
    switch(type) {
      case "white":
        this.setState({
          color: "white"
        });
        break;
      case "black":
        this.setState({
          color: "black"
        });
        break;
      case "big":
        fontsize = this.state.fontSize;
        (fontsize < MaxFontSize) &&
        this.setState({
          fontSize: fontsize+2
        });
        break;
      case "small":
        fontsize = this.state.fontSize;
        (fontsize > MinFontSize ) &&
        this.setState({
          fontSize: fontsize-2
        });
        break;
      default :
        return null;
    }
  }
  render() {
  	return(
  		<div className="ArticleDisplay">
        <CommonHeader color={this.state.color}>
          <ReturnButton />
          <CollectButton />
          <CommentButton OnCommentClick={this.onCommentClick}/>
          <HeaderStyleModify onHeaderStyleModifyClick={this.onHeaderStyleModifyClick.bind(this)}/>
        </CommonHeader>
        <Article color={this.state.color} fontSize={this.state.fontSize}/>
        <Commodity color={this.state.color}/>
        <ContentRelate color={this.state.color}/>
        <ToEveryday color={this.state.color}/>
        {
          this.state.fontModifyDisplay &&
          <Modal onModalClick={this.onModalClick.bind(this)}>
            <ModifyStyle onModifyClick={this.onModifyClick.bind(this)}/>
          </Modal>
        }
      </div>
  	);
  }
}

export default ArticleDisplay;