/*
 * Created on 2016-04-13 19:07
 *
 * By Susan Su
 */

'use strict';

class ProductType {
  constructor(json) {
    this.id = json.id;
    this.typeName = json.type_name;
    this.typeIcon = json.type_icon;
  }
}

export default ProductType;