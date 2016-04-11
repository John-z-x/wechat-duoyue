import React , { PropTypes }from 'react';
import BookListItem from './BookListItem';

class BookListContent extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }
	render() {
    let bookListContent;
    if(!this.props.data) {
      bookListContent = null;
    }else {
      bookListContent = this.props.data.map( (item, index) => {
        return(
          <div key={index}>
            <div className="mobile-book-title">{item.title}</div>
            <div className="book-list-item clearfix">
              {
                item.booklist.map( (item, index) => {
                  return (
                      <BookListItem  data={item} key={index}/>
                  );
                })
              }
            </div>
          </div>
        )
      })
    }
		return(
  		<div className="BookListContent">
  			{bookListContent}
  		</div>
		);
	}
}

export default BookListContent;