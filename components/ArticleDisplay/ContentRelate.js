import React from 'react';
import $ from 'jquery';

//相关阅读
class ContentRelate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "contentlist": [],
    }
  }

  componentDidMount() {
    this.contentRelateList();
  }

  contentRelateList() {
    $.ajax({
      url: "/MockData/content_relate_data.js",
      dataType:"json",
      success:function(datalist) {
        this.setState({
          contentlist: datalist
        });
      }.bind(this),
      error:function(xhr){
        console.log(xhr instanceof Array);
      }.bind(this),
    })
  }

  render() {
    let color = this.props.color;
    let bgColor = color == "white" ? "white" : "#333";
    let fontColor = color == "white" ? "black" : "#ccc";
    return(
      <div className="content-relate" style={{backgroundColor: bgColor}}>
        <div className="title">
          <i className="relate-img"></i>

          <span style={{color: fontColor}}>相关阅读</span>
        </div>
      {
        this.state.contentlist.map(function(list) {
          return(
            <div className="relate-title" key={list.id} style={{color: fontColor}}>{list.relateTitle}</div>
          );
        })
      }
      </div>
    );
  }
}

export default ContentRelate;