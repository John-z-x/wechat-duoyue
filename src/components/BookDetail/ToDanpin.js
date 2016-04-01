import React from 'react';
import { Link } from 'react-router';

class ToDanpin extends React.Component {
	render() {
		return (
				<Link className="ToDanpin" to="/danpin/">
					<div className="bottom-link">
						<div className="bottom-link-box">
							<div className="bottom-link-title">{this.props.title}</div>
							<div className="bottom-link-icon"></div>
						</div>
					</div>
				</Link>
		);
	}
}

export default ToDanpin;