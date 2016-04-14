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

import withStyles from '../../decorators/withStyles';
import styles from './ArticleDisplay.scss';

import * as localStorge from '../../utils/storage.js';
import Utils from '../../utils/utils.js';

@withStyles(styles)
class ArticleDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontModifyDisplay: false,
      fontSize: 18,
      color: "white"
    };
    this.articleKey=`"article_${this.props.params.id}`;
    Utils.bindMethods(this, "populateStorage", "setArticleStyles","checkLocalStorage");
  }

  componentWillUnmount(){
    this.populateStorage();
  }
  
  componentDidMount(){
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(!localStorge.get(this.articleKey)) {
      this.populateStorage();//设置默认localStorage
    } else {
      this.setArticleStyles();
    }
  }

  populateStorage(){
    const { fontSize,color  }=this.state;
    let stateValue=JSON.stringify({"color":color,"fontSize":fontSize});
    localStorge.put(this.articleKey,stateValue);
  }

  setArticleStyles(){
    let localStorgeValue=JSON.parse(localStorge.get(this.articleKey));
    let color=localStorgeValue.color;
    let fontSize=localStorgeValue.fontSize;
    this.setState({
      color: color, 
      fontSize: fontSize
    })
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
        },::this.populateStorage);
        break;
      case "black":
        this.setState({
          color: "black"
        },::this.populateStorage);
        break;
      case "big":
        fontsize = this.state.fontSize;
        (fontsize < MaxFontSize) &&
        this.setState({
          fontSize: fontsize+2
        },::this.populateStorage);
        break;
      case "small":
        fontsize = this.state.fontSize;
        (fontsize > MinFontSize ) &&
        this.setState({
          fontSize: fontsize-2
        },::this.populateStorage);
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