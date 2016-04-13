import React from 'react';
import { Link } from 'react-router';

class CategoryItem extends React.Component {
  render() {
  	const data = this.props.data;
  	return (
			<li className="CategoryItem shop-item left">
				<Link to={data.href}>
					<div className="goods-img-container">
            <img className="goods-img" src={data.imgUrl} alt={data.name} title={data.name} />
          </div>
					<span className="goods-title">{data.name}</span>
					<span className="goods-price">{data.price}</span>
				</Link>
			</li>
  	);
  }
}

export default CategoryItem;