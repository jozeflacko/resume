import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {

  constructor() {}

  private searchMessage: string = "Hi, I am Jozef and welcome to my Web!";

  getMessage() {
    return this.searchMessage;
  }
}
