import React from 'react';

class PageLink extends React.Component {

  /*页码点击相关操作callback*/
  clickEvent(){ 
      if(this.props.className.indexOf('disabled')<0 && this.props.className.indexOf('dot')<0 && this.props.className.indexOf('page_number_over')<0){  
          this.props.callBack(this.props.index);
      }
  }
  render() {
      return (
          <a href="javascript:;" className={this.props.className} onClick={this.clickEvent.bind(this)}>{this.props.text}</a>
      );  
  }  
  
}

export default PageLink;