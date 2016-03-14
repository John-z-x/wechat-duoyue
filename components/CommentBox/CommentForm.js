'use strict'
import React from 'react';
import classNames from 'classnames';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userAvatar: '',
			userName: '',
			commentTime: '',
			likeNum: '',
			likeIconState: '',
			commentText: '',
		};
	}
	handleTextChange(e) {
    this.setState({commentText: e.target.value});
  }
  resetComment() {
  	this.setState({
    	userAvatar: '',
			userName: '',
			commentTime: '',
			likeNum: '',
			likeIconState: '',
			commentText: '',
    });
    this.refs.commentText.value = '';
  }
  handleSubmit(e) {
    e.preventDefault();
    let 
    	commentText = this.state.commentText.trim(),
    	myDate = new Date(),
  		commentTime = myDate.toLocaleString(),
  		myAvatar = this.refs.userAvatar.value,
			myName = this.refs.userName.value || '路人甲';
    if (!commentText) {
    	alert('不能为空额！');
      return;
    }
    // this.setState({
    // 	userAvatar: myAvatar,
  		// userName: myName,
    // 	commentTime: commentTime,
  		// likeNum: 0,
  		// likeIconState: false,
    // 	commentText: commentText,
    // });
    //console.log(this.state)
    this.props.funcs.onCommentSubmit({
    	userAvatar: myAvatar,
  		userName: myName,
    	commentTime: commentTime,
  		likeNum: 0,
  		likeIconState: false,
    	commentText: commentText,
    });
    this.resetComment();
    this.props.funcs.toggleCommentForm();
  }
  handleCancel() {
  	this.props.funcs.toggleCommentForm();
  	this.resetComment();
  }
  componentDidmount() {

  }
	render() {
		let formStyle = {display: 'none'};
		return (
			<form className="comment-form" id="js-comment-form" style={formStyle} onSubmit={this.handleSubmit.bind(this)}>
				<input type="hidden" value="" ref="userAvatar"/>
				<input type="hidden" value="" ref="userName"/>
				<div className="comment-form-content">
					<section className="btn-wrap clearfix">
						<input className="cancel-btn left" type="button" value="取消" onClick={this.handleCancel.bind(this)}/>
						<input className="submit-btn right" type="submit" value="发送"/>
					</section>
					<textarea className="input-box" value={this.state.text} onChange={this.handleTextChange.bind(this)} autofocus placeholder="说点什么吧" ref="commentText"></textarea>
				</div>
			</form>
		);
	}
}
export default CommentForm;