'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class SortNav extends React.Component {

	render() {
		const { sortData } = this.props;
		return (
			<div className="SortNav">
				<div className="hot-sort-box bdr-mg bg-white">
					<h2 className="f-level-title">{sortData.title}</h2>
					<ul className="hot-sort-content dis-flex">
					{
						sortData.data.map((item,i) => {
							return (
								<li className="cell" key={i}>
									<Link to={item.href}>
										<img className="sort-icon" src={item.bookTypeIcon} alt={item.title}/>
										<h4 className="sort-title">{item.title}</h4>
									</Link>
								</li>
							)
						})
					}
					</ul>
				</div>
			</div>
		);
	}
}

SortNav.propTypes = {
	sortData: PropTypes.object.isRequired({
		data: PropTypes.array.isRequired
	})
};

export default SortNav;