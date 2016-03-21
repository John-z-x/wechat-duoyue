/*
 * Created on 2016-03-17 14:57
 *
 * By Susan Su
 */

'use strict';

const Utils = {
  bindMethods(thisObject,...methods){
    methods.forEach((method)=> {
      thisObject[method] = thisObject[method].bind(thisObject);
    });
  }
};

export default Utils;