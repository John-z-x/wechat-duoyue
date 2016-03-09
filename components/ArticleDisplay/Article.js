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
    $.ajax({
      url: "/MockData/article_data.js",
      dataType: 'json',
      success: function(articledata) {
        //console.log(articledata);
        this.setState({articleInfo:articledata});
      }.bind(this),
      error:function(xhr) {
       // console.log(xhr)
      
      }.bind(this),
    })
  }

  render() {
    let articledata = this.state.articleInfo;

    if(articledata) {
  		return(
    			<div className="article">
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
			          <span> {articledata.articeDesc}</span>
			          <img src={articledata.articeImg}  />
			        </div>
			      </div>
			      <div className="article-content">
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
