/*
 * Created on 2016-04-14 9:07
 *
 * By Susan Su
 */

'use strict';
//bookVo && favoritesBO && bookCatalogBo

class BookDetail {
  constructor(json) {
    this.id = json.id;
    this.href = BookDetail.createHref(json.id);
    this.bookPic = json.book_pic;
    this.author = json.author || "";
    this.publishHouse = json.publishHouse || "";
    this.publishDate = json.publish_date || null;
    this.isbn = json.ISBN || "";
    this.desc = json.desc || "";
    this.title = json.title || "";
    this.price = this.price || 0;
    this.ebookPrice = json.ebook_price || "";
    this.dtitle = json.dtitle || "";
    this.isFavor = json.isFavor || false;
    this.bookCataLogTreeHTML = json.bookCataLogTreeHTML || "";
  }
  
  static createHref = (bookid) => {
    let id = bookid || -1;
    return `/danpin/bookbuy/${id}`
  }
}

export default BookDetail;