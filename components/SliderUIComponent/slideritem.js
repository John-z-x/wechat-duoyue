import React from 'react';
import  { Link } from 'react-router';

class SliderItem extends React.Component {
	render() {
		const item = this.props.data;
		return (
			<li className="slider_item" key={item.id} >
				<Link to={item.href || '#'} >
					<img src={item.url} alt={item.title} width="100%" height="100%"/>
					<span className="slider_item_title">{item.title}</span>
				</Link>
      </li> 
		);
	}
}

export default SliderItem;