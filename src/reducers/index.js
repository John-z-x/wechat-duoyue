import { combineReducers } from 'redux';
import cover from './cover';
import cart from './cart';
import source from './source';
import comment from './comment';
import { routerReducer as routing } from 'react-router-redux';


const rootReducer = combineReducers({
	cover,
	cart,
	source,
	comment,
	routing
})

export default rootReducer;