import IResult from "../interfaces/IResult";

import {Intro} from '../texts/intro';
import {WorkExperience} from '../texts/workExperience';
import {Education} from '../texts/education';
import {ILink, Links} from '../texts/links';
import {Skills} from '../texts/skills';
import {FreeTime} from '../texts/freeTime';
import Search from '../texts/search';

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

const type = {
    [GET_TYPE_OF_RESUME]: GET_TYPE_OF_RESUME,
    [FETCH_SEARCH_MESSAGE]: FETCH_SEARCH_MESSAGE,
    [TURN_OFF_ANIMATION]: TURN_OFF_ANIMATION,
    [FETCH_LINKS]: FETCH_LINKS,
    [FETCH_INTRO]: FETCH_INTRO,
    [FETCH_EXPERIENCE]: FETCH_EXPERIENCE,
    [FETCH_EDUCATION]: FETCH_EDUCATION,
    [FETCH_SKILLS]: FETCH_SKILLS,
    [FETCH_FREE_TIME]: FETCH_FREE_TIME,
    [FETCH_CONTACT]: FETCH_CONTACT,
    [SET_DETAIL]: SET_DETAIL,
}

type Type = keyof typeof type;

export interface Action<T> {
    type: Type;
    payload: T;
}

/** On initial load will fetch message which will be inserted into
 *  the search bar.
 */
export function fetchSearchMessage(): Action<Search> {
    return {
        type: FETCH_SEARCH_MESSAGE,
        payload: new Search(),
    };
}

export function set4ReduxTypeOfResume(typeOfResume: string): Action<string> {
    return {
        type: GET_TYPE_OF_RESUME,
        payload: typeOfResume,
    };
}

export function turnOffAnimation(): Action<boolean> {
    return {
        type: TURN_OFF_ANIMATION,
        payload: true,
    };
}

export function fetchLinks(): Action<Array<ILink>> {
    return {
        type: FETCH_LINKS,
        payload: Links,
    };
}

export function fetchIntro(): Action<IResult> {
    return {
        type: FETCH_INTRO,
        payload: new Intro(),
    };
}

export function fetchWorkExperience(): Action<IResult> {
    return {
        type: FETCH_EXPERIENCE,
        payload: new WorkExperience(),
    };
}

export function fetchEducation(): Action<IResult> {
    return {
        type: FETCH_EDUCATION,
        payload: new Education(),
    };
}

export function fetchSkills(): Action<IResult> {
    return {
        type: FETCH_SKILLS,
        payload: new Skills(),
    };
}

export function fetchFreeTime(): Action<IResult> {
    return {
        type: FETCH_FREE_TIME,
        payload: new FreeTime(),
    };
}

export function setDetail<T>(payload: T): Action<T> {
    return {
        type: SET_DETAIL,
        payload: payload,
    };
}
