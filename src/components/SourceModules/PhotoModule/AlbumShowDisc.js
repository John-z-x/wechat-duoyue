import React from 'react';

class AlbumShowDisc extends React.Component {
	render(){
    let { count, data } = this.props;
    let { title, disc, index } = data;
		return(
      <div className="AlbumShowDisc">
        <div className="pic_comment_title">{title}</div>
        <div className="pic_comment_text">{disc}</div>
        <div className="pic_page" >
          <span className="span_page_num1">{index}</span>
          <span  className="span_page_num2" >{count}</span>
        </div>
      </div>
    );
	}
}

export default AlbumShowDisc;