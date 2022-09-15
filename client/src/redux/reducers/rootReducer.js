import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import FarstModelsReducer from './farstModelsReducer';
import likeReducer from './likeReducer';
import modelReducer from './modelReducer';
import secondModelsReducer from './secondModelsReducer';
import filterSortReducer from './filterSortReducer';
import sortReducer from './sortReducer';
import oneModelReducer from './oneModelReducer';
import searchReducer from './searchReducer';
import postReducer from './postReducer';
import categoryReducer from './categoryReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  comment: commentReducer,
  model: modelReducer,
  like: likeReducer,
  FModels: FarstModelsReducer,
  SModels: secondModelsReducer,
  onemodel: oneModelReducer,
  filterModel: filterSortReducer,
  sort: sortReducer,
  search: searchReducer,
  category: categoryReducer,
  posts: postReducer,
});

export default rootReducer;
