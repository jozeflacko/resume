import {isDesktop} from './BrowserUtils';
import * as AddressBarUtils from './AddressBarUtils';

let isInstalled: boolean = false;
let classNameForWhichToSearch: string | null = null;
let callbackOnMatch: ((el: any) => void) | null = null;
let classNameOfParentElementOnWhichToSetCurrentClass: string | null = null;
let desktopScrollElement: any = null;
let mobileScrollElement: any = null;
let oldName: string = "";

export const getCurrentItemClass = () => "currently-visible";

export const whatIsInViewport = () => {

    const scrollElement = isDesktop() ? desktopScrollElement : mobileScrollElement;

    if (isDesktop() === false) {
        AddressBarUtils.removeSubSectionAndKeesSection(); // TODO MOVE OUT
    }

    if (!scrollElement) {
        return;
    }

    if (classNameForWhichToSearch === null) {
        return;
    }

    let els: HTMLCollectionOf<any> = document.getElementsByClassName(classNameForWhichToSearch);
    let inViewport: any = null;

    if (els != null || (els as any[]).length > 0) {

        for (let i = 0; i < els.length; i++) {
            let el = els[i];

            let top = el.offsetTop;

            let height = el.offsetHeight;

            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
            }

            const result = (
                top < (scrollElement.pageYOffset + scrollElement.innerHeight) &&
                (top + height) > scrollElement.pageYOffset
            );

            if (result === true && inViewport === null) {
                inViewport = els[i];
            }
        }

        if (inViewport) {
            const name = inViewport.getAttribute("id");
            if (name !== oldName) {
                oldName = name;
                removeCurrentClass();
                addCurrentClass(inViewport, classNameOfParentElementOnWhichToSetCurrentClass);
                if (callbackOnMatch !== null) {
                    callbackOnMatch(inViewport);
                }
            }
        }
    }
}

function addCurrentClass(element, parentElementClassWhereToSetClassCurrent) {
    element.closest("." + parentElementClassWhereToSetClassCurrent).classList.add(getCurrentItemClass());
}

function removeCurrentClass() {
    const old = document.getElementsByClassName(getCurrentItemClass());
    if (old && old[0]) {
        old[0].classList.remove(getCurrentItemClass());
    }
}

/**
 * To be able to use it all elements on which will be this class must have a unique ID! attribute
 */
export const installViewportListener = (
    _classNameForWhichToSearch: string,
    _classNameOfPerentElementOnWhichToSetCurrentClass: string,
    _callbackOnMatch: (el: any) => void,
    _desktopScrollElement: any,
    _mobileScrollElement: any
) => {
    if (isInstalled === false) {
        classNameForWhichToSearch = _classNameForWhichToSearch;
        classNameOfParentElementOnWhichToSetCurrentClass = _classNameOfPerentElementOnWhichToSetCurrentClass;
        callbackOnMatch = _callbackOnMatch;
        desktopScrollElement = _desktopScrollElement;
        mobileScrollElement = _mobileScrollElement; // we will not listen to scroll. only scroll when we load some link

        if (desktopScrollElement) {
            desktopScrollElement.addEventListener("scroll", whatIsInViewport);
        }
        isInstalled = true;
    }
}

export const uninstallViewportListener = () => {
    if (isInstalled === true) {
        classNameForWhichToSearch = null;
        classNameOfParentElementOnWhichToSetCurrentClass = null;
        callbackOnMatch = null;

        // FIXME: dirty hack: getting compilation error: object possibly undefined
        const whatIsViewport = (this as any).whatIsInViewport;

        if(whatIsViewport != null) {
            if(desktopScrollElement != null) {
                desktopScrollElement.removeEventListener("scroll", whatIsViewport);
            }
        }

        oldName = "";
        isInstalled = false;
        removeCurrentClass();
    }
}

function doScroll(onWhat, howMuch) {
    onWhat.scroll({top: howMuch});
    onWhat.scrollTo(undefined, howMuch); // EDGE support
}


export const scrollToItemVisibleViewportItem = () => {
    let els: any = document.getElementsByClassName(getCurrentItemClass());
    if (els && els[0]) {
        let el = els[0];
        let top = el.offsetTop;
        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
        }
        doScroll(isDesktop() ? desktopScrollElement : mobileScrollElement, top - 50);
    }
}