import React from 'react';


class AlbumShowDisc extends React.Component {
	render(){
		return(
				<div className="AlbumShowDisc" style={{"display":this.props.display}}>
					<div className="pic_comment_title" id="pic_comment_title" >{this.props.data.title}</div>
          <div className="pic_comment_text" id="pic_comment_text">{this.props.data.disc}</div>
          <div className="pic_page" >
            <span id="span_page_num" className="span_page_num1">{this.props.data.index}</span>
            <span  className="span_page_num2" >{this.props.count}</span>
          </div>
        </div>
			);
	}
}
export default AlbumShowDisc;