import IResult from '../interfaces/IResult';
import detail from './skills_detail';

export class Skills implements IResult {

  private title: string = "Skill and Proficiency";
  private subtitle: string = "In love with JavaScript";
  private description: string = "My strongest skills are being assertive, a teamplayer and to be myself";

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
