'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class SortBrowse extends React.Component {

	static propTypes = {
		data: PropTypes.object
	};

	render() {
		let { data } = this.props;
		return (
			<div className="SortBrowse">
				<div className="sort-browse bg-white bdr-mg">
					<h2 className="f-level-title">{data.title}</h2>
					<div className="sort-browse-content">
					{
						data.data.map(function(item,i){
							return (
								<Link to={item.href} className="cell clearfix" key={i}>
									<div className="cell-img left"><img src={item.src} alt={item.bkTitle} /></div>
									<div className="cell-text left">
										<h3 className="sort-title">{item.sortTitle}</h3>
										<h5 className="bk-num-wrap">书籍:<span className="bk-num">{item.num}</span></h5>
										<h5 className="bk-title">{item.bkTitle}</h5>
									</div>
								</Link>
							)
						})
					}
					</div>
				</div>
			</div>
		);
	}
}

export default SortBrowse;