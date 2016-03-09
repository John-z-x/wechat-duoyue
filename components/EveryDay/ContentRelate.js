import React from 'react';
import $ from 'jquery';
//相关阅读
class ContentRelate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "contentlist": [],
      "url": "content-relate.js",
    }
  }

  componentDidMount() {
    this.contentRelateList();
  }

  contentRelateList() {
    $.ajax({
      url:this.state.url,
      dataType:"json",
      success:function(datalist) {
        this.setState({
          contentlist:datalist
        });
       // console.log(datalist)
      }.bind(this),
      error:function(xhr){
        console.log(xhr instanceof Array);
      }.bind(this),
    })
  }

  render() {
    return(
      <div className="content-relate">
        <div className="title">
          <i className="relate-img"></i>
          <span>相关阅读</span>
        </div>
      {
        this.state.contentlist.map(function(list) {
          return(
            <div className="relate-title" key={list.id}>{list.relateTitle}</div> 
          );
        })
      }
      </div>
    );
  }
}

export default ContentRelate;