import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';

const debug = process.env.NODE_ENV !== 'production';
const middlewares = debug ? [ thunk, logger(), routerMiddleware(history) ] : [ thunk, routerMiddleware(history)];

export default function configureStore(history, initialState) {

  const store = createStore(
      rootReducer,
      initialState,
      compose(
          applyMiddleware(...middlewares)
      )
  )

  if(module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    })
  }

  return store;
}