export interface INavigation {
  name:string;
  url:string;
  title:string;
  priority?:string,
  type?:string
}

export const Navigations: Array<INavigation> = [
  {
    name:'Search',
    url:'',
    title:'Look below to get to know me better',
  },
  {
    name:'Go to Resume',
    // view only link to drive
    url:'https://docs.google.com/document/d/14LYgHpDHqbICLIP2PR2bUVdlP2QYOa_xBrMAM9U05ec/edit?usp=sharing',
    title:'Download Resume as PDF'
  },
];
