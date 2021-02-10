import IBubble from "./IBubble";

export default interface IInnerBullet {
    key?: string;
    bubbles?: IBubble[];
    subtitle?: string;
    description?: string;
    className?: string;
    icon?: string;
    value?: string;
    picture?: string;
    label?: string;
}