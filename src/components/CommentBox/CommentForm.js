'use strict'
import React from 'react';
import classNames from 'classnames';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myAvatar: this.props.myData.myAvatar,
			myName: this.props.myData.myName,
			commentTime: '',
			likeNum: '',
			likeIconState: '',
			commentText: '',
		};
    console.log(this.props.myData.myAvatar)
	}
  getTime() {
    let date = new Date();
    let 
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds(),
      millseconds = date.getMilliseconds();
    return {
      Y: year,
      M: month,
      D: day,
      h: hours,
      min: minutes,
      s: seconds,
      ms: millseconds,
    };
  }
	handleTextChange(e) {
    this.setState({commentText: e.target.value});
  }
  resetComment() {
  	this.setState({
			commentTime: '',
			likeNum: '',
			likeIconState: '',
			commentText: '',
    });
    this.refs.commentText.value = '';
  }
  handleSubmit(e) {
    e.preventDefault();
    const arr = ['甲','乙','丙','丁','某'];
    let tourist = arr[parseInt(Math.random()*arr.length)];
    let 
    	commentText = this.state.commentText.trim(),
  		commentTime = this.getTime().Y + '/' + this.getTime().M + '/' + this.getTime().D + ' ' + this.getTime().h + ':' + this.getTime().min + ':' + this.getTime().s,
      myAvatar = this.state.myAvatar,
			myName = this.state.myName || '路人' + tourist;
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
			<form className="CommentForm" id="js-comment-form" style={formStyle}>
				<div className="comment-form-content">
					<section className="btn-wrap clearfix">
						<a className="cancel-btn left" onClick={this.handleCancel.bind(this)}>取消</a>
						<a className="submit-btn right" onClick={this.handleSubmit.bind(this)}>发送</a>
					</section>
					<textarea className="input-box" value={this.state.commentText} onChange={this.handleTextChange.bind(this)} autofocus placeholder="说点什么吧" ref="commentText"></textarea>
				</div>
			</form>
		);
	}
}
export default CommentForm;