import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {

  constructor() {}

  private searchMessage: string = "Hi! I am Jozef and this is my Resume";

  getMessage() {
    return this.searchMessage;
  }
}
