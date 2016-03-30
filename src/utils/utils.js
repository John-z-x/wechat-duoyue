/*
 * Created on 2016-03-17 14:57
 *
 * By Susan Su
 */

'use strict';

const Utils = {
  bindMethods(thisObject,...methods) {
    methods.forEach((method)=> {
      thisObject[method] = thisObject[method].bind(thisObject);
    });
  },
  timeFormat(time) {
    let hours, minutes, seconds;
    let intTime = Math.floor(time);
    hours = Math.floor(intTime/3600);
    minutes = Math.floor(intTime/60%60);
    seconds = intTime%60;
    return {
      hours: hours,
      minutes: (minutes > 9) ? minutes : "0"+minutes,
      seconds: (seconds > 9) ? seconds : "0"+seconds
    }
  }
};

export default Utils;