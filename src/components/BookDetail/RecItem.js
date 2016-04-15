import React from 'react';
import { Link } from 'react-router';

class RecItem extends React.Component {
	render() {
		let { data } = this.props;
		return (
			<div className="RecItem">
				<Link to={data.href}>
					<div className="rec-item-pic">
            <div className="item-pic-container">
						  <img src={data.bookPic} alt="推荐封面" title="推荐封面"/>
            </div>
						
					</div>
					<div className="rec-item-title">{data.title}</div>
					<div className="rec-price">￥{data.price}</div>
				</Link>
			</div>
		);
	}
}

export default RecItem;