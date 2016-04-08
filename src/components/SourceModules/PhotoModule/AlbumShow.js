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
			display: true,
			ifShow: false,
		};
	}


  toShowDown(e) {
		e.stopPropagation();
  	 this.setState({
      ifShow: !this.state.ifShow,
    })
  }
	handleClick(){
    this.setState({
			display: !this.state.display
		})
	}

	render() {
		let { display, ifShow } = this.state, { indexid } = this.props.params;
		return(
			<div className="AlbumShow" onClick={::this.handleClick}>
				{ display &&
					<CommonHeader>
						<ReturnButton/>
						<DownLoadButton OnDownLoadClick={::this.toShowDown}/>
						<CommentButton />
						<CollectButton/>
					</CommonHeader>
				}
				{
					ifShow && <ShowDown ifShow={ifShow} toShowDown={::this.toShowDown}/>
				}
				<AlbumShowPic data={AlbumShowData} display={display} count={count} paramsId={indexid}/>
        <section className="album-background"/>
			</div>
		);
	}
}

export default AlbumShow;


