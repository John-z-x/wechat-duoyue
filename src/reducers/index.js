import { combineReducers } from 'redux';
import cover from './cover';
import cart from './cart';
import source from './source';
import { routerReducer as routing } from 'react-router-redux';


const rootReducer = combineReducers({
	cover,
	cart,
	source,
	routing
})

export default rootReducer;