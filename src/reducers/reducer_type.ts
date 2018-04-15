import { GET_TYPE_OF_RESUME } from '../actions';
import ActionI from '../interfaces/ActionI';

export default function (state = {}, action: ActionI) {

  switch (action.type) {
    case GET_TYPE_OF_RESUME:
      const newState =  {...state, typeOfResume: action.payload };    
      return newState;
    default:   
      return state;
  }
}
