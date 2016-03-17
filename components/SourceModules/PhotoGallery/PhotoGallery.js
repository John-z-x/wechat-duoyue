import React from 'react';
import  GalleryFrontCover from './GalleryFrontCover';
import CommonHeader from '../../HeaderComponents/CommonHeader';
import ReturnButton from '../../HeaderComponents/ReturnButton';
import CollectButton from '../../HeaderComponents/CollectButton';
import DownLoadButton from '../../HeaderComponents/DownLoadButton';
import CommentButton from '../../HeaderComponents/CommentButton';


import withStyles from '../../../decorators/withStyles';
import styles from './photoGallery.scss';


const photoGalleryData = {
	'src':'http://file.duoyue.me/upload/source/20160122/2016_01_22_144904760.jpg',
	'title':'恭祝理工数传各部门精英俱全！',
	'describe':'2016金猴贺岁，恭祝理工数传各部门精英济济，事业顺利，幸福美满。',
	'pageNum':'7'
}

@withStyles(styles)
class PhotoGallery extends React.Component {
	render() {
		return(
			<div className="PhotoGallery">
				<CommonHeader>
				  <ReturnButton/>
				  <DownLoadButton/>
				  <CommentButton/>
					<CollectButton/>					
				</CommonHeader>
				<GalleryFrontCover data={photoGalleryData}/>
			</div>
		);
	}
}

export default PhotoGallery;