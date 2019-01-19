export const GET_TYPE_OF_RESUME = 'type_of_resume';
export const FETCH_SEARCH_MESSAGE = 'search_message';
export const TURN_OFF_ANIMATION = 'turn_off_animation';
export const FETCH_LINKS = 'fetch_links';
export const FETCH_INTRO = 'fetch_intro';
export const FETCH_EXPERIENCE = 'fetch_experience';
export const FETCH_EDUCATION = 'fetch_education';
export const FETCH_SKILLS = 'fetch_skills';
export const FETCH_FREE_TIME = 'fetch_free_time';
export const FETCH_CONTACT = 'fetch_contact';
export const SET_DETAIL = 'set_detail';
import { Intro } from '../texts/intro';
import { WorkExperience } from '../texts/workExperience';
import { Education } from '../texts/education';
import { Links } from '../texts/links';
import { Skills } from '../texts/skills';
import { FreeTime } from '../texts/freeTime';
import Search from '../texts/search';

/** On initial load will fetch message which will be inserted into
 *  the search bar.
 */
export function fetchSearchMessage() {
  return {
    type: FETCH_SEARCH_MESSAGE,
    payload: new Search(),
  };
}
export function set4ReduxTypeOfResume(typeOfResume) {
  return {
    type: GET_TYPE_OF_RESUME,
    payload: typeOfResume,
  };
}

export function turnOffAnimation() {
  return {
    type: TURN_OFF_ANIMATION,
    payload: true,
  };
}

export function fetchLinks(payload: {}) {
  return {
    type: FETCH_LINKS,
    payload: Links,
  };
}

export function fetchIntro() {
  return {
    type: FETCH_INTRO,
    payload: new Intro(),
  };
}

export function fetchWorkExperience() {
  return {
    type: FETCH_EXPERIENCE,
    payload: new WorkExperience(),
  };
}

export function fetchEducation() {
  return {
    type: FETCH_EDUCATION,
    payload: new Education(),
  };
}

export function fetchSkills() {
  return {
    type: FETCH_SKILLS,
    payload: new Skills(),
  };
}

export function fetchFreeTime() {
  return {
    type: FETCH_FREE_TIME,
    payload: new FreeTime(),
  };
}

export function setDetail(payload: {}) {
  return {
    type: SET_DETAIL,
    payload: payload,
  };
}
