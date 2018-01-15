import * as React from 'react';
import './coolIcon.css';
import './coolIcon_mobile.css';
import * as FontAwesome from 'react-fontawesome';

export default class CoolIcon extends React.Component<{
  name:any;
}, {}> {
  render() {
    if(! this.props.name || this.props.name==="") {
        return "";
    }

    return (
      <div className="coolIcon-container">
      
        <div className="icon">
          <FontAwesome name={this.props.name} className="cool-icon"/>
        </div>
      </div>
    );

  }
}
