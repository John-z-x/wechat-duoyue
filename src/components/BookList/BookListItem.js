import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './BookListItem.scss';

@withStyles(styles)
class BookListItem extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="BookItem">
        <img src={data.imgUrl} className="book-img"/>
        <span className="book-title">{data.name}</span>
        <span className="book-price">{data.price}</span>
      </div>
    );
  }
}

export default BookListItem;