import IResult from '../interfaces/IResult';
import detail from './skills_detail';

export class Skills implements IResult {

  private title: string = "Skill and Proficiency";
  private subtitle: string = "In love with JavaScript";
  private description: string = "Assertive, Teamplayer, Friendly";

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
    return detail;
  }

  public getBackground() {
    return "blightblue";
  }
}
