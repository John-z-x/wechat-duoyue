import React from 'react';
import { Link } from 'react-router';

class RecItem extends React.Component {
	render() {
		let { data } = this.props;
		return (
			<div className="RecItem">
				<Link to={data.href}>
					<div className="rec-item-pic">
						<img src={data.imgUrl} alt="book-img" title="book-img"/>
					</div>
					<div className="rec-item-title">{data.title}</div>
					<div className="rec-price">￥{data.price}</div>
				</Link>
			</div>
		);
	}
}

export default RecItem;