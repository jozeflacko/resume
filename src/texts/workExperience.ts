import IResult from '../interfaces/IResult';

const Detail = {
    icon:'smile-o',
    items: [
      {
        name: 'Web Software Engineer',
        subname: 'Österreichische Lotterien',
        place: 'Vienna, Austria',
        from: 'January 2019',
        to: 'Present',
        logos:['../assets/logos/osterreichische_lotterien.png'],
        description: `Agile Developer. `,
        www:'www.lotterien.at',

        notes: `Technologies: JavaScript, Typescript, React,
        Html, Css, Java, Maven, Spring framework, JUnit Test Framework, Mercurial`
      },
      {
        name: 'Web Software Engineer',
        subname: 'Workflow EDV',
        place: 'Vienna, Austria',
        from: 'June 2015',
        to: 'December 2018',
        logos:['../assets/logos/workflow.png'],
        description: `I was working as a developer on an enterprise web application, focusing mostly on time management, travel management, and personnel management. In the company I started as a full-time trainee and switched to regular contract after 10 months. My main responsibilities were building and maintaining mainly JavaScript part of the application, implementing responsive skin and improving the user experience. I wrote reusable components, modules and css. My work also included supporting trainees with development, participating on recruiting new team members and making regular app releases. In a small agile team I was also highly involved into the Java development.`,
        www:'www.workflow.at',

        notes: `Technologies: JavaScript, Ajax, Jquery library,
        Html, Css, Xslt, Java, Maven, Spring framework, JUnit Test Framework,
        Eclipse IDE, SVN, Vue, Git, TypeScript, Jira, Confluence`
      },
      {
        name: 'Software Engineer - Internship',
        subname: 'University of Tokyo',
        place: 'Japan',
        from: 'September 2014',
        to: 'October 2014',
        logos:['../assets/logos/unitokyo.jpg'],
        description: `With the help of IAESTE (International Association for the Exchange of Students for Technical Experience), I was successfully accepted for a 10 weeks internship at University of Tokyo, Japan. I did a research aimed to effectiveness of parallel computation of multiplication sparse matrices for which I was programming mainly in Fortran programming language. I would like to mention, that this internship was my first experience abroad and a great opportunity to experience other cultures, for which I am absolutely thankful.`,
        www:"www.iaeste.com",
        notes: `Technologies: C, Fortran 77, Eclipse IDE`
      },
      {
        name: 'Web Software Engineer',
        subname: 'Technical University of Kosice',
        place: 'Slovakia',
        from: 'July 2014',
        to: 'November 2014',
        from2: 'April 2015',
        to2: 'May  2015',
        logos:['../assets/logos/tu.png','../assets/logos/uss.png'],
        description: `During my university studies, I was working on 3rd party projects at my Alma mater. Our client was one of the subsidiaries of the United States Steel Corporation placed in Slovakia. In a team of 7 people, we implemented 2 ASP.Net Razor enterprise web applications responsible for managing production of an iron ore. We were fully responsible for communication with the client, including to inform them of our work progress by engaging them in weekly meetings. My main responsibility in this project was front-end development. Both projects were successfully finished and given to the client on time. `,
        www:'www.tuke.sk',
        notes: `Technologies: JavaScript, Ajax, Jquery library,
        HTML, CSS, C#, ASP.NET Razor markup language, Visual Studio IDE`
      },
      {
        name: 'Web Software Tester',
        subname: 'Icos, a.s',
        place: 'Kosice, Slovakia',
        from: 'January 2014',
        to: 'March 2014',
        logos:['../assets/logos/icos.png'],
        description: `As a tester, I was participating on a final development stage of a national project about electronic documents for tax returns lasting 3 months. My main responsibilities were to test web tax forms, validate JavaScript calculations, XML documents and document all found issues. I was collaborating with a team of 10 people.`,
        www:'www.icos.sk',
        notes: `Technologies: JavaScript, XML`
      }
    ]
};


export class WorkExperience implements IResult {
  
  
  private title: string = "Work experience";
  private subtitle: string = "What has been going on in the last years";
  private description: string = this.getWorkExperienceSentence();
  private detail: any;

  public shouldSetActiveViewportListener() {
    return false;
  }
  
  constructor() {
    this.detail = Detail;
  }
  
  private calcDate(date1,date2): string {
    let diff = Math.floor(date1.getTime() - date2.getTime());
    let day = 1000 * 60 * 60 * 24;
  
    let days = Math.floor(diff/day);
    let months = Math.floor(days/31);
    let years = Math.floor(months/12);
  
    let message: string = years.toString();
    if(months - (years*12) >= 5) {
      message += ".5"; 
    }     
    return message;
  }

  private getWorkExperienceSentence() {
    const c = this.calcDate(new Date(), new Date(2014,7,1));
    return `${c} years of an experience as a software engineer`;
  }

  public getTitle(): string {
    return this.title;
  }

  public getSubtitle(): string {
    return this.subtitle;
  }

  public getDescription(): string {
    return this.description;
  }

  public getDetail() {
    return this.detail;
  }

  public getBackground() {
    return "blightred";
  }
}
