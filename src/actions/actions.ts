import {Intro} from '../texts/intro';
import {WorkExperience} from '../texts/workExperience';
import {Education} from '../texts/education';
import {INavigation, Navigations} from '../texts/navigations';
import {Skills} from '../texts/skills';
import Search from '../texts/search';
import {IResult} from "../interfaces";

let search: Search | null = null;

export function getSearch(animate?: boolean) {
    return search = !!search ? search : new Search(animate);
}

export function getIntro(): IResult {
    return new Intro();
}

export function getWorkExperience(): IResult {
    return new WorkExperience();
}

export function getEducation(): IResult {
    return new Education();
}

export function getSkills(): IResult {
    return new Skills();
}

export function getNavigations(): INavigation[] {
    return Navigations;
}