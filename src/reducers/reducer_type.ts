import {GET_TYPE_OF_RESUME} from '../actions';
import IAction from '../interfaces/IAction';

export default function (state = {}, action: IAction) {

    switch (action.type) {
        case GET_TYPE_OF_RESUME:
            const newState = {...state, typeOfResume: action.payload};
            return newState;
        default:
            return state;
    }
}
