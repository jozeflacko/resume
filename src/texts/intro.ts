import IResult from '../interfaces/IResult';
import detail from './intro_detail';

export class Intro implements IResult {

  private title: string = "About me";
  private subtitle: string = "Some quick introduction";
  private description: string = "Who am I, what I like etc...";

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
