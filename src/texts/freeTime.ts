import IResult from '../interfaces/IResult';
import detail from './freeTime_detail';

export class FreeTime implements IResult {

  private title: string = "#What´s new?";
  private subtitle: string = "Here I share all my projects and links I find interesting";
  private description: string = ``;

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
    return "blightgreen";
  }
}
