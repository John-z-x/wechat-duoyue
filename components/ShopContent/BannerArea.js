'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class BannerArea extends React.Component {
	render() {
		return (
			<div className="page-banner" id="banner-container">
				<div className="banner-box" id="banner-list">
					{
						this.props.banData.map(function(item,i){
							return (
								<a className="banner-item" key={i} href={item.href}>
									<img src={item.imgSrc} alt="轮播图"/>
								</a>
							)
						})
					}
				</div>
			</div>
		);
	}
}

export default BannerArea;