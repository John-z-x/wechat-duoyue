import React from 'react';

class CategoryItem extends React.Component {
  render() {
  	const data = this.props.data;
  	return (
			<li className="shop-item left">
				<img className="goods-img" src={data.imgUrl} alt={data.name} width="100%" height="120"/>
				<span className="goods-title">{data.name}</span>
				<span className="goods-price">{data.price}</span>
			</li>
  	);
  }
}

export default CategoryItem;