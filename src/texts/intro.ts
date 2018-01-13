import IResult from '../interfaces/IResult';
import detail from './intro_detail';

export class Intro implements IResult {

  private title: string = "Jozef Lacko";
  private subtitle: string = "About me";
  private description: string = "Some quick introduction";

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
