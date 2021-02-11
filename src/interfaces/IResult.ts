import IDetail from "./IDetail";

export default interface IResult {
  getName(): string;
  getTitle(): string;
  getSubtitle(): string;
  getDescription(): string;
  getBackground(): string;
  getDetail(): IDetail;
  shouldSetActiveViewportListener: () => boolean;
}
