import { FETCH_SEARCH_MESSAGE, TURN_OFF_ANIMATION } from '../actions';
import ActionI from '../interfaces/ActionI';
import RISearch from "./interfaces/RISearch";

const reducer = (state: RISearch = {message: null, animate: false}, action: ActionI) => {

  switch (action.type) {
    case FETCH_SEARCH_MESSAGE:
      return ( state.message !== null ) ? state : {
        ...state,
        message: action.payload.getMessage(),
        animate: true
      };
    case TURN_OFF_ANIMATION:
      return {
      ...state,
      animate: false
    };
    default:
      return state;
  }
}
export default reducer;
