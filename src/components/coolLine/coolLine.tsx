import * as React from 'react';
import './coolLine.css';

export default class CoolLine extends React.Component {
  render() {
    return (
      <div className="coolLine-container">
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div>
    );
  }
}
