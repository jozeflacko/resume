import ISearch from '../interfaces/ISearch';

export default class Search implements ISearch {

    private animate: boolean;

    getMessage() {
        return "Hi, I am Jozef. Welcome to my Web!";
    }

    setIsAnimated(animate: boolean) {
        this.animate = animate;
    }

    isAnimated() {
        return this.animate;
    }
}
