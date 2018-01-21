import * as React from 'react';
import './flipPhotos.css';


export default class FlipPhotos extends React.Component<{
  flipPhotos:Array<string>;
  numberOfRows:number;
}, {}> {

  MOVE_PHOTO_LOWER = 25;
  CARD_ELEMENT_CSS = 'card';
  containerNode:any;
  flipInterval: any;
  row = 0;

  componentDidMount() {
    this.startAll();
  }
  componentDidUpdate() {
    this.startAll();
  }

  componentWillUnmount() {
    this.stopFlip();
  }

  startAll() {
    if(this.containerNode) {
      this.setDimensions(this.containerNode);
      this.startFlip(this.containerNode);
    }
  }

  stopFlip() {
    if(this.flipInterval !== undefined)
      clearInterval(this.flipInterval);
  }

  startFlip(container:any) {
    this.stopFlip();

    const cards = container.querySelectorAll('.'+this.CARD_ELEMENT_CSS);
    const miliseconfsTimeout = ((1000 / cards.length)*10).toFixed();
    this.flipInterval = setInterval(() => {
      const cards = container.querySelectorAll('.'+this.CARD_ELEMENT_CSS);
      if(cards === undefined || cards === null || cards.length < 1)
        return;

      if(this.props.flipPhotos)
        this.setImage(this.CARD_ELEMENT_CSS, cards, this.props.flipPhotos );
    }, miliseconfsTimeout);
  }

  setDimensions(container:any) {
    const containerHeight = parseInt(container.offsetHeight,10);
    const containerWidth = parseInt(container.offsetWidth,10);
    const numberOfRows = container.querySelectorAll('.'+this.CARD_ELEMENT_CSS).length;
    const height = Number((containerHeight/numberOfRows).toFixed(1));
    const allImages = container.querySelectorAll('.partial-image');
    for(let i=0;i<allImages.length;i++) {
      const image = allImages[i];
      const rowNumber = parseInt(image.getAttribute('data-in-row'),10);
      image.style.top = (((rowNumber*height)+this.MOVE_PHOTO_LOWER)*-1)+'px';
      image.style.backgroundSize = '100% '+numberOfRows*100+'%';
      //image.style.height = containerHeight+'px';
      image.style.width = containerWidth+'px';
    }

    const spinRows = container.querySelectorAll('.spin-row');
    for(let i=0;i<spinRows.length;i++) {
      const spinRow = spinRows[i];
      spinRow.style.height = (100/numberOfRows.toFixed(1)) + '%';
    }
  }

  setImage(elementClass:string, elements:any, srcs:Array<string>) {
    this.row = this.getRandomInt(0, elements.length);
    var element = elements[this.row];
    var side = '';
    if(element.className===elementClass) {
      element.className=elementClass+ " flipped";
      side = '.back';
    } else {
      element.className=elementClass;
      side = '.front';
    }
    var randomImageIndex = this.getRandomIntOtherThan(0, srcs.length, this.row);
    var src = srcs[randomImageIndex];
    const image = element.querySelector(side+ ' > img');
    image.setAttribute('src', src);
    image.className = "partial-image " + this.getRandomFilterClass();

  }

  getRandomIntOtherThan(min: number, max: number, otherThan?: number): number {

      const randomInt = this.getRandomInt(min, max);

      if(otherThan === undefined) {
        return randomInt;
      }

      const maxTimes = 10;
      let index = 0;
      while(index < maxTimes) {
      	const result = this.getRandomInt(min,max);
        index++;
        if(result === otherThan) {
        	if(result === 0) {
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
    return parseInt(randomNumber.toString(),10);
  }

  getRandomFilterClass():string {
    const filters = [
      'grayscale',
      'sepia',
      'shadow',
      'opacity',
      '' /* nothing */
    ];
    return filters[this.getRandomInt(0,filters.length)];
  }

  renderRows(numberOfRows:number):any {
    let rows:any = [];
    for (var i = 0; i < numberOfRows; i++) {
        rows.push(this.renderRow(i));
    }
    return rows;
  }

  renderRow(numberOfRow:number):any {
    return (
      <div className={`spin-row row${numberOfRow}`} key={'row-'+numberOfRow}>
        <div className="card">
           <div className="front">
             <img className="partial-image" data-in-row={numberOfRow} src={this.props.flipPhotos[0]}/>
           </div>
           <div className="back">
             <img className="partial-image" data-in-row={numberOfRow} src={this.props.flipPhotos[0]}/>
           </div>
        </div>
      </div>
    );
  }
  render() {
    if(! this.props.flipPhotos ) {
        return "";
    }
    return (
      <div className="flipPhotos-container" >
        <div id="spin-container" className="spin-container" ref={(element)=>{this.containerNode = element}}>
          {this.renderRows(this.props.numberOfRows)}
        </div>
      </div>
    );
  }
}
