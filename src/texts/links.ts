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
    name:'Gallery',
    url:'https://drive.google.com/open?id=1yxqAIUM_dQu4XY7D4tUk9mZfP426lSUG',
    title:'Want to see cool pictures?',

  },
  {
    name:'Download Resume',
    url:'../assets/pdf/Resume_Jozef_Lacko_2019.pdf',
    title:'Download Resume as PDF'
  },
];
