export const sectionDivider = "#";
export const subsectionDivider = ":_";

export const setSubsection = (name: string) => {
    history.replaceState(null, '', "#what'snew:_" + name);
}

const getSubsection = () => {
    const subsection = (location.hash).split(subsectionDivider)[1];
    return (subsection === "" || subsection === null || subsection === undefined) ? null : subsection;
}

export const getSectionWithoutSubsection = (withoutHash: boolean = false) => {
    let section = (location.hash).split(subsectionDivider)[0];
    if (section === "" || section == null) {
        return null;
    }
    if (withoutHash === true && section.indexOf(sectionDivider) > -1) {
        return section.replace(sectionDivider, '');
    }
    return section;
}

export const isThisCurrentSubSection = (name: string) => name === getSubsection() && name != null;

export const setSection = (name: string | null) => {
    name = name ? sectionDivider + name : sectionDivider;
    history.replaceState(null, '', location.pathname + name);
}

export const removeSubSectionAndKeesSection = () => {
    setSection(getSectionWithoutSubsection(true))
};