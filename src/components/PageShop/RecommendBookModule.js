'use strict';
import React, { PropTypes }from 'react';
import { Link } from 'react-router';

class RecommendBookModule extends React.Component {
	render() {
    let {data} = this.props;
		return (
			<div className="RecommendBookModule">
				<div className="recmd-box bdr-mg bg-white">
					<h2 className="f-level-title">{data.title}</h2>
					<ul className="recmd-bks">
					{
						data.data.map((item,i) => {
							return (
								<li className="cell" key={i}>
									<Link to={item.href}>
										<img className="bk-cover" src={item.src} alt={item.title}/>
										<h4 className="bk-title">{item.title}</h4>
										<span className="bk-price rem">{item.price}</span>
									</Link>
								</li>
							)
						})
					}
					</ul>
	        <Link to={data.href} className="find-more">
	          <h4>{data.recmdText}</h4>
	          <em className="fd-more-btn"></em>
	        </Link>
				</div>
			</div>
		);
	}
}

RecommendBookModule.propTypes = {
	data: PropTypes.object.isRequired,
}

export default RecommendBookModule;