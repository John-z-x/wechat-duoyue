import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

class PageHeaderTabBtn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: !!this.props.checked,
		}
	}

	render() {
		//let showClassName = this.state.checked ? this.props.data.headerClassName + '-cur' : this.props.data.className;
		let classname = classnames('right', 'hd-btn', showClassName);
		return (
			<Link to={this.props.data.href} className={classname} >
				<em className="hd-btn-icon"></em>
			</Link>
		);
	}
}

export default PageHeaderTabBtn;
