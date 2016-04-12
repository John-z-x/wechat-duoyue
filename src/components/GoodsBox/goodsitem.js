import React from 'react';

class GoodsItem extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<li className="GoodsItem goods-item flex">
				<div className="goods-img left">
					<img src={data.headUrl} alt="图片" title="图片" />
				</div>
				<div className="goods-detail left">
					<div className="goods-title">{data.title}</div>
					<div className="goods-size">{data.size}</div>
					<div className="goods-price clearfix">
						<div className="oneprice left">¥{data.price}</div>
						<div className="cancel-goods right" onClick={ () => this.props.showConfirm(data.id)}>删除</div>
            {this.props.children}
					</div>
				</div>
			</li>
		);
	}
}

export default GoodsItem;