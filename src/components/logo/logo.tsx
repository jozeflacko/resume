import * as React from 'react';
import './logo.css';
import './logo_mobile.css';
import { Link } from 'react-router-dom';
import Game from '../game/game';

interface Props extends React.Props<any> {
  game: boolean;
}

export default class Logo extends React.Component<Props, {}> {
  render() {
    if(this.props.game)
      return <Game />

    return (
      <Link
        to={'/'}
        className="logo"
      >
        <span className="g one">G</span>
        <span className="o two">o</span>
        <span className="o tree">o</span>
        <span className="g four">g</span>
        <span className="l five">l</span>
        <span className="e six">e</span>
        <span className="postfix">Resume</span>

        <span className="left-eye two"></span>
        <span className="right-eye tree"></span>
        <span className="smile">)</span>

      </Link>
    );

  }
}
