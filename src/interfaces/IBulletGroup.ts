
import IBullet from "./IBullet";

export default interface IBulletGroup {
    key: string;
    title: string;
    bullets: IBullet[];
}