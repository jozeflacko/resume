import {Intro} from '../texts/intro';
import {WorkExperience} from '../texts/workExperience';
import {Education} from '../texts/education';
import {Navigations} from '../texts/navigations';
import {Skills} from '../texts/skills';
import Search from '../texts/search';
import * as React from "react";

export function useSearch() {
    return useState(() => new Search());
}

export function useIntro() {
    return useState(() => new Intro());
}

export function useSkills() {
    return useState(() => new Skills());
}

export function useWorkExperience() {
    return useState(() => new WorkExperience());
}

export function useEducation() {
    return useState(() => new Education());
}

export function useNavigations() {
    return useState(() => Navigations);
}

function useState<T>(constructor: () => T) {
    const [controller] = React.useState(constructor());
    return controller;
}