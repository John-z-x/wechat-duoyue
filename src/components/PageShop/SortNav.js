'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class SortNav extends React.Component {
	render() {
		return (
			<div className="hot-sort-box bdr-mg bg-white">
				<h2 className="f-level-title">{this.props.sortData.title}</h2>
				<ul className="hot-sort-content dis-flex">
				{
					this.props.sortData.data.map(function(item,i){
						return (
							<li className="cell" key={i}>
								<Link to={item.href}>
									<img className="sort-icon" src={item.src} alt={item.title}/>
									<h4 className="sort-title">{item.title}</h4>
								</Link>
							</li>
						)
					})
				}
				</ul>
			</div>
		);
	}
}

SortNav.propTypes = {
	sortData: PropTypes.object.isRequired
}

export default SortNav;