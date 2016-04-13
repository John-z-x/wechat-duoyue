import React from 'react';
import { Link } from 'react-router';

class BookItem extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="BookItem">
        <Link to={data.href}>
          <div className="bookitem-wrap">
            <div className="news-img-container">
              <img src={data.src} alt={data.name} title={data.name}/>
            </div>
          </div>
          <span className="book-title">{data.title}</span>
          <span className="book-price">{data.price}</span>
        </Link>
      </div>
    );
  }
}
export default BookItem;