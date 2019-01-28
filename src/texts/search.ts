import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {

  constructor() {}

  private searchMessage: string = "Hi! I am Jozef, a 'dev-nerd' and this is my Web";

  getMessage() {
    return this.searchMessage;
  }
}
