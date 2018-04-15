import { FETCH_LINKS, FETCH_INTRO, FETCH_EXPERIENCE, FETCH_EDUCATION, FETCH_SKILLS, FETCH_FREE_TIME, FETCH_CONTACT, SET_DETAIL } from '../actions';
import ActionI from '../interfaces/ActionI';

export default function (state = {}, action: ActionI) {

  switch (action.type) {
    case FETCH_LINKS:
    return {...state, links: action.payload };
    case FETCH_LINKS:
      return {...state, links: action.payload };
    case FETCH_INTRO:
      return {...state, intro: action.payload, detail: action.payload };
    case FETCH_EXPERIENCE:
      return {...state, experience: action.payload };
    case FETCH_EDUCATION:
      return {...state, education: action.payload };
    case FETCH_SKILLS:
      return {...state, skills: action.payload };
    case FETCH_FREE_TIME:
      return {...state, freeTime: action.payload };
    case FETCH_CONTACT:
      return {...state, contact: action.payload };
    case SET_DETAIL:
      return {...state, detail: action.payload};
    default:
      return state;
  }
}
