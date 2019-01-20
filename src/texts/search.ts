import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {

  constructor() {}

  private searchMessage: string = "Welcome! I am Jozef and this is my Web Resume";

  getMessage() {
    return this.searchMessage;
  }
}
