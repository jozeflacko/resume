import * as React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import './home_mobile.css';
import SearchBar from '../../components/searchBar/searchBar';
import Logo from '../../components/logo/logo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearchMessage, turnOffAnimation, set4ReduxTypeOfResume } from '../../actions';
import RISearch from "../../reducers/interfaces/RISearch";
import PreloadImages from '../../tools/preloadImages';

interface Props extends React.Props<any> {
  fetchSearchMessage: any; // from redux
  turnOffAnimation: any // from redux
  search: RISearch;   // from redux
  set4ReduxTypeOfResume: any; // from redux
  type: any;
}

export type HistoryContext = {
  push: Function
}

class Home extends React.Component<Props, { forGoogle:true }> {

  /* preload images for other part of the app,
   * to have smooth experience */
  preloadedImages = new PreloadImages();

  resumeType:string|null = null;
  getTypeOfResume() {
    return this.resumeType;
  }
  setTypeOfResume() {
    if(this.resumeType === null) {
      this.resumeType = (window.location.pathname).indexOf("resumeforgoogle") > -1 ? "GOOGLE" : "NORMAL";
      console.log('TYPE OF RESUME: '+ this.resumeType );
      this.props.set4ReduxTypeOfResume( this.resumeType ); // MUST BE FIRST !!! because other redux states will depend on it
    }
  }
  isForGoogle() {
    return this.getTypeOfResume() === 'GOOGLE';
  }


  componentDidMount() {   
    this.setTypeOfResume();
    this.props.fetchSearchMessage( this.isForGoogle() );
  }

  getDetailsLink() {
    return this.isForGoogle() ? '/resumeforgoogle/details' : '/resume/details'
  }

  processFooter()  {
    if(!this.isForGoogle()) {
      return (
        <div className="text general"/>        
      )
    }
    
    return (
      <div className="text">
          <span className="left">Ok</span>
          <span className="middle"><Logo game={false} onSmallMovePostfix={false} isForGoogle={this.isForGoogle()} /></span>
          <span className="right"> let's have fun!</span>
      </div>
    );
  }

  processButtons() {
    if(this.isForGoogle() === false) {
      return (
        <div className="buttons general" onClick={()=> {this.props.turnOffAnimation();}} >
          <Link
            title="Go back to the Overview"
            to="/"
            className="button i-feel-lucky"
          >
            Back to Overview
          </Link>
          <Link
            to={this.getDetailsLink()}
            className="button active blink"
            title="Click here to get to know me better!"
          >
            Go get to know me
          </Link>
        </div>
      )
    }
    
    return (
      <div className="buttons" onClick={()=> {this.props.turnOffAnimation();}} >
          <Link
            to={this.getDetailsLink()}
            className="button"
            title="Click here to get to know me better!"
          >
            Search for Jozef
          </Link>
          <Link
            title="Click here to get to know me better!"
            to={this.getDetailsLink()}
            className="button i-feel-lucky active blink"
          >
            I am feeling lucky
          </Link>
        </div>
    );
  }

  render() {
    return (
      <div className="outer">
          <div className="middle">
            <div className="inner">
              <Logo game={true} isForGoogle={this.isForGoogle()}/>
              <SearchBar search={this.props.search} />
              {this.processButtons()}
              {this.processFooter()}             
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps( state:Props, ownProps: any = {} ) {
  
  return {
    search: state.search,
    type: state.type,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
      fetchSearchMessage,
      turnOffAnimation,
      set4ReduxTypeOfResume,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default connect<any, any, Props>(mapStateToProps, mapDispatchToProps)(Home);
