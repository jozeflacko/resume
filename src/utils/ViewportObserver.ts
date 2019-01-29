import {isDesktop} from './BrowserUtils';

let isInstalled: boolean = false;

let classNameForWhichToSearch: string = null;
let callbackOnMatch: (el: any) => void = null;
let classNameOfPerentElementOnWhichToSetCurrentClass: string = null;
let desktopScrollElement: any = null;
let mobileScrollElement: any = null;
let oldName: string = "";
import * as AddressBarUtils from './AddressBarUtils';

export const getCurrentItemClass = () => {
    return "currently-visible";
}

export const whatIsInViewport = () => {
   
    const scrollElement = isDesktop() ? desktopScrollElement : mobileScrollElement;

    if(isDesktop() === false) {
      AddressBarUtils.removeSubSectionAndKeesSection(); // TODO MOVE OUT
    }

    if(!scrollElement) {
        return;
    }

    if(classNameForWhichToSearch === null) {
        return;
    }

    let els: HTMLCollectionOf<any> = document.getElementsByClassName(classNameForWhichToSearch);
    let inViewport: any = null;   

    if (els !== null || els !== undefined || els.length > 0) {

      for (let i = 0; i < els.length; i++) {
        var el = els[i];

        var top = el.offsetTop;     
  
        var height = el.offsetHeight;

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
          addCurrentClass(inViewport, classNameOfPerentElementOnWhichToSetCurrentClass); 
          if(callbackOnMatch !== null) {
              callbackOnMatch(inViewport);
          }
        }
      } 
    }
  }

  function addCurrentClass(element, parentElementClassWhereToSetClassCurrent) {
    element.closest("."+parentElementClassWhereToSetClassCurrent).classList.add(getCurrentItemClass());
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
      _callbackOnMatch: (el:any)=>void,
      _desktopScrollElement: any,
      _mobileScrollElement: any
    ) => {   
    if(isInstalled === false) {
      classNameForWhichToSearch = _classNameForWhichToSearch;
      classNameOfPerentElementOnWhichToSetCurrentClass = _classNameOfPerentElementOnWhichToSetCurrentClass;
      callbackOnMatch = _callbackOnMatch;
      desktopScrollElement = _desktopScrollElement;
      mobileScrollElement = _mobileScrollElement;

      if(desktopScrollElement)
        desktopScrollElement.addEventListener("scroll", whatIsInViewport);      
      if(mobileScrollElement)
        mobileScrollElement.addEventListener("scroll", whatIsInViewport);
     
      isInstalled = true;
    }
  }

  export const uninstallViewportListener = () => {
    if(isInstalled === true) {
      classNameForWhichToSearch = null;
      classNameOfPerentElementOnWhichToSetCurrentClass = null;
      callbackOnMatch = null;      

      if(desktopScrollElement)
        desktopScrollElement.removeEventListener("scroll", this.whatIsInViewport);
      if(mobileScrollElement)
        mobileScrollElement.removeEventListener("scroll", this.whatIsInViewport);       
     
      oldName = "";
      isInstalled = false;
      removeCurrentClass();
    }
  }

  export const scrollToItemVisibleViewportItem = () => {
    let els:any = document.getElementsByClassName(getCurrentItemClass());
    if(els && els[0]) {
      let el = els[0];
      let top = el.offsetTop;
      while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;      
      }
      if(isDesktop()) {
        if(desktopScrollElement)
          desktopScrollElement.scroll({
            top: top - 50,      
          });
      } else {
        if(mobileScrollElement)
          mobileScrollElement.scroll({
            top: top - 50,      
          });
      }
      
    }    
  }