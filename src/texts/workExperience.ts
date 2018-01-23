import IResult from '../interfaces/IResult';

const Detail = {
    icon:'smile-o',
    items: [
      {
        name: 'Java / Javascript Software Developer',
        subname: 'Workflow EDV GmbH',
        place: 'Vienna, Austria',
        from: 'May 2016',
        to: 'Present',
        logos:['./assets/logos/workflow.png'],
        description: `I work as a developer on an enterprise web application,
        focusing mostly on time management, travel management, and personnel
        management. My main responsibilities are implementing responsive skin
        and improving the user experience of the app by transferring back-event
        driven events into the scripts run by the browsers. I write reusable
        components, JavaScript modules, java rest services and page specific
        CSS. I work in a small team of 6 people and we follow Scrum process.
        My work also includes creating new actions and workflows in the
        application, supporting trainees with JavaScript development,
        taking care of morning builds, fixing broken unit
        tests, and making regular app releases.`,

        notes: `Technologies: JavaScript, Ajax, Jquery library,
        HTML, CSS, XSLT, Java, Maven, Spring framework, JUnit Test Framework,
        Eclipse IDE, SVN, Vue, Git`
      },
      {
        name: 'Software Developer Internship',
        subname: 'Workflow EDV GmbH',
        place: 'Vienna, Austria',
        from: 'June 2015',
        to: 'April 2016',
        logos:['./assets/logos/workflow.png'],
        description: `As a trainee, I was a full-valued team member developing
        a Java enterprise web application. After a short introduction period,
        I was implementing new Java services, jobs, JUnit tests, and new
        actions. Later my tasks were changed to be more concentrated on
        JavaScript development. I focused on different reusable functionalities
        for application menu, responsive tables, trees, forms, dialogs and
        etc.`,

        notes: `Technologies: JavaScript ECMAScript 5, Ajax, Jquery library,
        HTML, CSS, XSLT, Java, Spring framework, JUnit Test Framework,
        Eclipse IDE`
      },
      {
        name: 'ASP.NET Developer',
        subname: 'Technical University of Kosice',
        place: 'Slovakia',
        from: 'June 2014',
        to: 'June 2015',
        logos:['./assets/logos/tu.png','./assets/logos/uss.png'],
        description: `During my university studies, I was working on 3rd party
        projects at my Alma mater. Our client was one of the subsidiaries of
        the United States Steel Corporation placed in Slovakia. In a team of
        7 people, we implemented 2 ASP.Net Razor enterprise web applications
        responsible for managing production of an iron ore.

        We were fully responsible for any communications with the client, including
        to inform them of our work progress by engaging them in weekly meetings.
        My main responsibility in this project was front-end development.

        Both projects were successfully finished and given to the client on time
        `,

        notes: `Technologies: JavaScript ECMAScript 5, Ajax, Jquery library,
        HTML, CSS, C#, ASP.NET Razor markup language, Visual Studio IDE`
      },
      {
        name: 'Software Developer Internship',
        subname: 'University of Tokyo',
        place: 'Japan',
        from: 'June 2015',
        to: 'April 2016',
        logos:['./assets/logos/unitokyo.jpg'],
        description: `With the help of IAESTE (International Association for
        the Exchange of Students for Technical Experience), I was successfully
        accepted for a 10 weeks internship at University of Tokyo, Japan.
        I did a research aimed to effectiveness of parallel computation of
        multiplication sparse matrices for which I was programming mainly in
        Fortran programming language.

        I would like to mention, that this internship was my first experience
        abroad and a great opportunity to experience other cultures,
        for which I am absolutely thankful.`,

        notes: `Technologies: C, Fortran 77`
      },
      {
        name: 'Computer systems tester',
        subname: 'Icos, a.s',
        place: 'Kosice, Slovakia',
        from: 'January 2014',
        to: 'March 2014',
        logos:['./assets/logos/icos.png'],
        description: `As a tester, I was participating on a final development
        stage of a national project about electronic documents for tax returns
        lasting 3 months. My main responsibilities were to test web tax forms,
        validate JavaScript calculations, XML documents and document all found
        issues. I was collaborating with a team of 10 people.`,

        notes: `Technologies: ECMAScript 5, XML`
      }
    ]
};

export class WorkExperience implements IResult {

  private title: string = "Work experience";
  private subtitle: string = "Step by Step";
  private description: string = "What has been going on in the last years";
  private detail: any;

  constructor() {
    this.detail = Detail;
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
