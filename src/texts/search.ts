import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {

  private searchMessage: string = "Hi Google! I am Jozef and this Web Resume for you!";

  getMessage() {
    return this.searchMessage;
  }
}
