import { combineReducers } from 'redux';
import cover from './cover';
import cart from './cart';
import source from './source';
import comment from './comment';
import everyday from './everyday';
import slide from './slide';
import danpin from './danpin';
import shop from './shop';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
	danpin,
	shop,
	cover,
	cart,
	source,
	comment,
  everyday,
  slide,
	routing
});

export default rootReducer;