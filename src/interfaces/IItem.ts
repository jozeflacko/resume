import ILink from "./ILink";

export default interface IItem {
    id?: string | number;
    name?: string;
    subname?: string;
    place?: string;
    from?: string;
    to?: string;
    logos?: string[];
    description?: string;
    www?: string;
    notes?: string;
    links?: ILink[];
    video?: string;
    github?: string;
    image?: string;
}