import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import InformationReducer from './reducer_information';

const reducers = {
  search: SearchReducer,
  information: InformationReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
