import { combineReducers } from 'redux';
import globalReducer from './global';
import detailReducer from './detail';

const rootReducer = combineReducers({
  global: globalReducer,
  detail: detailReducer,
});

export default rootReducer;