import ActionI from '../interfaces/ActionI';

export default class Action implements ActionI {
  constructor(type: string, payload: any) {
    this.type = type;
    this.payload = payload;
  }

  type: string;
  payload: any;
}
