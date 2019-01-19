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
    name:'Docs to Print',
    url:'https://docs.google.com/document/d/1ziyzLe4hYWHTWB0FO-tyUCO03MHA_l2HxIR3RPoARcM/edit?usp=sharing',
    title:'Preview my Google Docs Resume'
  },
  {
    name:'GitHub',
    url:'https://github.com/opam',
    title:'Go and open my GitHub',
    priority: 'low',
  },
  {
    name:'Twitter',
    url:'https://twitter.com/jlacko27',
    title:'Whats new on Twitter?',
    priority: 'low',
  },
  {
    name:'LinkedIn',
    url:'https://www.linkedin.com/in/jozeflacko/',
    title:'Go and check my LinkedIn',
    priority: 'low',
  }
];
