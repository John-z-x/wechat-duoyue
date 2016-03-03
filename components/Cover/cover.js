'use strict';
var React = require('react')
var classnames = require('classnames')

class Cover extends React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		const display = this.props.cover ? "show" : "hide";
		let coverClassName = classnames('cover', display );
    return (
			<div className={coverClassName} onClick={this.props.ModifyCover}>
				{this.props.children}
			</div>
    )
	}
}
module.exports = Cover;