import { combineReducers } from 'redux'
import cover from './cover.js'
import data from './data.js'


const rootReducer = combineReducers({
	cover, data
})

export default rootReducer