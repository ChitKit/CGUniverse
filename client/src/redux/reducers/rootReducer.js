import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import filterSortReducer from './filterSortReducer';
import likeReducer from './likeReducer';
import modelReducer from './modelReducer';
import sortReducer from './sortReducer';
import oneModelReducer from './oneModelReducer';
import searchReducer from './searchReducer';



const rootReducer = combineReducers({

  auth: authReducer,
  comment: commentReducer,
  model: modelReducer,
  like: likeReducer,
  onemodel: oneModelReducer,
  filterModel: filterSortReducer,
  sort: sortReducer,
  search: searchReducer,
});

export default rootReducer;
