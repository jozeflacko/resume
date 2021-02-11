import IResult from '../interfaces/IResult';
import detail from './education_detail';

export class Education implements IResult {

  private title: string = "Education";
  private subtitle: string = "Master of Engineering in Business Informatics";
  private description: string = "Completed second level of university studies in the study programme of Business Informatics";

  public getName() {
    return "education";
  }

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
    return "blightyellow";
  }
}
