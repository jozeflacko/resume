import * as React from 'react';
import './logo.css';
import './logo_mobile.css';
import { Link } from 'react-router-dom';
import Game from '../game/game';

interface Props extends React.Props<any> {
  game: boolean;
  // just when game is false
  onSmallMovePostfix?: boolean;
}

export default class Logo extends React.Component<Props, {}> {

  render() {
    if(this.props.game)
      return <Game />

   /*
    if(this.props.isForGoogle === false) {
      return (
        <Link
          to={'/resume'}
          className="jl-logo bblue"
        >
          Back Home
        </Link>
      );
    }
    */

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
        <span className="postfix">
          <span className="spin">
            <span className="front">Resume</span>
            <span className="back">Smile!</span>
          </span>
        </span>
        <span className="left-eye two" />
        <span className="right-eye tree" />
        <span className="smile">)</span>

      </Link>
    );

  }
}
