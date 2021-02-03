import IResult from '../interfaces/IResult';

const Detail = {
    icon: 'smile-o',
    items: [
        {
            name: 'Web Software Engineer, Full-time',
            subname: 'Österreichische Lotterien',
            place: 'Vienna, Austria',
            from: 'January 2019',
            to: 'Present',
            logos: ['../assets/logos/osterreichische_lotterien.png'],
            description: `I work at Austrian Lotteries as a Full-stack developer in a team of 9 people. My main role is to design and build web-front-end of company internal tools with the latest tech-stack. I define concepts and apis for layouting, validation, testing and maintenance. `,
            www: 'www.lotterien.at',
            notes: `Technologies & Tools: NodeJs, Npm, Lerna, TypeScript, JavaScript, React, Material-UI, Jest, React Testing Library, Cypress, Java, Maven, Spring, Rest API, OpenApi, Oracle SQL, Git, Mercurial, Subversion, Jenkins, Docker, OpenShift, Jira, Confluence, Scrum`
        },
        {
            name: 'Web Software Engineer, Full-time',
            subname: 'Workflow EDV',
            place: 'Vienna, Austria',
            from: 'June 2015',
            to: 'December 2018',
            logos: ['../assets/logos/workflow.png'],
            description: `I was the major Frontend developer of the enterprise web application, focusing mostly on time, travel and personnel management. My main responsibilities were the development of the responsive skin of our progressive web app and significantly improving the user experience. Product contained 350+ Uls which needed a lot of analytical and design skills. In the company I started as a full-time trainee and switched to a regular contract after 10 months. The Company won “Technology Excellence Award 2019” for innovative technology and solution quality in the categories of functional scope, usability and intuitive handling.`,
            www:'www.workflow.at',
            links: [
                {
                    icon: "certificate",
                    text: 'Certificate of employment',
                    www: `../assets/certificates/certificate_of_employment_workflow.pdf`,
                    color: '#4885ed'
                },
                {
                    icon: "trophy",
                    text: 'Technology Excellence Award',
                    www: `https://www.workflow.at/en/technology-excellence-award-in-the-time-and-attendance-category/`,
                    color: ''
                }
            ],
            notes: `Technologies & Tools: NodeJs, Npm, Lerna, Typescript, JavaScript, React, Jquery, Bootstrap,  Xslt, Xml, BPMN Workflows, Jest, Java, Maven, Spring, Rest API, SQL, Subversion, Hudson, Jira, Confluence, Scrum
`
        },
        {
            name: 'Software Engineer - Internship, Full-time',
            subname: 'University of Tokyo',
            place: 'Japan',
            from: 'September 2014',
            to: 'October 2014',
            logos: ['../assets/logos/unitokyo.jpg'],
            description: `With the help of the IAESTE exchange program, I was accepted for a 10 weeks internship at the University of Tokyo in Japan. Internship was aimed at the effectiveness of parallel computation with Fortran programming language. It was my first experience abroad and a great opportunity to experience other cultures, for which I am absolutely thankful.`,
            www: "www.iaeste.com",
            notes: `Technologies & Tools: C, Fortran 77, Eclipse IDE`
        },
        {
            name: 'Web Software Engineer, Contract',
            subname: 'Technical University of Kosice',
            place: 'Slovakia',
            from: 'July 2014',
            to: 'May 2015',
            logos: ['../assets/logos/tu.png', '../assets/logos/uss.png'],
            description: `I have been selected from among more than 200 students to work on the university projects. Our client was one of the subsidiaries of the United States Steel Corporation placed in Slovakia. In a team of 7 people, we implemented enterprise web applications responsible for managing production of an iron ore. My main responsibility was Frontend development.`,
            www: 'www.tuke.sk',
            notes: `Technologies & Tools: C#, ASP.NET Razor, JavaScript, Jquery`
        },
        {
          name: 'Web Software Tester, Part-time',
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
    private description: string = "I just started a new challenge at Austrian Lotteries as a React/TypeScript developer"//this.getWorkExperienceSentence();
    private detail: any;

    public shouldSetActiveViewportListener() {
        return false;
    }

    constructor() {
        this.detail = Detail;
    }

    /*
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
    }*/

    /*
      private getWorkExperienceSentence() {
        const c = this.calcDate(new Date(), new Date(2014,7,1));
        return `${c} years of an experience as a software engineer`;
      }
    */
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
