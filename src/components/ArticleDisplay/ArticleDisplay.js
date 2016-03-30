import React from 'react';
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

import withStyles from '../../decorators/withStyles';
import styles from './ArticleDisplay.scss';

@withStyles(styles)
class ArticleDisplay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fontModifyDisplay: false,
      fontSize: 18,
      color: "white"
    }
  }

  onCommentClick() {
    //TODO
    //console.log(this);
   window.location.href="/source/commentpage";
  //  this.context.history.pushState({}, '/source/commentpage');
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
    let fontsize, MaxFontSize = 24, MinFontSize = 14;
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
        (fontsize < 22) &&
        this.setState({
          fontSize: fontsize+2
        });
        break;
      case "small":
        fontsize = this.state.fontSize;
        (fontsize > 16 ) &&
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
        <CommonHeader bgColor={this.state.color}>
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