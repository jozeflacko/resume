import * as React from 'react';
import './result.css';
import IResult from '../../interfaces/IResult';

interface Props extends React.Props<any> {
  result: IResult;
  isActive: boolean;
  onClick: any;
  onActiveClassName: string;
}

export default class Result extends React.Component<Props, {}> {
  render() {
    if( ! this.props.result )
    return "Loading ...";

    const result = this.props.result;
    const myClassName = this.props.isActive ?  "result active " + this.props.onActiveClassName :  "result";

    return (
      <div className={myClassName} onClick={() => { this.props.onClick(); }} >
        <div className="title cblue">{result.getTitle()}</div>
        <div className="subtitle">{result.getSubtitle()}</div>
        <div className="description">{result.getDescription()}</div>
      </div>
    );
  }
}
