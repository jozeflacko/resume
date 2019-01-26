let isInstalled: boolean = false;

let classNameForWhichToSearch: string = null;
let callbackOnMatch: (el: any) => void = null;
let classNameOfPerentElementOnWhichToSetCurrentClass: string = null;
let oldName: string = "";

export const getCurrentItemClass = () => {
    return "currently-visible";
}

export const whatIsInViewport = () => {
   
    if(classNameForWhichToSearch === null) {
        return;
    }

    let els: HTMLCollectionOf<any> = document.getElementsByClassName(classNameForWhichToSearch);
    let inViewport: any = null;

   

    if (els !== null || els !== undefined || els.length > 0) {

      for (let i = 0; i < els.length; i++) {
        var el = els[i];

        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }

        const result = (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
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
      _callbackOnMatch: (el:any)=>void
    ) => {   
    if(isInstalled === false) {
      classNameForWhichToSearch = _classNameForWhichToSearch;
      classNameOfPerentElementOnWhichToSetCurrentClass = _classNameOfPerentElementOnWhichToSetCurrentClass;
      callbackOnMatch = _callbackOnMatch;
      window.addEventListener("scroll", whatIsInViewport);
      isInstalled = true;
      console.log("installViewportListener");
    }
  }

  export const uninstallViewportListener = () => {
    if(isInstalled === true) {
      classNameForWhichToSearch = null;
      classNameOfPerentElementOnWhichToSetCurrentClass = null;
      callbackOnMatch = null;
      window.removeEventListener("scroll", this.whatIsInViewport);
      oldName = "";
      isInstalled = false;
      removeCurrentClass();
      console.log("uninstallViewportListener");
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
      window.scroll({
        top: top - 50,      
        behavior: 'smooth'
      });
    }    
  }