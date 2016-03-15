import React from 'react';
import SaveBook from '../../components/PageUserMenu/SaveBook';


class FavoritesBook extends React.Component {

	render() {
		return (
			<div className="FavoritesBook">
				<div  className="book-box"  >
          <div className="clearfix my-books" >
            { this.props.data.bookData.map(function(item,i){
                return (
                  <div className="book-itme" key={i}>
                    <a href="" >
                       <img src={item.src} alt="book-img" className="book-img"/>
                       <div className="book-name">{item.bookName}</div>
                    </a>
                    <div className="book-delete">删除</div>
                  </div>                
                );
              }
              )
            }
          </div>
   			 </div>
			</div>
		);
	}
}

export default FavoritesBook;