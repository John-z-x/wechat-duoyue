import React from 'react';
import { Link } from 'react-router';

class RecItem extends React.Component {

	render() {
		let { data } = this.props;
		return (
			<div className="rec-item">
				<Link to={data.href}>
					<div className="rec-item-pic">
						<img src={data.imgUrl} />
					</div>
					<div className="rec-item-title">{data.title}</div>
					<div className="rec-price">￥{data.price}</div>
				</Link>
			</div>
		);
	}
}

export default RecItem;