import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {

  private searchMessage: string = "Hi Google! This is my Resume to you";

  getMessage() {
    return this.searchMessage;
  }
}
