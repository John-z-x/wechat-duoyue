import { combineReducers } from 'redux';
import cover from './cover';
import data from './data';
import { routerReducer as routing } from 'react-router-redux';


const rootReducer = combineReducers({
	cover,
	data,
	routing
})

export default rootReducer;