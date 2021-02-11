import IResult from '../interfaces/IResult';
import detail from './education_detail';

export class Education implements IResult {

    public getName() {
        return "education";
    }

    public getTitle(): string {
        return "Education";
    }

    public getSubtitle(): string {
        return "Master of Engineering in Business Informatics";
    }

    public getDescription(): string {
        return "Completed second level of university studies in the study programme of Business Informatics";
    }

    public getDetail() {
        return detail;
    }

    public getBackground() {
        return "blightyellow";
    }

    public shouldSetActiveViewportListener() {
        return false;
    }
}
