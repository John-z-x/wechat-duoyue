import { combineReducers } from 'redux';
import cover from './cover.js';
import data from './data.js';
import { routerReducer as routing } from 'react-router-redux';


const rootReducer = combineReducers({
	cover,
	data,
	routing
})

export default rootReducer;