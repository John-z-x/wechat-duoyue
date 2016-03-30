'use strict'
import React from 'react';
import classNames from 'classnames';

class CommentFormCommunity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myAvatar: this.props.myData.myAvatar,
			myName: this.props.myData.myName,
			commentTime: '',
			commentText: '',
		};
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
    	commentText: commentText,
    });
    this.resetComment();
    // this.props.funcs.toggleCommentForm();
  }
  handleCancel() {
  	this.props.funcs.toggleCommentForm();
  	this.resetComment();
  }
  componentDidmount() {

  }
	render() {
		let formStyle = {display: 'block'};
    let mode = this.props.mode || '';
		return (
			<form className={classNames("CommentFormCommunity",mode)} id="js-comment-form" style={formStyle}>
				<table className="comment-form-content">
          <tbody>
          <tr>
            <td className="icon-btn-wrap">
              <a className="icon-btn" href="javascript:void(0)"></a>
            </td>
            <td className="input-box-wrap">
              <textarea className="input-box left" value={this.state.commentText} onChange={this.handleTextChange.bind(this)} autofocus placeholder="说点什么吧" ref="commentText"></textarea>
            </td>
            <td className="submit-btn-wrap">
              <span className="submit-btn right" onClick={this.handleSubmit.bind(this)}>发送</span>
            </td>
          </tr>
          </tbody>
				</table>
			</form>
		);
	}
}
export default CommentFormCommunity;