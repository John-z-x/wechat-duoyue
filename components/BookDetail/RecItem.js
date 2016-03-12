import React from 'react';

class RecItem extends React.Component {
	render() {
		return (
			<div className="rec-item">
				<a href={this.props.data.href +  this.props.data.id}>
					<div className="rec-item-pic">
						<img src={this.props.data.imgUrl} />
					</div>
					<div className="rec-item-title">{this.props.data.title}</div>
					<div className="rec-price">￥{this.props.data.price}</div>
				</a>
			</div>
		);
	}
}

export default RecItem;