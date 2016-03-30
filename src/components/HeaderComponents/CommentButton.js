import React from 'react';

class CommentButton extends React.Component {
  render() {
    let classname = this.props.CommentClass ? this.props.CommentClass : "";
    return (
      <span className={"CommentButton head-btn right "+classname} onClick={ () => this.props.OnCommentClick && this.props.OnCommentClick()}></span>
    );
  }
}

export default CommentButton;