import IResult from '../interfaces/IResult';
import detail from './intro_detail';

export class Intro implements IResult {

  private title: string = "Jozef Lacko";
  private subtitle: string = "Brief introduction";
  private description: string = "Full-Stack Developer strongly concentrated on building Web Applications using JavaScript, TypeScript and Java";

  public getName() {
    return "intro";
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
    return "blightblue";
  }
}
