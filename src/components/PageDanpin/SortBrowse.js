'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class SortBrowse extends React.Component {


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
									<div className="cell-img left">
                    <div className="cell-img-container">
                      <img src={item.bookTypePic} alt={item.title} title={item.title} />
                    </div>
                  </div>
									<div className="cell-text left">
										<h3 className="sort-title">{item.title}</h3>
										<h5 className="bk-num-wrap">书籍:<span className="bk-num">{item.bookCount}</span></h5>
										<h5 className="bk-title">{item.dtitle}</h5>
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

SortBrowse.propsType = {
	data: PropTypes.object.isRequired({
		data: PropTypes.array.isRequired
	})
};

export default SortBrowse;