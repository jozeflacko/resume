import * as React from 'react';
import './result.css';
import './result_mobile.css';
import IResult from '../../interfaces/IResult';
import CoolLine from '../coolLine/coolLine';

interface Props {
    result: IResult;
    isActive: boolean;
    onClick: (event: any) => void;
    onActiveClassName: string;
}

export default class Result extends React.Component<Props, {}> {

    processOnActiveCoolLine() {
        return this.props.isActive ? <CoolLine animated={true}/> : "";
    }

    render() {
        if (!this.props.result) {
            return "Loading ...";
        }

        const result = this.props.result;
        const myClassName = this.props.isActive ? "result active " + this.props.onActiveClassName : "result";

        return (
            <div className={myClassName} onClick={this.props.onClick}>
                <div className="title cblue">{result.getTitle()}</div>
                <div className="subtitle">{result.getSubtitle()}</div>
                <div className="description">{result.getDescription()}</div>
                {this.processOnActiveCoolLine()}
            </div>
        );
    }
}
