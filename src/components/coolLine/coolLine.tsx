import * as React from 'react';
import './coolLine.css';

export default class CoolLine extends React.Component<{
  animated?:boolean
},{}> {
  render() {
    const animated = this.props.animated === true ? true : false;
    const className = animated ? "coolLine-container animated" : "coolLine-container";

    return (
      <div className={className}>
        <div className='wave -one'/>
        <div className='wave -two'/>
        <div className='wave -three'/>
      </div>
    );
  }
}
