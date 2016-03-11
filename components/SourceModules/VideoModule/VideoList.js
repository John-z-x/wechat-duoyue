'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import withStyles from '../../../decorators/withStyles';
import styles from './VideoModule.scss';

const data = [
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153636196.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153308432.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153842889.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153636196.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153308432.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153842889.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153636196.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153308432.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153842889.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153636196.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153308432.jpg', desc: '把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，把66部韩剧的动心瞬间做成合集，最后...'},
  {href: '', poster: 'http://file.duoyue.me/upload/source/20160224/2016_02_24_153842889.jpg', desc: '把66部韩剧的动心'},
  
  ]


class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

	render() {
		return (
			<div className="VideoModule v-collection-page">
      {
        this.props.data.map((item, i) => {
          return (
            <a className="v-col-page-cell" href="" key={i}>
              <div className="poster">
                <img src={item.poster} alt="poster"/>
                {/*<aside className="v-attr">视频时长：10</aside>*/}
              </div>
              <h3 className="desc">{item.desc}</h3>
            </a>
          )
        })
      }
        
      </div>
		);
	}
}
@withStyles(styles)
class temp extends React.Component {
  render() {
    return (
      <VideoList data={data}/>
    );
  }
}
export default temp;