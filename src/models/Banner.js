/*
 * Created on 2016-04-13 19:07
 *
 * By Susan Su
 */

'use strict';

class Banner {
  constructor(json) {
    this.id = json.id || 0;
    this.href = Banner.createHref(json.url, json.target);
    this.url = json.fileurl;
    this.title = json.title;
  }

  static createHref(url, target) {
    if( !(url && target) ) return null;
    return `${url}${target}`;
  }
}

export default Banner;