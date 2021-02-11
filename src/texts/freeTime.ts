import IResult from '../interfaces/IResult';
import detail from './freeTime_detail';

export class FreeTime implements IResult {

  public getName() {
    return "freetime";
  }

  public getTitle(): string {
    return "What´s new?";
  }

  public getSubtitle(): string {
    return "Everything what is worth to share";
  }

  public getDescription(): string {
    return `Projects, demos, links, articles and many other interesting ideas`;
  }

  public getDetail() {
    return detail;
  }

  public getBackground() {
    return "blightgreen";
  }

  public shouldSetActiveViewportListener() {
    return true;
  }
}
