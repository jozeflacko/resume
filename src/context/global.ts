import * as React from "react";
import {getEducation, getIntro, getNavigations, getSearch, getSkills, getWorkExperience} from "../actions";

export const global = {
    getSearch,
    getNavigations,
    getIntro,
    getWorkExperience,
    getEducation,
    getSkills,
};

export const Global = React.createContext(global);

export function useGlobal() {

    return React.useContext(Global);
}