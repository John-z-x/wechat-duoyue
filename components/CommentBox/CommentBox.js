'use strict';
import React from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import ReturnButton from '../ReturnButton/ReturnButton';
import CommentWonderfulHeader from './CommentWonderfulHeader';
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
  	let	newComments = comments.concat([comment]);
    this.setState({data: newComments});
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   type: 'POST',
    //   data: comment,
    //   success: function(data) {
    //     this.setState({data: data});
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
		return (
			<div className="CommentBox">
				<ReturnButton/>
				<CommentWonderfulHeader data={this.state.data.length}/>
				<CommentList data={this.state.data}/>
				<CommentWriteGuide funcs={_funcs}/>
				<CommentForm funcs={_funcs}/>
			</div>
		);
	}
}


export default CommentBox;

// ReactDOM.render(
//   <CommentBox url="/api/comments" pollInterval={2000} />,
//   document.getElementById('content')
// );