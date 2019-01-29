import IResult from '../interfaces/IResult';
import detail from './freeTime_detail';

export class FreeTime implements IResult {

  private title: string = "What´s new?";
  private subtitle: string = "Everything what is worth to share";
  private description: string = `Projects, demos, links, articles and many other interesting ideas`;

  public getTitle(): string {
    return this.title;
  }

  public shouldSetActiveViewportListener() {
    return true;
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
    return "blightgreen";
  }
}
