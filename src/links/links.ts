class Links {

  private static SLASH: string = "/";

  public static INDEX: string = Links.SLASH;
  public static RESUME_FOR_GOOGLE: string = Links.INDEX + "resumeforgoogle";
  public static RESUME_FOR_GOOGLE_DETAILS: string = Links.RESUME_FOR_GOOGLE + Links.SLASH + "details";

  public static doesLinkExist(linkName: string): boolean {
    switch (Links.SLASH+linkName) {
      case Links.INDEX:
      case Links.RESUME_FOR_GOOGLE:
      case Links.RESUME_FOR_GOOGLE_DETAILS:
        return true;
      default:
        return false;
    }
  }
}

export default Links;
