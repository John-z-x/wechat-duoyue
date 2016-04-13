import { combineReducers } from 'redux';
import bookType from './bookType';
import bookList from './bookList';
import sliderList from '../sliderList';

const danpinReducer = combineReducers({
  bookType,
  bookList,
  sliderList
});

export default danpinReducer;