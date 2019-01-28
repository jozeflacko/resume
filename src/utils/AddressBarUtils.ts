export const sectionDivider = "#";
export const subsectionDivider = ":_";

export const setSubsection = (name) => {
    history.replaceState(null, null, "#what'snew:_" + name);
}

const getSubsection = () => {
    const subsection = (location.hash).split(subsectionDivider)[1];
    if (subsection === "" || subsection === null || subsection === undefined) {
        return null;
    } else {
        return subsection;
    }
}

export const getSectionWithoutSubsection = () => {
    const section = (location.hash).split(subsectionDivider)[0];
    if (section === "" || section === null || section === undefined) {
        return null;
    } else {
        return section;
    }
}

export const isThisCurrentSubSection = (name) => {
    return name === getSubsection() && name !== null && name !== undefined;
}

export const setSection = (name) => {
    name =  name ? sectionDivider + name : sectionDivider;
    history.replaceState(null, null, location.pathname + name);
}
