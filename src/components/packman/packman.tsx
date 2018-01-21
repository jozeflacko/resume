import * as React from 'react';
import './packman.css';
import './packman_mobile.css';

class Packman extends React.Component {

  render() {
    return (
      <div className="packman-component">
        <div className="text">
          <span className="character small">  <label>jlacko27@</label></span>
          <span className="character one">    <label>g</label>        </span>
          <span className="character two">    <label>m</label>        </span>
          <span className="character repeated"><label>a</label>       </span>
          <span className="character repeated"><label>a</label>       </span>
          <span className="character repeated"><label>a</label>       </span>
          <span className="character repeated"><label>a</label>       </span>
          <span className="character repeated"><label>a</label>       </span>
          <span className="character repeated"><label>a</label>       </span>
          <span className="character repeated"><label>a</label>       </span>
          <span className="character repeated"><label>a</label>       </span>
          <span className="character repeated"><label>a</label>       </span>
          <span className="character repeated"><label>a</label>       </span>
          <span className="character repeated"><label>a</label>       </span>
          <span className="character four">   <label>i</label>        </span>
          <span className="character five">   <label>l</label>        </span>
          <span className="character six small"><label>.com</label>   </span>
        </div>
        <div className="object">
          <span className="white-block"/>
          <div className="pacman">
            <div className="pacman-top"/>
            <div className="pacman-bottom"/>
            <div className="feed"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Packman;
