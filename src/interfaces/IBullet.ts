import IInnerBullet from "./IInnerBullet";

export default interface IBullet {
    subtitle?: string;
    description?: string;
    bullets?: IInnerBullet[];
}