import React from 'react';
import { Link } from 'react-router';

class BookItem extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="BookItem">
        <Link to={data.href}>
          <img src={data.src} width="70%" alt={data.name}/>
          <span className="book-title">{data.title}</span>
          <span className="book-price">{data.price}</span>
        </Link>
      </div>
    );
  }
}
export default BookItem;