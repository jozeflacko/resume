import * as React from 'react';
import './baloon.css';
import './baloon_mobile.css';
import './kid.css';

export default class Baloon extends React.Component<{
  name: string;
}, {}> {

  baloon: HTMLElement;
  line:HTMLElement;
  kid:any;
  lowerLineOnTop = 55;
  baloonTimeout: any;

  componentDidMount() {
    this.flyBaloon(this.baloon, this.line, this.kid);
    this.setpositionKid(this.baloon, this.line, this.kid);
  }

  componentWillMount() {
    if(!this.baloonTimeout) {
      return;
    }
    this.stopFlyBaloon();

  }

  stopFlyBaloon = () => {
    if(!!this.baloonTimeout) {

      clearTimeout(this.baloonTimeout);
    }
  }

  flyBaloonAway = () => {
    this.stopFlyBaloon();
    let index =  100;
    const whenToStartWink = index - 1;
    const whenToStartSad = index - 70;
    this.baloonTimeout = setInterval(()=> {
      if(index-- <= 1) {

        this.stopFlyBaloon();
      }

      if(!this.baloon) {

        return;
      }

      this.baloon.style.top =  this.getNewNegativePosition(this.baloon.style.top);
      this.baloon.style.left = this.getNewNegativePosition(this.baloon.style.left);
      this.baloon.style.opacity = (index / 100).toString();
      if(index === whenToStartWink) {
        this.line.style.display = 'none';
        this.kid.className = this.kid.className + ' waveHand';
      }
      if(index === whenToStartSad) {
        this.kid.className = this.kid.className + ' sad';
      }
    }, 100);

  }

  flyBaloon = (baloon:any, line:any, kid:any) => {

    const originalTop = baloon.style.top;
    const originalLeft = baloon.style.left;
    const LIMIT = 200;
    const boundaries = {
        topMin:  this.getNumPositionValue(originalTop)  - LIMIT,
        topMax:  this.getNumPositionValue(originalTop)  + LIMIT,
        leftMin: this.getNumPositionValue(originalLeft) - LIMIT,
        leftMax: this.getNumPositionValue(originalLeft) + LIMIT,
    };

    const fly = () => {
      if(baloon === undefined || line === undefined || kid === undefined) {
        return;
      }
      const BALOON_MOVEMENT = 20; // px

      let top =  this.getNewRandomPosition(baloon.style.top, BALOON_MOVEMENT);
      let left = this.getNewRandomPosition(baloon.style.left, BALOON_MOVEMENT);

      top   = boundaries.topMax   < top   ? boundaries.topMin   : top;
      top   = boundaries.topMin   > top   ? boundaries.topMax   : top;
      left  = boundaries.leftMax  < left  ? boundaries.leftMin  : left;
      left  = boundaries.leftMin  > left  ? boundaries.leftMax  : left;

      baloon.style.top = top + 'px';
      baloon.style.left = left + 'px';

      this.adjustBaloonLine([
        ( top  + (baloon.offsetHeight / 2) ),
        ( left + (baloon.offsetWidth  / 2) )
      ]);
    };
    this.baloonTimeout = setInterval( ()=> { fly(); }, 100);
  }

  setpositionKid(baloon:any, line:any, kid:any) {
    if(baloon === undefined || line === undefined || kid === undefined) {
      return;
    }
    const left = baloon.parentElement.offsetWidth - ( (baloon.offsetWidth/2) + baloon.offsetLeft);
    kid.style.left = left + 'px';
  }

  getNumPositionValue(stringValue: string): number {
    let value = parseInt(stringValue,10);
    return isNaN(value) ? 0 : value;
  }

  getNewNegativePosition(currentNumber:string|null):string {
    if(currentNumber === null) {

      return '';
    }
    let current:number = parseInt(currentNumber,10);
    const r = isNaN(current) ? '0px' : (current - 10)+'px';
    console.log(r);
    return r;
  }

  getNewRandomPosition(currentNumber:string, tolerance:number):number {
    const current = this.getNumPositionValue(currentNumber);
    const randomNumber = this.randomIntFromInterval(current-tolerance, current+tolerance);
    return randomNumber >= 0 ? randomNumber : current;
  }
  randomIntFromInterval(min:number, max:number):number {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  adjustBaloonLine(setThisPositions: [number, number]) {
    if(!this.line || !this.baloon || !this.kid) {
      return;
    }
    this.adjustLine(this.baloon, this.kid, this.line, this.lowerLineOnTop, setThisPositions);
  }

  adjustLine(from:any, to:any, line:any, lowerLineOnTop:number, setThisPositions:[number, number]) {

    const  fT = setThisPositions[0];
    const  fL = setThisPositions[1]
    const  tT = to.offsetTop 	 + to.offsetHeight/2;
    const  tL = to.offsetLeft 	 + to.offsetWidth/2;

    const CA   = Math.abs(tT - fT);
    const CO   = Math.abs(tL - fL);
    const H    = Math.sqrt(CA*CA + CO*CO);
    let ANG  = 180 / Math.PI * Math.acos( CA/H );
    let top = (tT > fT) ? (tT-fT)/2 + fT : (fT-tT)/2 + tT;
    let left = (tL > fL) ? (tL-fL)/2 + fL : (fL-tL)/2 + tL;

    if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)) {
      ANG *= -1;
    }
    top-= H/2;

    line.style['-webkit-transform'] = 'rotate('+ ANG +'deg)';
    line.style['-moz-transform'] = 'rotate('+ ANG +'deg)';
    line.style['-ms-transform'] = 'rotate('+ ANG +'deg)';
    line.style['-o-transform'] = 'rotate('+ ANG +'deg)';
    line.style['-transform'] = 'rotate('+ ANG +'deg)';
    line.style.top    = (top+lowerLineOnTop)+'px';
    line.style.left   = left+'px';
    line.style.height = (H) + 'px';
  }

  render() {
    if(! this.props.name || this.props.name==='') {
        return '';
    }
    return (
      <div className="baloon-container">
          <div className="line"  ref={(elem) => {this.line  = elem}} />
          <div className="heart baloon" ref={(elem) => {this.baloon = elem}} onClick={()=>{ this.flyBaloonAway() }}>
            {this.props.name}
            <div className="leftTop"/>
            <div className="rightTop"/>
            <div className="bottomMiddle"/>
          </div>

          <div className="kid" ref={(elem) => {this.kid   = elem}}>
              <div className="group">
                <div className="head">
                  <div className="hair"/>
                  <div className="ear"/>
                  <div className="ear right"/>
                  <div className="fringe"/>
                  <div className="face"/>
                  <div className="eyebrow"/>
                  <div className="eye"/>
                  <div className="mouth">
                    <div className="tongue"/>
                  </div>
                </div>

                <div className="neck"/>
                <div className="body"/>
                <div className="lefthand"/>
                <div className="righthand"/>
                <div className="belt"/>
                <div className="leftleg"/>
                <div className="rightleg"/>
                <div className="earth"/>
              </div>
          </div>
        </div>
    );

  }
}
