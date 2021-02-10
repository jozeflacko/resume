import * as React from 'react';
import './logo.css';
import './logo_mobile.css';
import {Link} from 'react-router-dom';
import Game from '../game/game';
import * as FontAwesome from 'react-fontawesome';


interface Props {
    game: boolean;
    onSmallMovePostfix?: boolean;
}

export default class Logo extends React.Component<Props> {
    render() {
        return this.props.game ? <Game/> : (
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
