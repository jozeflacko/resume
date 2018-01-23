import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {

  private searchMessage: string = "Hi Google! This is Jozef Lacko’s resume";

  getMessage() {
    return this.searchMessage;
  }
}
