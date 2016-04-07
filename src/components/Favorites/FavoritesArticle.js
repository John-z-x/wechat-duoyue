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
                    <Link to={`/everyday/${item.articleId}/display`} key={item.articleId}>
                      <div className="favorites-article clearfix">
                        <div className="title">{item.title}</div>
                        <div className="delete" onClick={() => this.deleteFavoritesArticle(item.articleId)}></div>
                      </div>
                    </Link>
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