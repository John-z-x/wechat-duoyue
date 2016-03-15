import React from 'react';

class BookListItem extends React.Component {
  render() {
    const data = this.props.data;
		return (
      <a href={data.Poster} >
        <div className="book-item">
          <div className = "item-content" >
            <div ><img src={data.Src} width="100%"/></div>
            <div className="book-name">{data.Title}</div>
            <div className="book-price">￥{data.Price}</div>
          </div>
        </div>
      </a>
		);
	}
}

export default BookListItem;