import React from 'react';
import  { Link } from 'react-router';

class SliderItem extends React.Component {
	render() {
		const item = this.props.data;
		let title = this.props.title;
		return (
			<li className="slider-item" key={item.id} >
				<Link to={item.href || '#'} >
					<img src={item.url} alt={item.title} title={item.title} width="100%" height="100%"/>
					{title && <span className="slider-item-title">{item.title}</span> }
				</Link>
      </li> 
		);
	}
}

export default SliderItem;