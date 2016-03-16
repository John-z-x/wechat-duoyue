import React from 'react';
import { Link } from 'react-router';

class UserInfor extends React.Component{
			render(){
				return (
					<div className='UserInfor clearfix user-new ' id="user-new" >
						
						<div className='left user-new-img'>
							<img  src={this.props.data.src}/>
							<div className='user-name'>{this.props.data.name}</div>
						</div>
						
				    <div  className="right user-table">
				      <div style={{width: "100%", border: "0"}}>
				              <div className="user-table-td">
				              		<Link to="/favorites">
				              		<div style={{fontSize: '14px'}}>6</div>
				                    <div className="word">收藏</div>
				                    </Link>
				              </div>
				              <div className="user-table-td" style={{borderLeft:'1px solid #eee',borderRight:'1px solid #eee'}}>
				              		<a href="">
				              		<div style={{fontSize: '14px'}}>5</div>
				                    <div className="word" >积分</div>
				                    </a>
				              </div>
				              <div className="user-table-td">
				              		<Link to="/orderlist">
				              		<div style={{fontSize: '14px'}}>7</div>
				                    <div  className="word">订单</div>
				                    </Link>
				              </div>
				      </div>
				    </div>	
					</div>
					);
			}
		};
	export default UserInfor;