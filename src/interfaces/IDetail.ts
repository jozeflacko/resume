import IItem from "./IItem";
import IFlipPhotos from "./IFlipPhotos";
import IBulletGroup from "./IBulletGroup";

export default interface IDetail extends IFlipPhotos {
    icon?: string;
    items?: IItem[];
    description?: string[];
    bulletGroups?: IBulletGroup[];
}