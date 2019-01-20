import * as React from 'react';
import './logo.css';
import './logo_mobile.css';
import { Link } from 'react-router-dom';
import Game from '../game/game';
import * as FontAwesome from 'react-fontawesome';


interface Props extends React.Props<any> {
  game: boolean;
  // just when game is false
  onSmallMovePostfix?: boolean;
}

export default class Logo extends React.Component<Props, {}> {

  render() {
    if(this.props.game)
      return <Game />
    
    return (   
        <Link
          to={'/'}
          className="button active home-button"
          title="Click here to get to know me better!"
        >
          <FontAwesome name="hand-o-left" className="back-icon"/>
          Back Home       
        </Link>   
    );
  }
 
}
