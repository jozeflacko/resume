import * as React from 'react';
import './logo.css';
import './logo_mobile.css';
import { Link } from 'react-router-dom';
import Game from '../game/game';

interface Props extends React.Props<any> {
  game: boolean;

  // just when game is false
  onSmallMovePostfix?: boolean;
  followMouse?: boolean;
}

export default class Logo extends React.Component<Props, {}> {

  leftEyeNode:any;
  rightEyeNode:any;

  eventLeftEye:any;
  eventRightEye:any;

  EVENT_NAME = 'mousemove';

  componentDidMount() {
    if(this.props.followMouse === true)  {
      this.followMouse();
    }
  }
  componentWillUnmount() {
    if(this.props.followMouse === true)  {
      this.stopFollowMouse();
    }
  }

  stopFollowMouse() {
    this.leftEyeNode.addEventListener(this.EVENT_NAME, this.eventLeftEye );
    this.leftEyeNode.addEventListener(this.EVENT_NAME, this.eventRightEye );
  }

  followMouse() {
    const eyeMoveEvent = (node:any, e:any) => {

      if(!node || !e)
        return;

      let mouseX:number = 0, mouseY:number = 0;
      let limitX:number = 105, limitY:number = 105;

      console.log('e.pageX: '+e.pageX+' '+e.pageY);
      console.log('node.offSet: '+node.offsetLeft+' '+node.offsetTop);
      console.log('limit: '+mouseX+'  '+mouseY);

      mouseX = Math.min(e.pageX - node.offsetLeft, limitX);
      mouseY = Math.min(e.pageY - node.offsetTop, limitY);
      if (mouseX < 0) mouseX = 0;
      if (mouseY < 0) mouseY = 0;

      node.style.left = mouseX;
      node.style.top  = mouseY;
/*
      console.log('e.pageX: '+e.pageX+' '+e.pageY);
      console.log('node.offSet: '+node.offsetLeft+' '+node.offsetTop);
      console.log('limit: '+mouseX+'  '+mouseY);*/
    };
    const  leftEyeMoveEvent = (e:any) => {
      eyeMoveEvent(this.leftEyeNode, e);
    };
    const rightEyeMoveEvent = (e:any) => {
      eyeMoveEvent(this.rightEyeNode, e);
    };

    if(this.leftEyeNode !== undefined && this.rightEyeNode !== undefined ) {
      this.eventLeftEye = window.addEventListener(this.EVENT_NAME, (e) => { leftEyeMoveEvent(e) } );
      this.eventRightEye = window.addEventListener(this.EVENT_NAME, (e) => { rightEyeMoveEvent(e) } );
    }
  }

  render() {
    if(this.props.game)
      return <Game />

    const className = this.props.onSmallMovePostfix === false ? "logo" : "logo onSmallMovePostfix";
    return (
      <Link
        to={'/'}
        className={className}
      >
        <span className="g one">G</span>
        <span className="o two">o</span>
        <span className="o tree">o</span>
        <span className="g four">g</span>
        <span className="l five">l</span>
        <span className="e six">e</span>
        <span className="postfix">Resume</span>
        <span className="left-eye two" ref={(el) => {this.leftEyeNode = el;}} />
        <span className="right-eye tree" ref={(el) => {this.rightEyeNode = el;}} />
        <span className="smile">)</span>

      </Link>
    );

  }
}
