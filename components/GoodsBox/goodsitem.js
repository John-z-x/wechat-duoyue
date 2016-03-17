import React from 'react';

class GoodsItem extends React.Component {

	deleteItem(event) {
		//后台返回成功后继续。。
    this.props.actions.DeleteItem(this.props.data.id);
	}

	render() {
		const { data, actions } = this.props;
		//console.log(this.props.actions);
		return (
			<li className="goods-item flex">
				<div className="goods-img left">
					<img src={data.headurl} alt="图片" width="70" height="70"/>
				</div>
				<div className="goods-detail left">
					<div className="goods-title">{data.title}</div>
					<div className="goods-size">{data.size}</div>
					<div className="goods-price clearfix">
						<div className="oneprice left">¥{data.price}</div>
						<div className="cancel-goods right" onClick={this.deleteItem.bind(this)}>删除</div>
            {this.props.children}
					</div>
				</div>
			</li>
		);
	}
}

export default GoodsItem;