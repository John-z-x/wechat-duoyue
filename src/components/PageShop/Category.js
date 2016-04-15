import React, { PropTypes }  from 'react';
import CategoryItem from './CategoryItem';
import { Link } from 'react-router';

class Category extends React.Component {
  render() {
   	const { data } = this.props;
    let goodsCode = data.data.map( (item, i) =>
      <CategoryItem data={item} key={ i }/>
    );

 	  return (
 			<li className="Category clearfix">
        <header className="category-header clearfix">
 					<div className="category-title left">{ data.title }</div>
          <Link to={ data.href }>
            <span className="more right"></span>
          </Link>
        </header>
        <ul className="clearfix" >
        	{ goodsCode }
        </ul>
 			</li>
 	  );
   }
}


Category.propTypes = {
  data: PropTypes.object.isRequired
}
export default Category;
