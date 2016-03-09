'use strict';
import React from 'react';

class SortBrowse extends React.Component {
	render() {
		return (
			<div className="sort-browse bg-white bdr-mg">
				<h2 className="f-level-title">{this.props.data.title}</h2>
				<div className="sort-browse-content">
				{
					this.props.data.data.map(function(item,i){
						return (
							<a className="cell clearfix" href={item.href} key={i}>
								<div className="cell-img left"><img src={item.src} alt={item.bkTitle} /></div>
								<div className="cell-text left">
									<h3 className="sort-title">{item.sortTitle}</h3>
									<h5 className="bk-num-wrap">书籍:<span className="bk-num">{item.num}</span></h5>
									<h5 className="bk-title">{item.bkTitle}</h5>
								</div>
							</a>
						)
					})
				}
				</div>
			</div>
		);
	}
}

export default SortBrowse;