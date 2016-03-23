'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import withStyles from '../../../decorators/withStyles';
import styles from './ProgressController.scss';
import _ from 'lodash';


@withStyles(styles)
class ProgressController extends React.Component {
	constructor(props) {
		super(props);
		this.clientWidth = window.innerWidth;
		this.state={
			overPages: this.props.data.overPages,
			totalPages: this.props.data.totalPages,
		};
	}

	slideProgress() {
		const totalPages = this.state.totalPages;
		let 
			slideX0,
			liveWidth = 0,
			rate = 0,
			pageOver = 1,
			pos = 0,
			slideDistance = 0,
			clientWidth = document.documentElement.clientWidth,
			progressHolderWidth = clientWidth * 0.84,
			loadProgress = document.getElementById("load-progress");
		let 
			maxProgressNum = document.getElementById('max-progress-num'),
			ProgressNum = document.getElementById('progress-num');

		let funcs = this.props.funcs;
		console.log(!!funcs.slideEnd)
		let slideStart = (e) => {
			e.preventDefault();
			maxProgressNum.style.display = 'inline-block';
  		slideX0 = e.targetTouches[0].clientX;
      let temp = loadProgress.style.width;		
			liveWidth = ((parseFloat(temp.substr(0, temp.length-1)))/100) * progressHolderWidth;
		};
		let slideMove = (e) => {
			let slideMoveFoo;
			if (!!funcs.slideMove) {
				slideMoveFoo = funcs.slideMove;
			}
			if (e.targetTouches.length == 1) {
  			e.preventDefault();
  			let moveX0 = e.targetTouches[0].clientX;
  			slideDistance = moveX0 - slideX0;
			  pos = liveWidth	+ slideDistance;
				rate = pos / progressHolderWidth;
				pageOver = Math.ceil(rate * totalPages);

				if (pos >=0 && pos <= progressHolderWidth) {
					loadProgress.style.width = rate*100 + "%";
					maxProgressNum.innerHTML = pageOver + '/' + totalPages;
					ProgressNum.innerHTML = pageOver + '/' + totalPages;
					if (!!slideMoveFoo) {
						slideMoveFoo.normal(rate);
					}
				}
  			else if (pos < 0) {
  				loadProgress.style.width = 0 + "%";
  				maxProgressNum.innerHTML = 1 + '/' + totalPages;
					ProgressNum.innerHTML = 1 + '/' + totalPages;
					if (!!slideMoveFoo) {
						slideMoveFoo.loss(rate);
					}
  				return;
  			}
  			else if(pos > progressHolderWidth) {
        	loadProgress.style.width  = 100 + "%";
        	maxProgressNum.innerHTML = totalPages + '/' + totalPages;
					ProgressNum.innerHTML = totalPages + '/' + totalPages;
					if (!!slideMoveFoo) {
						slideMoveFoo.overflow(rate);
					}
        	return;
  	    }
			}
		};
		let slideEnd = (e) => {
			let slideEndFoo;
			if (!!funcs.slideEnd) {
				slideEndFoo = funcs.slideEnd;
			}
			maxProgressNum.style.display = 'none';
			if (pos >=0 && pos <= progressHolderWidth) {
					loadProgress.style.width = rate*100 + "%";
					maxProgressNum.innerHTML = pageOver + '/' + totalPages;
					ProgressNum.innerHTML = pageOver + '/' + totalPages;
					if (!!slideEndFoo.normal) {
						slideEndFoo.normal(rate);
					}
				}
  			else if (pos < 0) {
  				loadProgress.style.width = 0 + "%";
  				maxProgressNum.innerHTML = 1 + '/' + totalPages;
					ProgressNum.innerHTML = 1 + '/' + totalPages;
					if (!!slideEndFoo.loss) {
						slideEndFoo.loss(rate);
					}
  				return;
  			}
  			else if(pos > progressHolderWidth) {
        	loadProgress.style.width  = 100 + "%";
        	maxProgressNum.innerHTML = totalPages + '/' + totalPages;
					ProgressNum.innerHTML = totalPages + '/' + totalPages;
					if (!!slideEndFoo.overflow) {
						slideEndFoo.overflow(rate);
					}
        	return;
  	    }
		};
		return {
			slideStart: slideStart,
			slideMove: slideMove,
			slideEnd: slideEnd,
		};
	}
	componentDidMount() {
		let slideEvent = this.slideProgress();
		let controllerBox = document.getElementById('controller-box');
		controllerBox.addEventListener('touchstart', slideEvent.slideStart, false);
		controllerBox.addEventListener('touchmove', slideEvent.slideMove, false);
		controllerBox.addEventListener('touchend', slideEvent.slideEnd, false);
	}
	componentWillUnmount() {
		let slideEvent = this.slideProgress();
		let controllerBox = document.getElementById('controller-box');
		controllerBox.addEventListener('touchstart', slideEvent.slideStart, false);
		controllerBox.addEventListener('touchmove', slideEvent.slideMove, false);
		controllerBox.addEventListener('touchend', slideEvent.slideEnd, false);
	}

	render() {
		const 
			overPages = this.state.overPages,
			totalPages = this.state.totalPages,
			precent = overPages / totalPages * 100;
		let pageProgress = overPages + '/' + totalPages;
		return (
			<div className="ProgressController">
				<div className="max-progress-num" id="max-progress-num" style={{display: 'none'}}>
					{pageProgress}
				</div>
				<div className="controller-box" id="controller-box">
					<div className="progress-holder" id="progress-holder">
						<div className="load-progress clearfix" id="load-progress" style={{width:precent + '%'}}>
							<em className="progress-dot"></em>
						</div>
					</div>
					<p className="progress-num" id="progress-num">
						{pageProgress}
					</p>
				</div>
			</div>
		);
	}
}

export default ProgressController;