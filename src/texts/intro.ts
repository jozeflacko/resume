import IResult from '../interfaces/IResult';
import detail from './intro_detail';

export class Intro implements IResult {

  private title: string = "Jozef Lacko";
  private subtitle: string = "All about the Dream!";
  private description: string = "A Slovakian Engaged JavaScript nerd. What else?! ";

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
