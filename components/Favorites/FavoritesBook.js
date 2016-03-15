import React from 'react';

class FavoritesBook extends React.Component {

  deleteFavoritesBook(id) {
    if(confirm("确定要删除吗？")){
      alert('删除成功！'+ id);
    }
  }
	render() {
		return (
			<div className="FavoritesBook">
				<div  className="book-box"  >
          <div className="clearfix my-books" >
            { this.props.data.bookData.map((item,i) => {
                return (
                  <div className="book-itme" key={item.bookId}>
                    <a href="" >
                       <img src={item.src} alt="book-img" className="book-img"/>
                       <div className="book-name">{item.bookName}</div>
                    </a>
                    <div className="book-delete" onClick={() => this.deleteFavoritesBook(item.bookId)}>删除</div>
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