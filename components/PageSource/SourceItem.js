import React from 'react';
import { Link } from 'react-router';

const sourceTypeIcons = [
  {
    "flag": "http://www.duoyue.me/images/mobile/icon_svideo.png",
    "to": "video"
  },
  {
    "flag": "http://www.duoyue.me/images/mobile/icon_smusic.png",
    "to": "audio"
  },
  {
    "flag": "http://www.duoyue.me/images/mobile/icon_spdf.png",
    "to": "pdf"
  },
  {
    "flag": "http://www.duoyue.me/images/mobile/icon_spic.png",
    "to": "photo"
  }
];

class SourceItem extends React.Component {
	render() {
		let data = this.props.data;
    let sourceTypeSrc = sourceTypeIcons[data.type-1].flag;
    let to = "/source/" + sourceTypeIcons[data.type-1].to + "/"+data.id;
		return (
			<div className="item">
        <Link to={to} className="source-box">
          <div className="source-img-box" >
            <img src={sourceTypeSrc} className="source-img" alt="data.type"/>
          </div>
          <div>
            <img width="100%" src={data.pic} alt="source-img" />
          </div>
          <div className="source-name">{data.name}</div>
          <div className="source-desc">{data.desc}</div>
          <div className="source-count clearfix">
            <img src="../images/num.png" alt="num" className="source-count-img1"/>
            <div className="source-count-font">数量<span>{data.count}</span></div>
            <img src="../images/look.png" alt="look-num" className="source-count-img2"/>
            <div className="source-count-font">浏览<span>{data.penSize}</span></div>
          </div>
        </Link>
      </div>
		);
	}
}

export default SourceItem;