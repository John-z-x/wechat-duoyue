import React from 'react';
import { Link } from 'react-router';

class FavoritesArticle extends React.Component {
  deleteFavoritesArticle(id) {
    if(confirm("确定要删除吗？")) {
      alert('删除成功！' + id);
    }
  }

  render() {
    let data = this.props.data;
    return (
        <div className="FavoritesArticle">
          <div className="article-box">
            { data.articleData.map((item, i) => {
                  return (
                      <div className="favorites-article clearfix" key={item.articleId}>
                        <Link to={`/everyday/${item.articleId}/display`} >
                          <div className="title left">{item.title}</div>
                        </Link>
                        <div className="delete right" onClick={() => this.deleteFavoritesArticle(item.articleId)}></div>
                      </div>
                  );
                }
            )
            }
          </div>
        </div>
    );
  }
}

export default FavoritesArticle;