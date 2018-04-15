import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import InformationReducer from './reducer_information';
import TypeReducer from './reducer_type';

const reducers = {
  search: SearchReducer,
  information: InformationReducer,
  type: TypeReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
