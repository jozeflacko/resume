import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {

  constructor() {}

  private searchMessage: string = "Hi, I am Jozef. Welcome to my Web!";

  getMessage() {
    return this.searchMessage;
  }
}
