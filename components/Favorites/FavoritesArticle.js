import React from 'react';


class FavoritesArticle extends React.Component {
	render() {
		return (
			<div className="Favoritesarticle">
				<div className="article-box">
	        { this.props.data.articleData.map(function(item,i) {
		          return (
		            <div className="favorites-article clearfix" key={i}>     
		          		<div className="title">{item.title}</div>
		          		<div className="detele" ></div>        
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