'use strict';

class News {
  constructor(json) {
    this.id = json.id;
    this.title = json.title;
    this.pic = json.pic;
    this.info = json.info || "";
    this.author = json.author;
  }
}

export default News;