import * as React from 'react';
import './coolIcon.css';
import './coolIcon_mobile.css';
import * as FontAwesome from 'react-fontawesome';

interface Props {
    name: string;
}

export default class CoolIcon extends React.Component<Props> {
    render() {
        return !this.props.name || this.props.name === "" ? "" : (
            <div className="coolIcon-container">
                <div className="icon">
                    <FontAwesome name={this.props.name} className="cool-icon"/>
                </div>
            </div>
        );
    }
}
