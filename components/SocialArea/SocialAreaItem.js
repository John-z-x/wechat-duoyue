import React from 'react';

class SocialAreaItem extends React.Component {
 	render() {
 		 let data = this.props.data;
		    return (
				 	<div className="SocialAreaItem">
						<a href={data.href}>
				    	<div className="title">
				    		{data.title}
				    	</div>
				      <div className="intra">
				      	{data.intra}
				      </div>
				    	<div>
				    		<img  className="bg-pic" src={data.bgPic} alt="图片1"/>
				    	</div>
				    	<div className="user">
				    		<div className="user-pic">
				    			<img alt="图片2" src={data.userPic} />
				    		</div>
				        <div className="user-words">
				        	<span>“</span>
				        	{data.words}
				        	<span>”</span>
				        </div>
				        <div className="user-time">
				        	{data.time}
				        </div>
				    	</div>
						</a>
				    <div className="end"></div>
				  </div>
				 );
		  }
   }
 export default SocialAreaItem;