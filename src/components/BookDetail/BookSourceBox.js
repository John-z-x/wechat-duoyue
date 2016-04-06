import React from 'react';

class BookSourceBox extends React.Component {
 	render() {
 		let data = this.props.data;
			return (
				<div className="BookSourceBox">
				  <a href={data.href}>
					  <div className="box-img">
					    <img src={data.bgSrc} alt="box-img" title="box-img"/>
				      <div className="box-circle">
				        <div className="box-circle-pic" >
				        	<img src={data.typeSrc} alt="source-type" title="source-type"/>
				        </div>
				        <span className="box-circle-count">{data.count}</span>
				      </div>
					  </div>
				  </a>
				  <div className="box-bottom clearfix">
				    <div id="box-bottom-left" className="box-bottom-left" >
				      <span className="box-bottom-text">{data.type}</span>  
				    </div>
					  <div id="box-bottom-right" className="box-bottom-right">
					    <div className="box-bottom-title">{data.boxTitle}</div>
					    <div className="box-bottom-desc">{data.boxDesc}</div> 
					  </div>
					</div>
				</div>
				);
			}
		}
		export default BookSourceBox;