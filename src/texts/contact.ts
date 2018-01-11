import IResult from '../interfaces/IResult';
import detail from './contact_detail';

export class Contact implements IResult {

  private title: string = "Contact";
  private subtitle: string = "You can contact me any time";
  private description: string = "I always prefer to talk in person";

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
