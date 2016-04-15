import React from 'react';
import { Link } from 'react-router';

class BookListItem extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Link className="BookListItem" to={data.href}>
        <div className="book-img-container">
          <img src={data.bookPic} alt="书籍封面" title="书籍封面" className="book-img"/>
        </div>
        <span className="book-title">{data.title}</span>
        <span className="book-price">{data.price}</span>
      </Link>
    );
  }
}

export default BookListItem;