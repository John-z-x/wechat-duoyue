import React from 'react';

class BookSourceBox extends React.Component {
 	render() {
 		let data = this.props.data;
			return (
				<div className="source-box">
				  <a href={data.href}>
					  <div className="box-img">
					    <img src={data.bgSrc} />
				      <div className="box-circle">
				        <div className="box-circle-pic">
				        	<img src={data.typeSrc}/>
				        </div>
				        <div className="box-circle-count">{data.count}</div>
				      </div>
					  </div>
				  </a>
				  <div className="box-bottom clearfix">
				    <div id="box-bottom-left" className="box-bottom-left" >
				      <div className="box-bottom-text">{data.type}</div>  
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