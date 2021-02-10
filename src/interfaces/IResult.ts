import IDetail from "./IDetail";

export default interface IResult {
  getTitle(): string;
  getSubtitle(): string;
  getDescription(): string;
  getBackground(): string;
  getDetail(): IDetail;
  shouldSetActiveViewportListener: () => boolean;
}
