import * as React from 'react';
import './kid.css';

export default class Kid extends React.Component {
  render() {
    return (
      <div className="kid-container" id="kid-container">
          <div className="kid">
              <div className="group">
                <div className="head">
                  <div className="hair"/>
                  <div className="ear"/>
                  <div className="ear right"/>
                  <div className="fringe"/>
                  <div className="face"/>
                  <div className="eyebrow"/>
                  <div className="eye"/>
                  <div className="mouth">
                    <div className="tongue"/>
                  </div>
                </div>

                <div className="neck"/>
                <div className="body">
                  <div className="brand-name">CSS</div>
                </div>
                <div className="lefthand"/>
                <div className="righthand"/>
                <div className="belt"/>
                <div className="leftleg"/>
                <div className="rightleg"/>
                <div className="earth"/>
              </div>
          </div>
        </div>
    );

  }
}
