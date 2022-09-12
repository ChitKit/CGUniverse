import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import filterSortReducer from './filterSortReducer';
import likeReducer from './likeReducer';
import modelReducer from './modelReducer';
import sortReducer from './sortReducer';


const rootReducer = combineReducers({

  auth: authReducer,
  comment: commentReducer,
  model: modelReducer,
  like: likeReducer,
  filterModel: filterSortReducer,
  sort: sortReducer,

});

export default rootReducer;
