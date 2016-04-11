import React from 'react';

class CommentButton extends React.Component {
	onBtnClick() {
		this.props.OnCommentClick();
	}
  render() {
    let classname = this.props.CommentClass ? this.props.CommentClass : "";
    return (
      <span className={"CommentButton head-btn right "+classname} onClick={ this.props.OnCommentClick && this.onBtnClick.bind(this) }></span>
    );
  }
}

export default CommentButton;