import IResult from '../interfaces/IResult';
import detail from './education_detail';

export class Education implements IResult {

  private title: string = "Education";
  private subtitle: string = "Master of Business Informatics";
  private description: string = `I sucessfully completed second level of university studies in the study programme of Business Informatics`;

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
