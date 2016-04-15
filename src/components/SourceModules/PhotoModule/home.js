import React from 'react';
import { Link } from 'react-router';
import  GalleryFrontCover from './GalleryFrontCover';
import  ShowDown from './ShowDown';
import CommonHeader from '../../HeaderComponents/CommonHeader';
import ReturnButton from '../../HeaderComponents/ReturnButton';
import CollectButton from '../../HeaderComponents/CollectButton';
import DownLoadButton from '../../HeaderComponents/DownLoadButton';
import CommentButton from '../../HeaderComponents/CommentButton';

////import withstyles from '../../../decorators/withStyles';
import styles from './PhotoModule.scss';

const photoGalleryData = {
	'src':'http://file.duoyue.me/upload/source/20160122/2016_01_22_144904760.jpg',
	'title':'恭祝理工数传各部门精英俱全！',
	'describe':'2016金猴贺岁，恭祝理工数传各部门精英济济，事业顺利，幸福美满。',
	'pageNum':'7'
};

//@withStyles(styles)
class PhotoModuleHome extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    	ifShow: false
    };
  }

  toShowDown() {
  	 this.setState({
      ifShow: !this.state.ifShow
    })
  }

	render() {
		return(
			<div className="PhotoModuleHome">
				<CommonHeader>
				  <ReturnButton/>
						<DownLoadButton  OnDownLoadClick={::this.toShowDown}/>
				  <Link to="/source/commentpage">			
						<CommentButton/>
					</Link>
					<CollectButton/>					
				</CommonHeader>
				{
					this.state.ifShow && <ShowDown toShowDown={::this.toShowDown}/>
				}
				<Link to="/source/photo/2/photolist">
					<GalleryFrontCover data={photoGalleryData}/>
				</Link>
			</div>
		);
	}
}

export default PhotoModuleHome;