class Links {

  private static SLASH: string = "/";

  public static INDEX: string = Links.SLASH;
  public static RESUME_FOR_GOOGLE: string = Links.INDEX + "resumeforgoogle";
  public static RESUME_FOR_GOOGLE_DETAILS: string = Links.RESUME_FOR_GOOGLE + Links.SLASH + "details";

  public static doesLinkExist(linkName: string): boolean {
    switch (this.SLASH+linkName) {
      case Links.INDEX:
      case Links.RESUME_FOR_GOOGLE:
      case Links.RESUME_FOR_GOOGLE_DETAILS:
        return true;
      default:
        return false;
    }
  }
  public static getAllProject():Array<{ name:string, link:string, description:string }>  {
    return [
      /*{
        name: 'My Resume',
        link: Links.RESUME_FOR_GOOGLE,
        description: 'Interesting Web Resume written with React',
      },*/
      {
        name: 'Meeting Timer',
        link: 'https://rawgit.com/opam/scrumTimer/master/src/index.html',
        description: 'Meeting timer written with Jquery',
      },
      {
        name: 'Pure Css Animated Flower',
        link: 'https://rawgit.com/opam/CssPicture/master/index.html',
        description: 'Small funny animation :)',
      },
      {
        name: 'Javascript Snake game',
        link: 'https://cdn.rawgit.com/opam/JavascriptSnakeGame/2aec356c/snakegame.html',
        description: 'JavaScript game :)',
      },
      {
        name: 'Web App Demo Layout',
        link: 'https://rawgit.com/opam/BaseApp/master/index.html',
        description: 'Simple Web App Demo Layout using Jquery',
      },
      
    ];
  }
}

export default Links;
