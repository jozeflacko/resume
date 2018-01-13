import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {

  private searchMessage: string = "Hi Google! This is my Resume";

  getMessage() {
    return this.searchMessage;
  }
}
