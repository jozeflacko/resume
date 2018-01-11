import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
import './rocket.css';

class MyRocket extends React.Component {

  render() {
    return (
      <div className="my-rocket">
        <FontAwesome name="tint" className="tint"/>
        <FontAwesome name="rocket" className="rocket" />
      </div>
    );
  }
}

export default MyRocket;
