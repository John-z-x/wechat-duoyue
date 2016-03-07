import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function(initialState) {

  const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, createLogger()) );
  //console.log(store);
  if(module.hot) {

    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer').default;
      store.replaceReducer(nextReducer);
    })
  }

  return store;
}