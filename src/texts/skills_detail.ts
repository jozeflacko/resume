const detail = {
  icon:'bolt',
  description: [
    `I consider learning an awesome hobby which keeps me occupied a lot.
    Anywhere and anytime I can start. That feeling when things start to get
    easy is always fulfilling and pushing me forward.`,
  ],
  bulletgroups: [
    {
      key:'skillsAndProf',
      title:'Skill and Proficiency',
      bullets: [
        {
          subtitle:'Hard skills',
          description:`These are my hard software skills what I learnt or am still learning`,
          bullets:[
            {
              key:'JS',
              bubbles: [
                { value: "MVP", size: 5 },
                { value: "MVC", size: 5 },
                { value: "TSLint", size: 5 },
                { value: "Node.js", size: 4 },
                { value: "Atom", size: 4 },
                { value: "Redux", size: 4 },                
                { value: "Ajax", size: 3 },
                { value: "REST", size: 3 },
                { value: "Bootstrap", size: 3 },
                { value: "JQuery", size: 3 },
                { value: "React", size: 2 },
                { value: "Typescript", size: 2 },
                { value: "JavaScript", size: 0 },
                { value: "ECMAScript 6", size: 1 },
                { value: "HTML", size: 2 },
                { value: "CSS", size: 2 },
                { value: "Webpack", size: 3 },
                { value: "Angular", size: 3 },
                { value: "OOP", size: 4 },
                { value: "Java", size: 4 },
                { value: "Eclipse", size: 4 },
                { value: "SQL and NoSQL", size: 4 },
                { value: "Spring framework", size: 4 },
                { value: "XML", size: 4 },
                { value: "UML", size: 4 },
                { value: "XSL", size: 5 },
                { value: "Maven", size: 5 },
                { value: "Arduino", size: 5 },
                { value: "C", size: 5 },
                { value: "SVG", size: 5 },
              ]
            },
          ]
        },
        {
          subtitle:'Soft skills',
          description:`These are my soft skills that I was born with`,
          bullets:[
            { key:'sskil1', label:'', icon:'users', value:'Team player' },
            { key:'sskil2', label:'', icon:'comments-o', value:'Communicative' },
            { key:'sskil3', label:'', icon:'leanpub', value:'Self learning' },
            { key:'sskil4', label:'', icon:'briefcase', value:'Responsible' },
            { key:'sskil5', label:'', icon:'thumb-tack', value:'Honest' },
            { key:'sskil6', label:'', icon:'heart', value:'Assertive', className:"alive cred"  }
          ]
        }
      ]
    },
    {
      key:'lang',
      title:'Languages',
      bullets: [
        {
          description:`I know few languages`,
          bullets:[
            { picture:'./assets/flags/Slovakia.png', label:'Slovak', value:'Native' },
            { picture:'./assets/flags/United-Kingdom.png', label:'English', value:'Professional' },
            { picture:'./assets/flags/Czech.png', label:'Czech', value:'Advanced' },
            { picture:'./assets/flags/Hungary.png', label:'Hungarian', value:'Advanced' },
            { picture:'./assets/flags/Germany.png', label:'German', value:'Intermediate' },
            { picture:'./assets/flags/Russia.png', label:'Russian', value:'Beginner' }
          ]
        }
      ]
    }
  ]
};
export default detail;
