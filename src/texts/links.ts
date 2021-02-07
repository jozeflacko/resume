export interface ILink {
  name:string;
  url:string;
  title:string;
  priority?:string,
  type?:string
}

export const Links: Array<ILink> = [
  {
    name:'Search',
    url:'',
    title:'Look below to get to know me better',
  },
  {
    name:'Download Resume',
    url:'../assets/pdf/Jozef_Lacko_English_Deutsch.pdf',
    title:'Download Resume as PDF'
  },
];
