/*
 * Created on 2016-04-13 18:59
 *
 * By Susan Su
 */

'use strict';

import cookie from 'react-cookie';

let ROOT = '/';

export function set (name, value, opt = { path: ROOT}) {
  cookie.save(name, value, opt);
}

export function get (name, defaultValue = null) {
  return cookie.load(name) || defaultValue;
}

export function remove (names, path = ROOT) {
  if(Array.isArray(names)){
    names.forEach((name) => {
      cookie.remove(name, path);
    });
  }else {
    cookie.remove(names, path);
  }
}
