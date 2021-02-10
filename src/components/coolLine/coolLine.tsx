import * as React from 'react';
import './coolLine.css';

interface Props {
    animated?: boolean;
}

export default class CoolLine extends React.Component<Props> {
    render() {
        const animated = this.props.animated === true;
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
