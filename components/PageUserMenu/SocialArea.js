import React from "react";

class SocialArea extends React.Component{
			render(){
				return (
						<div  className="menu-bottom" id="menu-bottom">
			        <div style={{padding:'5px 20px 0px 20px',margin: '5px 0 0 0'}}>
				        <a href={'socialArea.html'} className="link">
					        <div  style={{height:'40px'}}>
			            		<div className="shequ"></div>
				            	<div className="menu-bottom-td">社区 &nbsp; 
				            		<span style={{fontSize:"10px",color:"#999"}}>志同道合/学习交友</span>
				            	</div>

			            		<div className="arrow_go"></div>
					        </div>
				        </a>
			        </div>
			    	</div>
    		);
    	}
		};
		export default SocialArea;