import IResult from '../interfaces/IResult';
import detail from './intro_detail';

export class Intro implements IResult {

  public getName() {
    return "intro";
  }

  public getTitle(): string {
    return "Jozef Lacko";
  }

  public getSubtitle(): string {
    return "Brief introduction";
  }

  public getDescription(): string {
    return "Full-Stack Developer strongly concentrated on building Web Applications using JavaScript, TypeScript and Java";
  }

  public getDetail() {
    return detail;
  }

  public getBackground() {
    return "blightblue";
  }

  public shouldSetActiveViewportListener() {
    return false;
  }
}
