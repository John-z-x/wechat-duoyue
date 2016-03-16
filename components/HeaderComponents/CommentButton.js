import React from 'react';

class CommentButton extends React.Component {
  render() {
  	let hander = this.props.funcs || null;
  	console.log(this.props.funcs)
    return (
      <span className="CommentButton btn right" onClick={hander}>
      	<em className="icon"></em>
      </span>
    );
  }
}

export default CommentButton;