import * as React from 'react';
import './baloon.css';
import './baloon_mobile.css';
import './kid.css';


export default class Baloon extends React.Component<{
  name:string;
}, {}> {

  baloon:any;
  line:any;
  kid:any;
  lowerLineOnTop = 55;
  baloonTimeout:any;
  TIMEOUT = 1 * 100; //ms

  componentDidMount() {
    this.adjustBaloonLine();
    this.flyBaloon(this.baloon, this.line, this.kid);
  }

  componentWillMount() {
    if(!this.baloonTimeout) {
      return;
    }
    this.stopFlyBaloon();
  }

  stopFlyBaloon = () => {
    if(!!this.baloonTimeout)
      clearTimeout(this.baloonTimeout);
  }

  flyBaloon = (baloon:any, line:any, kid:any) => {

    this.baloonTimeout = setInterval(()=> {
      if(baloon === undefined || line === undefined || kid === undefined) {
        return;
      }
      const top =  this.getNewRandomPosition(baloon.style.top, 1, 1);
      const left = this.getNewRandomPosition(baloon.style.left, 1, 1);
      baloon.style.top = top;
      baloon.style.left = left;
      this.adjustBaloonLine();


    }, this.TIMEOUT);

  };

  getNewRandomPosition(currentNumber:string, pxLess:number, pxMore:number):string {
    let current:number = parseInt(currentNumber,10);
        current = current >= 0 ? current : 0;
    const randomNumber = this.randomIntFromInterval(current-pxLess, current+pxMore);
    return randomNumber >= 0 ? randomNumber+'px' : current+'px';
  }
  randomIntFromInterval(min:number, max:number):number {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  adjustBaloonLine() {
    if(!this.line || !this.baloon || !this.kid) {
      return;
    }
    this.adjustLine(this.baloon, this.kid, this.line, this.lowerLineOnTop);
  }
  adjustLine(from:any, to:any, line:any, lowerLineOnTop:number) {
  	var fT = from.offsetTop  + from.offsetHeight/2;
    var tT = to.offsetTop 	 + to.offsetHeight/2;
    var fL = from.offsetLeft + from.offsetWidth/2;
    var tL = to.offsetLeft 	 + to.offsetWidth/2;

    var CA   = Math.abs(tT - fT);
    var CO   = Math.abs(tL - fL);
    var H    = Math.sqrt(CA*CA + CO*CO);
    var ANG  = 180 / Math.PI * Math.acos( CA/H );

    if(tT > fT){
        var top  = (tT-fT)/2 + fT;
    }else{
        var top  = (fT-tT)/2 + tT;
    }
    if(tL > fL){
        var left = (tL-fL)/2 + fL;
    }else{
        var left = (fL-tL)/2 + tL;
    }

    if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
      ANG *= -1;
    }
    top-= H/2;

    line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-transform"] = 'rotate('+ ANG +'deg)';
    line.style.top    = (top+lowerLineOnTop)+'px';
    line.style.left   = left+'px';
    line.style.height = (H) + 'px';
  }

  printKid() {

  }

  render() {
    if(! this.props.name || this.props.name==="") {
        return "";
    }
    return (
      <div className="baloon-container">
          <div className="line"  ref={(elem) => {this.line  = elem}} ></div>

          <div className='heart baloon' ref={(elem) => {this.baloon = elem}} >
            {this.props.name}
            <div className="leftTop"></div>
            <div className="rightTop"></div>
            <div className="bottomMiddle"></div>
          </div>

          <div className="kid" ref={(elem) => {this.kid   = elem}}>
              <div className="group">
                <div className="hair"></div>
                <div className="ear"></div>
                <div className="ear right"></div>
                <div className="fringe"></div>
                <div className="face"></div>
                <div className="eyebrow"></div>
                <div className="eye"></div>
                <div className="mouth">
                  <div className="tongue"></div>
                </div>

                <div className="neck"></div>
                <div className="body"></div>
                <div className="lefthand"></div>
                <div className="righthand"></div>
                <div className="belt"></div>
                <div className="leftleg"></div>
                <div className="rightleg"></div>
                <div className="earth"></div>
              </div>
          </div>
        </div>
    );

  }
}
