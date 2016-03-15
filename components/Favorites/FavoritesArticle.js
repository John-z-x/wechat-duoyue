import React from 'react';

class FavoritesArticle extends React.Component {
	deleteFavoritesArticle(id) {
		if(confirm("确定要删除吗？")){
			alert('删除成功！'+ id);
		}
	}
	render() {
		return (
			<div className="FavoritesArticle">
				<div className="article-box">
	        { this.props.data.articleData.map((item,i) => {
		          return (
		            <div className="favorites-article clearfix" key={item.articleId}>
		          		<div className="title">{item.title}</div>
		          		<div className="delete" onClick={() => this.deleteFavoritesArticle(item.articleId)} ></div>
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