'use strict';
import React, { PropTypes }from 'react';
import { Link } from 'react-router';

class RecommendBookModule extends React.Component {
	render() {
		return (
			<div className="recmd-box bdr-mg bg-white">
				<h2 className="f-level-title">{this.props.data.title}</h2>
				<ul className="recmd-bks">
				{
					this.props.data.data.map(function(item,i){
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
				<a className="find-more" href="">
					<h4>{this.props.data.recmdText}</h4>
					<em className="fd-more-btn"></em>
				</a>
			</div>
		);
	}
}

RecommendBookModule.propTypes = {
	data: PropTypes.object.isRequired,
}

export default RecommendBookModule;