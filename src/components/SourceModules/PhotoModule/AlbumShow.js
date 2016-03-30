import React from 'react';
import { Link } from 'react-router';
import CommonHeader from '../../HeaderComponents/CommonHeader';
import ReturnButton from '../../HeaderComponents/ReturnButton';
import CollectButton from '../../HeaderComponents/CollectButton';
import DownLoadButton from '../../HeaderComponents/DownLoadButton';
import CommentButton from '../../HeaderComponents/CommentButton';
import AlbumShowPic from './AlbumShowPic';
import  ShowDown from './ShowDown';

import withStyles from '../../../decorators/withStyles';
import styles from './PhotoModule.scss';


const AlbumShowData = [
  {'index':'1','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143801088.jpg','title':'武汉理工大学数字中心','disc':'财务部',},
	{'index':'2','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143802245.jpg','title':'武汉理工大学数字中心','disc':'行政部',},
	{'index':'3','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143803182.jpg','title':'武汉理工大学数字中心','disc':'开发部',},
	{'index':'4','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143805604.jpg','title':'武汉理工大学数字中心','disc':'市场部',},
	{'index':'5','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143807229.jpg','title':'武汉理工大学数字中心','disc':'运营部',},
	{'index':'6','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143804213.jpg','title':'武汉理工大学数字中心','disc':'设计部',}
],
count=AlbumShowData.length;

@withStyles(styles)
class AlbumShow extends React.Component {
	constructor (props) {
		super(props);
		this.state =  {
			display:"block",
			ifShow: false,
		};
		this.toShowDown = this.toShowDown.bind(this);
	}


  toShowDown() {
  	 this.setState({
      ifShow: !this.state.ifShow,
    })
  }
	handlerClick(){
	// let e=event||windows.event;
  // e.stopPropagation();
  // e.preventDefault();
		// let header=document.getElementById("header"),
		// disc=document.getElementById("disc");
		// if(header.style.display=="none" &&disc.style.display=="none") {
		// 	header.style.display = "block";
		// 	disc.style.display = "block";
		// }else{
		// 	header.style.display = "none";
		// 	disc.style.display = "none";
		// }
		if(this.state.display=="block"){
			this.setState({display: "none"});
		}else{
			this.setState({display: "block"});
		}
	}


	render() {
		return(
			<div className="AlbumShow" onClick={() => this.handlerClick()}>
			 <div id="header" style={{"display":this.state.display}}>
					<CommonHeader>
					  <ReturnButton/>
					  <DownLoadButton  OnDownLoadClick={this.toShowDown}/>	
							<CommentButton />
						<CollectButton/>					
					</CommonHeader>
				</div>
				{
					this.state.ifShow && <ShowDown ifShow={this.state.ifShow} toShowDown={this.toShowDown}/>
				}
				<AlbumShowPic data={AlbumShowData} count={count} display={this.state.display} paramsId={this.props.params.indexid}/>
			</div>
		);
	}
}

export default AlbumShow;


