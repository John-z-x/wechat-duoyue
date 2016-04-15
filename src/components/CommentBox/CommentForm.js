'use strict'
import React, { PropTypes }  from 'react';
import classNames from 'classnames';
import Alert from '../Modals/Alert';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
	}

  handleSubmit(e) {
    e.stopPropagation();
    let value = this.refs.inputBox.value;
    if (!value.trim()) {
      alert('不能为空啊！');
      return;
    }
    //this.props.actions.addCommentTo(value);
    this.props.actions.fetchComment("2");
    this.refs.inputBox.value = '';
    this.props.modifyCoverFunc && this.props.modifyCoverFunc();
  }
  cancelSubmit(e) {
    e.stopPropagation();
    this.props.modifyCoverFunc && this.props.modifyCoverFunc();
  }
  componentDidmount() {

  }
	render() {
		return (
			<div className="CommentForm" onClick={ e => { e.stopPropagation() } }>
				<a className="cancel-btn" onClick={ ::this.cancelSubmit }></a>
        <textarea className="input-box" autoFocus placeholder="说点什么吧" ref="inputBox"></textarea>
				<a className="submit-btn" onClick={ ::this.handleSubmit }></a>
			</div>
		);
	}
}

CommentForm.propTypes = {
  actions: PropTypes.object.isRequired
}

export default CommentForm;
