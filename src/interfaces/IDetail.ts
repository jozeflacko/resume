import IItem from "./IItem";
import IFlipPhotos from "./IFlipPhotos";
import IBulletGroup from "./IBulletGroup";
import ISentence from "./ISentence";

export default interface IDetail extends IFlipPhotos {
    icon?: string;
    items?: IItem[];
    itemsFunny?: IItem[];
    description?: string[];
    bulletGroups?: IBulletGroup[];
    photo?: string;
    sentence?: ISentence;
    bottomPhoto?: string;
}