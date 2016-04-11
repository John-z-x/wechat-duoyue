import React from 'react';
import $ from 'jquery';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "articleInfo": {},
    }
  }

  componentDidMount() {
    this.loadArticle();
  }

  loadArticle() {
    let articledata = require("../../../assets/MockData/article_data.json");
    this.setState({articleInfo:articledata});

    //$.ajax({
    //  url: "../../../assets/MockData/article_data.json",
    //  dataType: 'json',
    //  success: function(articledata) {
    //    //console.log(articledata);
    //    this.setState({articleInfo:articledata});
    //  }.bind(this),
    //  error:function(xhr) {
    //   // console.log(xhr)
    //  }.bind(this),
    //})
  }

  render() {
    let articledata = this.state.articleInfo;
    let color = this.props.color, fontSize = this.props.fontSize;
    let bgColor = color == "white" ? "white" : "#333";
    let fontColor = color == "white" ? "black" : "#ccc";
    if(articledata) {
  		return(
    			<div className="Article" style={{backgroundColor: bgColor, color: fontColor}}>
            <div className="article-head" style={{backgroundColor:" #c29364"}}>
			        <h1 className="title">
			         {articledata.articleTitle}
			        </h1>
			        <div className="time">
			          <span>{articledata.articlePeople}</span>
			          <span>{articledata.articleTime}</span> 
			        </div>
			      </div>
			      <div className="article-desc">
			        <div className="desc">
			          <span style={{fontSize: fontSize+2, color: fontColor}}>{articledata.articeDesc}</span>
			          <img src={articledata.articeImg} alt="文章图片" title="文章图片"  />
			        </div>
			      </div>
			      <div className="article-content" style={{fontSize: fontSize}}>
			        {articledata.articleContent}
			      </div>
          </div>
    		);
    }else {
     return <div></div>;
  }
}
}

export default Article;
