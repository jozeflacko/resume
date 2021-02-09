export const sectionDivider = "#";
export const subsectionDivider = ":_";

export const setSubsection = (name) => {
    history.replaceState(null, null, "#what'snew:_" + name); // todo FIX
}

const getSubsection = () => {
    const subsection = (location.hash).split(subsectionDivider)[1];
    if (subsection === "" || subsection === null || subsection === undefined) {
        return null;
    } else {
        return subsection;
    }
}

export const getSectionWithoutSubsection = (withoutHash:boolean = false) => {
    let section = (location.hash).split(subsectionDivider)[0];
    if (section === "" || section === null || section === undefined) {
        return null;
    } else {
        if(withoutHash === true && section.indexOf(sectionDivider) > -1) {
            section = section.replace(sectionDivider,'');
        }
        
        return section;
    }
}

export const isThisCurrentSubSection = (name) => {
    return name === getSubsection() && name !== null && name !== undefined;
}

export const setSection = (name) => {
    if(typeof name === 'string') {        
        name =  name ? sectionDivider + name : sectionDivider;
        history.replaceState(null, null, location.pathname + name);
    }
}

export const removeSubSectionAndKeesSection = () => {
    setSection(getSectionWithoutSubsection(true));
}