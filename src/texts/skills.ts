import IResult from '../interfaces/IResult';
import detail from './skills_detail';

export class Skills implements IResult {

  private title: string = "Skills";
  private subtitle: string = "Everything is learnable";
  private description: string = "Qustion is how much you want to know it?";

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
