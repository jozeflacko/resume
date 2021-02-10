import IType from "./IType";

export default interface IAction<T = any> {
  type: IType;
  payload: T;
}
