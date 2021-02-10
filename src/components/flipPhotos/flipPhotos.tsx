import * as React from 'react';
import './flipPhotos.css';
import './flipping.css';
import './flipPhotos_mobile.css';
import * as FontAwesome from 'react-fontawesome';

interface Props {
    flipPhotosBackground?: string;
    flipPhotosBottom?: string,
    flipPhotos: Array<string>;
    numberOfRows: number;
}

interface State {
    numberOfRows: number;
}

export default class FlipPhotos extends React.Component<Props, State> {

    MOVE_PHOTO_LOWER = 45;
    CARD_ELEMENT_CSS = 'card';
    containerNode: any;
    flipInterval: any;

    maxNumberOfRows = 5;
    minNumberOfRows = 2;

    constructor(props: Props) {
        super(props);

        this.state = {
            numberOfRows: this.props.numberOfRows
        }
    }

    componentDidMount() {
        this.processAll();
    }

    componentDidUpdate() {
        this.processAll();
    }

    componentWillUnmount() {
        this.processAll();
    }

    processAll() {
        if (this.containerNode) {
            this.setDimensions(this.containerNode);
            this.startFlip(this.containerNode);
            this.resizeListener = this.removeResizeListener(this.resizeCallback);
            this.resizeListener = this.installResizeListener(this.resizeCallback);
        } else {
            this.stopFlip();
            this.resizeListener = this.removeResizeListener(this.resizeCallback);
        }
    }

    stopFlip() {
        if (this.flipInterval !== undefined) {
            clearInterval(this.flipInterval);
        }
    }

    startFlip(container: any) {
        this.stopFlip();

        const cards = container.querySelectorAll('.' + this.CARD_ELEMENT_CSS);
        const msTimeout = ((1000 / cards.length) * 12);


        // initial flipPhotos
        setTimeout(() => this.flipRandomImage(), 500);

        this.flipInterval = setInterval(() => this.flipRandomImage(), Number(msTimeout.toFixed()));
    }

    flipRandomImage(flipAll = false) {
        if (this.containerNode) {
            const cards = this.containerNode.querySelectorAll('.' + this.CARD_ELEMENT_CSS);
            if (cards === undefined || cards === null || cards.length < 1) {
                return;
            }
            if (this.props.flipPhotos) {
                this.setRandomImage(this.CARD_ELEMENT_CSS, cards, this.props.flipPhotos, flipAll);
            }
        }
    }

    isResizing = false;
    resizeTimer: any;
    resizeListener: any;
    resizeCallback = () => {
        if (this.isResizing === false) {
            if (this.containerNode)
                this.setDimensions(this.containerNode);
        }
        // on end of resize
        this.isResizing = true;
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
            this.isResizing = false;
        }, 100);
    }

    installResizeListener(callback: (event: any) => void): void {
        return window.addEventListener("resize", callback);
    }

    removeResizeListener(callback: (event: any) => void): null {
        window.removeEventListener("resize", callback);
        return null;
    }

    setDimensions(container: any) {
        if (container === null)
            return;

        const containerHeight = parseInt(container.offsetHeight, 10);
        const containerWidth = parseInt(container.offsetWidth, 10);
        const numberOfRows = container.querySelectorAll('.' + this.CARD_ELEMENT_CSS).length;
        const height = Number((containerHeight / numberOfRows).toFixed(1));
        const allImages = container.querySelectorAll('.partial-image');
        for (let i = 0; i < allImages.length; i++) {
            const image = allImages[i];
            const rowNumber = parseInt(image.getAttribute('data-in-row'), 10);
            image.style.top = (((rowNumber * height) + this.MOVE_PHOTO_LOWER) * -1) + 'px';
            image.style.backgroundSize = '100% ' + numberOfRows * 100 + '%';
            //image.style.height = containerHeight+'px';
            image.style.width = containerWidth + 'px'; //when comming from mobile to desktop
        }

        const spinRows = container.querySelectorAll('.spin-row');
        for (let i = 0; i < spinRows.length; i++) {
            const spinRow = spinRows[i];
            spinRow.style.height = (100 / numberOfRows.toFixed(1)) + '%';
        }
    }

    setRandomImage(elementClass: string, elements: any, srcs: Array<string>, flipAll = false) {
        let row = this.getRandomInt(0, elements.length);
        const randomImageIndex = this.getRandomIntOtherThan(0, srcs.length, row);
        const src = srcs[randomImageIndex];

        if (flipAll === false) {
            this.setImage(elementClass, elements, src, row);

            // FLIP SEVERAL AT ONCE
            if (this.getRandomInt(0, 10) > 7 && flipAll === false) {
                this.setRandomImage(elementClass, elements, srcs); // call once again
            }
        } else {
            for (let index = 0; index < elements.length; index++) {
                this.setImage(elementClass, elements, src, index);
            }
        }
    }

    setImage(elementClass: string, elements: any, src: string, row: number) {
        var element = elements[row];
        var side = '';
        if (element.className === elementClass) {
            element.className = elementClass + " applyflip";
            side = '.cardBack';
        } else {
            element.className = elementClass;
            side = '.cardFront';
        }
        const image = element.querySelector('.content ' + side + ' > img');

        image.setAttribute('src', src);
        image.className = "partial-image " + this.getRandomFilterClass();
    }

    getRandomImage() {
        const srcs = this.props.flipPhotos;
        const index = this.getRandomInt(0, srcs.length);
        return srcs[index];
    }

    getRandomIntOtherThan(min: number, max: number, otherThan?: number): number {

        const randomInt = this.getRandomInt(min, max);

        if (otherThan === undefined) {
            return randomInt;
        }

        const maxTimes = 10;
        let index = 0;
        while (index < maxTimes) {
            const result = this.getRandomInt(min, max);
            index++;
            if (result === otherThan) {
                if (result === 0) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                return result;
            }
        }

        alert('fail, we should never get so far');
        return randomInt;
    }

    getRandomInt(min: number, max: number) {
        const randomNumber = Math.random() * (max - min) + min;
        return parseInt(randomNumber.toString(), 10);
    }

    getRandomFilterClass(): string {
        const filters = [
            'grayscale',
            'sepia',
            'shadow',
            'opacity',
            /*'art',*/
            'huered',
            ''
        ];
        return filters[this.getRandomInt(0, filters.length)];
    }

    renderRows(numberOfRows: number): any {
        let rows: any = [];
        for (var i = 0; i < numberOfRows; i++) {
            rows.push(this.renderRow(i));
        }
        return rows;
    }

    addBottomPhoto() {
        if (this.props.flipPhotosBottom)
            return <div className="bottom-background"><img src={this.props.flipPhotosBottom}/></div>;
        else
            return "";
    }

    addBackgroundPhoto() {
        if (this.props.flipPhotosBackground)
            return <div className="background"><img src={this.props.flipPhotosBackground}/></div>;
        else
            return "";
    }

    renderRow(numberOfRow: number): any {
        const src = this.getRandomImage(); // on new render will be set random image
        return (
            <div className={`spin-row row${numberOfRow}`} key={'row-' + numberOfRow}>
                <div className="card">
                    <div className="content">
                        <div className="cardFront">
                            <img className="partial-image" data-in-row={numberOfRow} src={src}/>
                        </div>
                        <div className="cardBack">
                            <img className="partial-image" data-in-row={numberOfRow} src={src}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addRow = () => {
        if (this.state.numberOfRows < this.maxNumberOfRows) {
            this.setState({
                numberOfRows: this.state.numberOfRows + 1
            });
        }
    }
    removeRow = () => {
        if (this.state.numberOfRows > this.minNumberOfRows) {
            this.setState({
                numberOfRows: this.state.numberOfRows - 1
            });
        }
    }

    render() {
        if (!this.props.flipPhotos) {
            return "";
        }
        return (
            <div className="flipPhotos-container">
                {this.addBackgroundPhoto()}
                <div
                    id="spin-container"
                    className="spin-container"
                    ref={(element) => {
                        this.containerNode = element
                    }}
                >
                    <button
                        title="Remove a row from the picture"
                        className={this.state.numberOfRows <= this.minNumberOfRows ? "button remove-row not-active" : "button remove-row"}
                        onClick={this.removeRow}
                    >
                        -
                    </button>
                    {this.renderRows(this.state.numberOfRows)}
                    <button
                        title="Add a new row to the picture"
                        className={this.state.numberOfRows >= this.maxNumberOfRows ? "button add-row not-active" : "button add-row"}
                        onClick={this.addRow}
                    >
                        +
                    </button>
                    <FontAwesome
                        name="retweet"
                        className="flipButton"
                        title="Click to Flip!"
                        onClick={() => this.flipRandomImage(true)}
                    />
                </div>
                {this.addBottomPhoto()}
            </div>
        );
    }
}
