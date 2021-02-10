import * as React from 'react';
import './hero.css';
import './hero_mobile.css';
/*import * as FontAwesome from 'react-fontawesome';*/

interface Props {
  photo:string;
}

/*
    Not using here 4 now
 */
export default class Hero extends React.Component<Props> {
  render() {
    if(! this.props.photo || this.props.photo==="") {
        return "";
    }
    return "";
/*
    return (
      <div className="hero-container">
        <div className="hero">
          <div className="head">
              <img src={this.props.photo} alt="Smiley face"></img>
          </div>
          <div className="torso">
            <div className="left">
              <div className="hand"></div>
            </div>
            <div className="right">
              <div className="hand"></div>
            </div>
          </div>
          <div className="torso-bottom">
          </div>
          <div className="foot"></div>
        </div>
      </div>
    );
    */
  }
}
