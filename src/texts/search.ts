import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {

  private isForGoogle:boolean;

  constructor(isForGoogle:boolean){
    this.isForGoogle = isForGoogle;
  }

  private searchMessage: string = "Welcome! I am Jozef and this is my Web Resume";
  private searchMessageGoogle: string = "Hi Google! This is Jozef Lacko’s resume";

  getMessage() {
    return this.isForGoogle ? this.searchMessageGoogle : this.searchMessage;
  }
}
