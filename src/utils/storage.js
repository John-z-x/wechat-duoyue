/*
 * Created on 2016-04-06 10:04
 *
 * By Susan Su
 */

'use strict';
export function put (key, value) {
  window.localStorage.setItem(key, value)
}

export function get (key) {
  return window.localStorage.getItem(key)
}

export function remove (key) {
  return window.localStorage.removeItem(key)
}

export function clear () {
  window.localStorage.clear()
}
