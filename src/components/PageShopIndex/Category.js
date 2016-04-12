import React from 'react';
import CategoryItem from './CategoryItem';
import { Link } from 'react-router';

class Category extends React.Component {
  render() {
   	const { server, local }= this.props.data;
   	let goodsCode = server.items.map( (item, i) =>
   		<CategoryItem data={item} key={ `categoryItem${i}`}/>
   	);
   
 	  return (
 			<li className="category clearfix">
        <header className="category-header clearfix">
 					<div className="category-title left" style={{backgroundImage: "url(" + local.categoryUrl + ")"}}>{server.title}</div>
          <Link to={`/shop/goodslist/${server.id}`}>
            <span className="more right" style={{backgroundImage: "url(" + local.goUrl + ")"}}></span>
          </Link>
        </header>
        <ul className="clearfix" >
        	{goodsCode}
        </ul>
 			</li>
 	  );
   }
}

export default Category;
