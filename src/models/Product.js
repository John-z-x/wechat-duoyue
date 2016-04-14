
'use strict';

class PdoductList {
  constructor(json) {
    this.id = json.id;
    this.proName = json.pro_name;
    this.proDesc = json.pro_desc;
    this.proPrice = json.pro_price;
    this.proRefPrice = json.pro_ref_price;
    this.proMarketM = json.pro_market_mony;
    this.proInfo = json.pro_info;
    this.isVirtual = json.isvirtual || 0;
    this.proPic1 = json.pro_pic1;

    this.href = PdoductList.createHref(json.id) || "";
  }

  static createHref = (productId) => {
    const id = productId || -1;
    return `/shop/goodsbuy/${id}`;
  }
}

export default PdoductList;