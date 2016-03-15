import React from 'react';
import { Link } from 'react-router';

class CategoryItem extends React.Component {
  render() {
  	const data = this.props.data;
  	return (
			<li className="CategoryItem shop-item left">
				<Link to={data.href}>
					<img className="goods-img" src={data.imgUrl} alt={data.name} width="100%" height="120"/>
					<span className="goods-title">{data.name}</span>
					<span className="goods-price">{data.price}</span>
				</Link>
			</li>
  	);
  }
}

export default CategoryItem;