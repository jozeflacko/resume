class Links {

  private static SLASH: string = "/";

  public static INDEX: string = Links.SLASH;
  public static RESUME: string = Links.INDEX + "resume";
  public static RESUME_DETAILS: string = Links.RESUME + Links.SLASH + "details";

  // FOR GOOGLE
  public static RESUME_FOR_GOOGLE: string = Links.INDEX + "resumeforgoogle";
  public static RESUME_FOR_GOOGLE_DETAILS: string = Links.RESUME_FOR_GOOGLE + Links.SLASH + "details";
  // FOR GOOGLE

  public static doesLinkExist(linkName: string): boolean {
    switch (this.SLASH+linkName) {
      case Links.INDEX:
      case Links.RESUME:
      case Links.RESUME_DETAILS:
      case Links.RESUME_FOR_GOOGLE:
      case Links.RESUME_FOR_GOOGLE_DETAILS:
        return true;
      default:
        return false;
    }
  }

  public static getAllProject():Array<{ name:string, link:string, description:string, technology:string, date:string, background?:string }>  {
    return [
      {
        name: 'Resume',
        link: Links.RESUME,
        description: 'Interesting Web Resume written with React',
        technology:'Javascript - React',
        date:'2018',
        background:'blightblue'
      },
      {
        name: 'Meeting Timer',
        link: 'https://rawgit.com/opam/scrumTimer/master/src/index.html',
        description: 'Meeting timer written with Jquery',
        technology:'Javascript - Jquery',
        date:'2018'
      },
      {
        name: 'Css Flower',
        link: 'https://rawgit.com/opam/CssPicture/master/index.html',
        description: 'Small funny animation :)',
        technology:'Css',
        date:'2017',
      },
      {
        name: 'Snake game',
        link: 'https://cdn.rawgit.com/opam/JavascriptSnakeGame/2aec356c/snakegame.html',
        description: 'JavaScript game :)',
        technology:'Javascript',
        date:'2017'
      },
      {
        name: 'Web App Layout',
        link: 'https://rawgit.com/opam/BaseApp/master/index.html',
        description: 'Simple Web App Demo Layout using Jquery',
        technology:'Javascript - Jquery',
        date:'2017'
      },
      {
        name: 'Password Manager',
        link: 'https://passwordmanager.jozeflacko.com',
        description: '(in progress) App may sleep. First load could take up to 10 seconds',
        technology:'Vue, Firebase',
        date:'2018'
      },
      /*{
        name: 'Web App Layout',
        link: 'https://react-typescript-cards-app.herokuapp.com/login',
        description: 'Simple Web App Demo Layout using Jquery',
        technology:'Javascript - Jquery',
        date:'2018'
      },*/
      
    ];
  }
}

export default Links;
