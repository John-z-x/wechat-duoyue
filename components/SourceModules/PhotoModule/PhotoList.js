import React from 'react';
import PhotoFlow from './PhotoFlow';
import CommonHeader from '../../HeaderComponents/CommonHeader';
import ReturnButton from '../../HeaderComponents/ReturnButton';
import AlbumShow from "./AlbumShow"
import withStyles from '../../../decorators/withStyles';
import styles from './PhotoModule.scss';

const photoData = [
	{'index':'1','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143801088.jpg','title':'武汉理工大学数字中心','disc':'财务部'},
	{'index':'2','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143802245.jpg','title':'武汉理工大学数字中心','disc':'开发部'},
	{'index':'3','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143803182.jpg','title':'武汉理工大学数字中心','disc':'行政部'},
	{'index':'4','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143805604.jpg','title':'武汉理工大学数字中心','disc':'市场部'},
	{'index':'5','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143807229.jpg','title':'武汉理工大学数字中心','disc':'运营部'},
  {'index':'6','src':'http://file.duoyue.me/upload/source/pic/20160122/2016_01_22_143804213.jpg','title':'武汉理工大学数字中心','disc':'设计部'}
	
]

const photoData2 = [
	{'index':'25','src':'http://file.duoyue.me/upload/source/pic/20151130/2015_11_30_170232374_c.jpg','title':'图片9'},
	{'index':'26','src':'http://file.duoyue.me/upload/source/pic/20151130/2015_11_30_170232374_c.jpg','title':'图片10'},
	{'index':'27','src':'http://file.duoyue.me/upload/source/pic/20151130/2015_11_30_170232374_c.jpg','title':'图片11'},
	{'index':'28','src':'http://file.duoyue.me/upload/source/pic/20151128/2015_11_28_115105267_c.jpg','title':'图片12'},
	{'index':'29','src':'http://file.duoyue.me/upload/source/pic/20151130/2015_11_30_174815169_c.jpg','title':'图片13'},
	{'index':'30','src':'http://file.duoyue.me/upload/source/pic/20150719/2015_07_19_104152677_c.jpg','title':'图片14'},
	{'index':'31','src':'http://file.duoyue.me/upload/source/pic/20151130/2015_11_30_174815169_c.jpg','title':'图片15'},
	{'index':'32','src':'http://file.duoyue.me/upload/source/pic/20151130/2015_11_30_174136762_c.jpg','title':'图片16'},
	{'index':'33','src':'http://file.duoyue.me/upload/source/pic/20151130/2015_11_30_170232374_c.jpg','title':'图片17'},
	{'index':'34','src':'http://file.duoyue.me/upload/source/pic/20151128/2015_11_28_115105267_c.jpg'},
	{'index':'35','src':'http://file.duoyue.me/upload/source/pic/20151130/2015_11_30_174815169_c.jpg','title':'图片19'}

]

@withStyles(styles)
class PhotoList extends React.Component {
	constructor(props) {
    super(props);
    this.state = {

    }
  }
	render() {
		return(
			<div className="PhotoList">
				<div className="listChange" ref="listChange" style={{"display":"block"}}>
					<CommonHeader>
						<ReturnButton/>
					</CommonHeader>
					<PhotoFlow list={photoData} listTwo={photoData2}/>
				</div> 
			</div>
			
		);
	}
}

export default PhotoList;