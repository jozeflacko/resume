import IResult from '../interfaces/IResult';
import detail from './freeTime_detail';

export class FreeTime implements IResult {

  private title: string = "Last but not least!";
  private subtitle: string = "Hey, just something small at the end";
  private description: string = `Stay positive in the life,
  because you never know what will come tommorrow! ...maybe a sunny day :) !`;

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
