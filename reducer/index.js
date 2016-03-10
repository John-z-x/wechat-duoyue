import { combineReducers } from 'redux';
import cover from './cover';
import data from './data';
import source from './source';
import { routerReducer as routing } from 'react-router-redux';


const rootReducer = combineReducers({
	cover,
	data,
	source,
	routing
})

export default rootReducer;