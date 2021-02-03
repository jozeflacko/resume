import IResult from '../interfaces/IResult';
import detail from './skills_detail';

export class Skills implements IResult {

  private title: string = "Skills and Proficiency";
  private subtitle: string = "Always in progress";
  private description: string = `Listening is a master skill for personal and professional greatness. (Robin S. Sharma)`;

  public shouldSetActiveViewportListener() {
    return false;
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
    return detail;
  }

  public getBackground() {
    return "blightblue";
  }
}
