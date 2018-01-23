export interface ILink {
  name:string;
  url:string;
  title:string;
  priority?:string,
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
    name:'Github',
    url:'https://github.com/opam',
    title:'I use my Github only for study',
    priority: 'low',
  },
  {
    name:'Facebook',
    url:'https://www.facebook.com/jozef.lacko.33',
    title:'Facebook',
    priority: 'low',
  },
  {
    name:'LinkedIn',
    url:'https://www.linkedin.com/in/jozeflacko/',
    title:'LinkedIn',
    priority: 'low',
  },
  {
    name:'Docs to Print',
    url:'https://docs.google.com/document/d/1_w972PQnwHwLr0fVTI3d4FHgWQlOS3dY6IM-i2dthyQ/edit?usp=sharing',
    title:'Resume on Drive with possibility to print',
  }
];
