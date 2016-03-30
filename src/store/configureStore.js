import { createStore, applyMiddleware, compose, } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configurestore(history) {

  const store = createStore(
  	rootReducer,
    compose(
        applyMiddleware(
            thunkMiddleware,
            //createLogger(),
            routerMiddleware(history)
        ) )
    )

  //console.log(store);

  if(module.hot) {

    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    })
  }

  return store;
}