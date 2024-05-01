// reducers/index.js
import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  jobs: jobReducer,
  filters: filterReducer
});
