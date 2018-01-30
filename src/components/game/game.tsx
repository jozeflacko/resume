import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
import './game.css';
import './gameInit.css';
import './game_mobile.css';
import Timer from './timer';

const THUMB_CLASS = 'thumb';
const MAIN_THUMB_ID = 'mainThumb';
const THUMB_INIT_CLASS = 'init-thumb';

export default class Game extends React.Component {

  MAX_RANDOM_NUMBER = 1000;
  INIT_COUNTDOWN = 20;
  ON_GAME_RESET_COUNTDOWN = 20;
  INIT_SCORE = 0;
  YOUR_SCORE = "Your score is: ";

  private gameNode: any;
  private hintNode: any;
  private playing = false;
  private score = this.INIT_SCORE;
  private countdown = this.INIT_COUNTDOWN;
  private timer: Timer = new Timer(this.INIT_COUNTDOWN, this.ON_GAME_RESET_COUNTDOWN, () => { this.stopGame(); }, 'countdown');

  getMainThumb() {
    return document.getElementById(MAIN_THUMB_ID);
  }

  getAllThumbs() { // expect init thumbs
    return this.gameNode.getElementsByClassName(THUMB_CLASS);
  }

  getInitThumbs() {
    return this.gameNode.getElementsByClassName(THUMB_INIT_CLASS);
  }

  showHint(show:boolean) {
    const defaultC= "hint-text blightyellow";
    this.hintNode.className = (show) ? defaultC + " show-hint" : defaultC;
  }

  readyGame() {
    this.playing = true; // must be before moveThumb
    this.gameNode.className = "game ready";
    this.showHint(false);
    this.insertThumb(true);
    this.hideAllInitThumbs();
    this.clickEvent.install();
    this.playGame();
  }
  playGame() {
    this.gameNode.className="game play";
    this.resetCounters();
    this.showHint(true);
    setTimeout( () => {
      const mainThumb = this.getMainThumb();
      // must ask because we can close game prematurely
      if ( mainThumb && this.gameNode.className === "game play") {
          this.moveThumb(mainThumb);
          this.timer.start();
      }
    }, 2000);
  }

  stopGame() {
    this.playing = false;
    this.playing = false;
    this.removeAllThumbs();
    this.renderInitThumbs();
    this.timer.stop(false);
    this.gameNode.className = "game ready show-score";
    this.gameNode.querySelector('.score').innerHTML = this.YOUR_SCORE + (this.score);
    this.showHint(false);
  }

  finishGame() {
    this.stopGame();
    this.gameNode.className = "game";
    this.showHint(false);
    this.gameNode.querySelector('.score').innerHTML = this.YOUR_SCORE + (this.score);
    this.clickEvent.remove();
  }

  resetCounters() {
    this.countdown = this.INIT_COUNTDOWN;
    //this.gameNode.querySelector('#countdown').innerHTML = this.countdown.toString();
    this.timer.setInit();

    this.score = this.INIT_SCORE;
    this.gameNode.querySelector('.score').innerHTML = ""; // erase score counter!
  }

  insertThumb(main:boolean = false, move:boolean = true) {
    const thumb = document.createElement("DIV");

    thumb.className=THUMB_CLASS;
    this.gameNode.appendChild(thumb);

    if(main) {
      thumb.id =MAIN_THUMB_ID;
      this.addMessage("Hi, click on me!");
       // will be started manually after first click
    } else if(move) {
      this.moveThumb(thumb);
    }
  }

  processScore() {
    switch(this.score) {
      case 5: this.addMessage("My friends do not like clicks!");
        break;
      case 10: this.addMessage("Can you do 100?");
        break;
      default:
        break;
    }
  }

  clickEvent = (() => {
    const CLICK = 'click';
    const myEvent = (event:any) => {

        if(event.target.id === MAIN_THUMB_ID) {
          const mainThumb = event.target;
          this.addPoint(mainThumb);

          if( mainThumb.getAttribute('disabled') !== 'true') {
            mainThumb.setAttribute('disabled', 'true');
            setTimeout(() => {
              mainThumb.setAttribute('disabled','false');
            }, 500);
            this.insertThumb();
            this.removeMessage();
            this.timer.reset();
          }

          this.processScore();
        } else if(event.target.className === THUMB_CLASS) {
            const thumb = event.target;
            thumb.className = "thumb fat";
        }
    };
    return {
      install: () => {
        this.gameNode.addEventListener(CLICK, myEvent);
      },
      remove: () => {
        this.gameNode.removeEventListener(CLICK, myEvent);
      }
    }
  })();

  addPoint(thumb: any) {
    this.gameNode.querySelector('.score').innerHTML = this.YOUR_SCORE + (++this.score);
  }

  removeAllThumbs(): void {
    const thumbs = this.getAllThumbs();

    while(thumbs.length > 0) {
        thumbs[0].parentNode.removeChild(thumbs[0]);
    }
  }

  hideAllInitThumbs() {
    const thumbs = this.getInitThumbs();
    for(let i=0; i<thumbs.length; i++) {
      thumbs[i].style.opacity = '0';
      thumbs[i].style.top = '1000px';
    }
  }

  renderInitThumbs() {
    const thumbs = this.getInitThumbs();

    if(thumbs !== null) {
      for(let i=0; i<thumbs.length; i++) {
        thumbs[i].style.opacity = 1;
        thumbs[i].style.top = '';
      }
    }
  }

  moveThumb(thumb: any) {
    thumb.style.backgroundColor  = this.createRandomColor();
    thumb.style.zIndex  = this.createRandomZindex()
    const newPosition = this.createNewPosition();
    thumb.style.top = newPosition[0];
    thumb.style.left = newPosition[1];

    if( this.playing === true ) {
      setTimeout( () => {
        if(this.gameNode) // must ask because of timeout
          this.moveThumb(thumb);
      }, 1500);
    }
  }

  createRandomColor(): string {
  	return "#" + (Math.floor( Math.random() * 0xFFFFFF )).toString(16);
  }

  createNewPosition():[string, string] {
    // height, width
    return [
       (Math.floor(Math.random() * (this.gameNode.offsetHeight - 50))) + 'px',
       (Math.floor(Math.random() * (this.gameNode.offsetWidth  - 50))) + 'px'
    ];
  };

  createRandomZindex(): number {
    return Math.floor(Math.random() * 1000) + 1;
  };

  addMessage(message: string) {
    const mainThumb = this.getMainThumb();
    if(!mainThumb)
      return;

    const messageNode = document.createElement("DIV");
    messageNode.className="message";
    messageNode.innerHTML = message;
    mainThumb.appendChild(messageNode);
  }
  removeMessage() {
    const mainThumb = this.getMainThumb();
    if(mainThumb)
      mainThumb.innerHTML = ""; // remove message
  }

  render() {
    return (
      <div className="game-container">
        <div className="hint-text" ref={(el) => {this.hintNode = el;}}>
          <p className="title">Hint:</p>
          <p className="main">Click on the Happy Thumb as many times you can!</p>
          <p>But be aware that Sad Thumbs do not want to be disturbed!<br/>
          It will not be easy, because it will get crowded.</p>
        </div>

        <div className="game" ref={(el) => {this.gameNode = el;}} >

            <span className="score"/>
            <span className="timer">
              Remaining time: <span id="countdown">{this.countdown}</span>sec
            </span>
            <FontAwesome
              name="play-circle"
              className="play-btn"
              title="Start the Game"
              onClick={(e:any) => {
                this.readyGame();
              }}
            />
            <FontAwesome
              name="times-circle"
              className="stop-btn"
              onClick={() => {
                this.finishGame();
              }}
            />
            <div className="init">
              <div className="init-thumb init-1"/>
              <div className="init-thumb init-2"/>
              <div className="init-thumb init-3"/>
              <div className="init-thumb init-middle"/>
              <div className="init-thumb init-4"/>
              <div className="init-thumb init-5"/>
              <div className="init-thumb init-6"/>
            </div>
        </div>
      </div>
    );
  }
}


/*


*/
