import React from 'react';

class AlbumShowDesc extends React.Component {
	render(){
    let { count, data } = this.props;
    let { title, disc, index } = data;
		return(
      <div className="AlbumShowDesc">
        <div className="pic-comment-title">{title}</div>
        <div className="pic-comment-text left">{disc}</div>
        <div className="pic-page" >
          <span className="page-now-num">{index}</span>
          <span  className="page-total-num" >{count}</span>
        </div>
      </div>
    );
	}
}

export default AlbumShowDesc;