import * as React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import './home_mobile.css';
import SearchBar from '../../components/searchBar/searchBar';
import Logo from '../../components/logo/logo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearchMessage, turnOffAnimation, set4ReduxTypeOfResume, setDetail } from '../../actions';
import RISearch from "../../reducers/interfaces/RISearch";
import PreloadImages from '../../tools/preloadImages';
import Links from '../../links/links';

interface Props extends React.Props<any> {
  fetchSearchMessage: any; // from redux
  turnOffAnimation: any // from redux
  search: RISearch;   // from redux
  set4ReduxTypeOfResume: any; // from redux
  type: any;
  setDetail: any;
}

export type HistoryContext = {
  push: Function
}


class Home extends React.Component<Props> {

  //private whatsNew: WhatsNew;

  constructor(props: Props) {
    super(props);
    //this.whatsNew = new WhatsNew();
  }

  /* preload images for other part of the app,
   * to have smooth experience */
  preloadedImages = new PreloadImages();

  componentDidMount() {   
    this.props.fetchSearchMessage();
  }

  getContentLink() {
    return Links.CONTENT + "#introduction";
  }

  processFooter()  {    
    return (
      <div className="text">
          <span className="left"/>
          <span className="middle"/>
          <span className="right"/>
      </div>
    );
  }

  processButtons() {    
    return (
      <div className="buttons" onClick={()=> {this.props.turnOffAnimation();}} >
          <a
            href="https://github.com/jozeflacko"
            target="_blank"
            className="button"
            title="Click here to get to know me better!"
          >
    
            Go to GitHub
          </a>
          <Link
            title="Click here to get to know me better!"
            to={this.getContentLink()}
            className="button i-feel-lucky active blink"
          >
    
            Let's explore this Web
          </Link>
        </div>
    );
  }

  render() {
    return (
      <div className="outer">
          <div className="middle">
            <div className="inner">
              <Logo game={true}/>
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
      setDetail,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
