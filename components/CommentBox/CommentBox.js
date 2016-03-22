'use strict';
import React, { PropTypes }from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import CommentFormCommunity from './CommentFormCommunity';
import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import CommentCommonHeader from './CommentCommonHeader';
import CommentWriteGuide from './CommentWriteGuide';
import withStyles from '../../decorators/withStyles';
import styles from './CommentBox.scss';


@withStyles(styles)
class CommentBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{userAvatar: 'http://wx.qlogo.cn/mmopen/kofjCXITdCCehjLb2FuuBcaQicDlaiaZqHXT6cRHdVkpH02GjvnT9yK1clDFYrqST5yIDZ9FT5TqzVibHRRUcS3NbZ3MT6eGN52/0', userName: 'Smile_Boy', commentTime: ' 2016/3/7 14:11:20', likeNum: 12, likeIconState: false, commentText: '我们在海天相接处挥手'},
				{userAvatar: 'http://wx.qlogo.cn/mmopen/kofjCXITdCCehjLb2FuuBcaQicDlaiaZqHXT6cRHdVkpH02GjvnT9yK1clDFYrqST5yIDZ9FT5TqzVibHRRUcS3NbZ3MT6eGN52/0', userName: 'Smile_Boy', commentTime: ' 2016/3/7 14:11:20', likeNum: 12, likeIconState: true, commentText: '我们在海天相接处挥手'},
			],
      myData: {myAvatar: 'http://wx.qlogo.cn/mmopen/4v9DqJtCqotKkQzOMdlgsQXWvBQuxYibbiaezbvqUrvDx1fIcLYVE2CANez05uKLsXghFWUuXuynFBS5ACOmTRjxibuibO8p02rO/132', myName: 'And One', myLikeIconState: true}
		};
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
	}
	loadCommentsFromServer() {
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
  }
	handleCommentSubmit(comment) {
    let comments = this.state.data;
  	let	newComments = this.props.options.commentItem !== 'PurchaseAdvice' ? [comment].concat(comments) : comments.concat([comment]);
    this.setState({data: newComments});
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   type: 'POST',
    //   data: comment,
    //   success: function(data) {
    //     this.setState({data: data});
    //     this.setState({myData: myData});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     this.setState({data: comments});
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
  }
  toggleCommentForm() {

		let maskLayout = document.createElement('div');
		maskLayout.id = 'maskLayout';
		maskLayout.style.cssText = 'position:fixed;top:0;left:0;z-index:10001;width:100%;height:100%;background-color:rgba(0,0,0,0.5);'
  	let commentForm = document.getElementById('js-comment-form');
  	if (commentForm.style.display == 'none') {
  		commentForm.style.display = 'block';
  		document.body.appendChild(maskLayout);
  		let cover = document.getElementById('maskLayout');
  		cover.addEventListener('click',()=>{
  			commentForm.style.display = 'none';
  			cover.parentNode.removeChild(cover);
  		},false);
  	} else {
  		commentForm.style.display = 'none';
  		document.body.removeChild(document.getElementById('maskLayout'));
  	}
  }
  componentDidMount() {
  	// this.loadCommentsFromServer();
   //  setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }
	render() {
		const _funcs = {
			onCommentSubmit: this.handleCommentSubmit, 
			toggleCommentForm: this.toggleCommentForm,
		};
    let 
      commentHeader,
      commentWriteGuide,
      commentForm,
      hdCommentAmount = this.props.options.hdCommentAmount == 'on' ? this.state.data.length : '';
    if (this.props.options.commentHeader !== '') {
      switch(this.props.options.commentHeader) {
        case 'off':
          commentHeader = null;
          break;

        default:
          commentHeader = <CommentCommonHeader data={hdCommentAmount} title={this.props.options.headerText}/>;
      }
    }
    if (this.props.options.commentWriteGuide !== '') {
      switch(this.props.options.commentWriteGuide) {
        case 'off':
          commentWriteGuide = null;
          break;
        default:
          commentWriteGuide = <CommentWriteGuide funcs={_funcs}/>;
      }
    }
    // if (this.props.options.commentForm !== '') {
    //   switch(this.props.options.commentForm) {
    //     case 'off':
    //       commentForm = null;
    //       break;
    //     case 
    //     case 'Community':
    //       commentForm = <CommentFormCommunity funcs={_funcs} myData={this.state.myData} />;
    //       break;
    //     default:
    //       commentForm = <CommentForm funcs={_funcs} myData={this.state.myData} />;
    //   }
    // }
    if (this.props.options.commentForm !== '') {
      let patternForm = this.props.options.commentForm;
      if (patternForm == 'off') {
        commentForm = null;
      } 
      else if (patternForm.indexOf('Community') != -1) {
        if (patternForm == 'Community-Pen') {
          commentForm = <CommentFormCommunity funcs={_funcs} myData={this.state.myData} mode="Pen"/>;
        } else {
          commentForm = <CommentFormCommunity funcs={_funcs} myData={this.state.myData}/>;
        }
      }
      else {
        commentForm = <CommentForm funcs={_funcs} myData={this.state.myData} />;
      }
    }
		return (
			<div className="CommentBox">
				{commentHeader}
				<CommentList data={this.state.data} options={this.props.options.commentItem}/>
				{commentWriteGuide}
				{commentForm}
			</div>
		);
	}
}

CommentBox.propTypes = {
  options: PropTypes.object,
}


export default CommentBox;

// ReactDOM.render(
//   <CommentBox url="/api/comments" pollInterval={2000} options={}/>,
//   document.getElementById('content')
// );

/********************************/
// CommentBox调用说明：
// url:
// 必须
// pollInterval:
// 非必需

// options用做配置选项
//   统一配置值为off不显示。
//   commentHeader: 'off',
//   评论页面头部

//   commentItem: 'PurchaseAdvice',
//   评论项的样式，资源模块评论样式(默认)、社区评论样式(Community)、购买咨询评论样式(PurchaseAdvice)
//   commentWriteGuide: 'off',
//   评论引导项，默认资源评论模块的样式。
//   commentForm: 'Community-Pen',
//   评论输入框样式，资源模块(默认)、社区评论样式(Community)、购买咨询评论样式(Community-Pen)
//   headerText: '',
//   hdCommentAmount: '',
// 必须
// Code Example:
//   let commentBoxOptions = {
//     commentHeader: 'off',
//     commentItem: 'PurchaseAdvice',
//     commentWriteGuide: 'off',
//     commentForm: 'Community-Pen',
//   };
//   <CommentBox options={commentBoxOptions}></CommentBox>
/******************************/



