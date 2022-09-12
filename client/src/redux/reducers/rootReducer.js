import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import FarstModelsReducer from './farstModelsReducer';
import likeReducer from './likeReducer';
import modelReducer from './modelReducer';
import secondModelsReducer from './secondModelsReducer';


const rootReducer = combineReducers({

  auth: authReducer,
  comment: commentReducer,
  model: modelReducer,
  like: likeReducer,
  FModels: FarstModelsReducer,
  SModels: secondModelsReducer,

});

export default rootReducer;
