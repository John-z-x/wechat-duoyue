import React, { PropTypes }  from 'react';
import { Link } from 'react-router';

class CategoryItem extends React.Component {
  render() {
  	const { data } = this.props;
  	return (
			<li className="CategoryItem shop-item left">
				<Link to={ data.href }>
					<div className="goods-img-container">
            <img className="goods-img" src={data.proPic1} alt={data.name} width="100%" height="120"/>
          </div>
					<span className="goods-title">{data.proName}</span>
					<span className="goods-price rmb">{data.proPrice}</span>
				</Link>
			</li>
  	);
  }
}


CategoryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    proPrice: PropTypes.number.isRequired,
    href: PropTypes.string.isRequired,
    proPic1: PropTypes.string.isRequired,
    proName: PropTypes.string.isRequired
  })
}

export default CategoryItem;
