import * as React from 'react';
import './baloon.css';
import './baloon_mobile.css';
import Kid from './kid';

export default class Baloon extends React.Component<{
  name: string;
}, {}> {

  baloon: HTMLElement;
  line:HTMLElement;
  kidPlaceholder:HTMLElement;
  baloonTimeout: any;

  componentDidMount() {

    this.flyBaloon(this.baloon, this.line, this.kidPlaceholder);
    this.setpositionKid(this.baloon, this.line, this.kidPlaceholder);
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
        this.kidPlaceholder.className = this.kidPlaceholder.className + ' waveHand';
      }
      if(index === whenToStartSad) {
        this.kidPlaceholder.className = this.kidPlaceholder.className + ' sad';
      }
    }, 100);

  }

  flyBaloon = (baloon:any, line:any, kid:any) => {
    const fly = () => {
      if(baloon === undefined || line === undefined || kid === undefined) {
        return;
      }
      const BALOON_MOVEMENT = 20;
      let left = this.getNewRandomPosition(baloon.style.left, BALOON_MOVEMENT);
      let  top = this.getNewRandomPosition(baloon.style.top, BALOON_MOVEMENT);
      /*left  = boundaries.leftMax  < left  ? boundaries.leftMin  : left;
      left  = boundaries.leftMin  > left  ? boundaries.leftMax  : left;
      top   = boundaries.topMin   < top   ? boundaries.topMin  : top;
      top   = boundaries.topMax   > top   ? boundaries.topMax  : top;*/
      baloon.style.left = left + 'px';
      baloon.style.top = top + 'px';

      const bottomForLine = this.getNumValue(top + baloon.offsetHeight);
      const leftForLine =  this.getNumValue( (left + (baloon.offsetWidth  / 2)).toString() );
      this.adjustBaloonLine([ bottomForLine, leftForLine ]);
    };

    this.baloonTimeout = setInterval( ()=> { fly();}, 100);
    //this.stopFlyBaloon();
  }

  setpositionKid(baloon:any, line:any, kid:any) {
    if(baloon === undefined || line === undefined || kid === undefined) {
      return;
    }
    const left = baloon.parentElement.offsetWidth - ( (baloon.offsetWidth/2) + baloon.offsetLeft);
    kid.style.left = left + 'px';
  }

  getNumValue(stringValue: string): number {
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
    const current = this.getNumValue(currentNumber);
    const randomNumber = this.randomIntFromInterval(current-tolerance, current+tolerance);
    return randomNumber >= 0 ? randomNumber : current;
  }
  randomIntFromInterval(min:number, max:number):number {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  adjustBaloonLine(setThisPositions: [number, number]) {
    if(!this.line || !this.baloon || !this.kidPlaceholder) {
      return;
    }
    this.adjustLine(this.baloon, this.kidPlaceholder, this.line, setThisPositions);
  }

  adjustLine(from:any, to:any, line:any, setThisPositions:[number, number]) {

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
    line.style.top    = this.getNumValue(top)+'px';
    line.style.left   = this.getNumValue(left)+'px';
    line.style.height = (H) + 'px';
  }

  render() {
    if(! this.props.name || this.props.name==='') {
        return '';
    }
    return (
      <div className="baloon-container" >
          <div className="line"   ref={(elem) => {this.line  = elem}} />
          <div className="baloon" ref={(elem) => {this.baloon = elem}}>
            <div
              className="heart-container"
              onClick={()=>{ this.flyBaloonAway() }}
            >
              <div className="heart">
                {this.props.name}
                <div className="leftTop"/>
                <div className="rightTop"/>
                <div className="bottomMiddle"/>
              </div>
            </div>
          </div>
          <div
            className="kid-placeholder"
            ref={(elem) => {this.kidPlaceholder  = elem}}
            onClick={()=>{ this.flyBaloonAway() }}
          >
            <Kid />
          </div>
    </div>
    );

  }
}
