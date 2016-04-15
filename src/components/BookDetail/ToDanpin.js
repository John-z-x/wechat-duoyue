import React from 'react';
import { Link } from 'react-router';

class ToDanpin extends React.Component {
	render() {
		return (
				<Link to="/danpin">
					<div className="ToDanpin">
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