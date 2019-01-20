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
//import { WhatsNew } from '../../texts/whatsNew';

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


class Home extends React.Component<Props> {

  //private whatsNew: WhatsNew;

  constructor(props: Props) {
    super(props);
    //this.whatsNew = new WhatsNew();
  }

  /* preload images for other part of the app,
   * to have smooth experience */
  preloadedImages = new PreloadImages();

  resumeType:string|null = null;
  getTypeOfResume() {
    return this.resumeType;
  }
  componentDidMount() {   
    this.props.fetchSearchMessage();
  }

  getDetailsLink() {
    return '/resume';
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
            href="https://github.com/opam"
            target="_blank"
            className="button"
            title="Click here to get to know me better!"
          >
            Go to GitHub
          </a>
          <Link
            title="Click here to get to know me better!"
            to={this.getDetailsLink()}
            className="button i-feel-lucky active blink"
          >
            Open Resume
          </Link>
        </div>
    );
  }

  renderWhatsNew = () => {
    return "";
    /*
    const newthings = this.whatsNew.get();
    
    return (
      <div className="whatsnew-container">
        <div className="title">What´s new?</div>
        <ul className="whatsnew">
          
          {
            newthings.map((whats, index)=>{
              return (
                <li className="whatnew-item" key={whats.name} onClick={()=>{window.open(whats.github)}}>
                  <div className="name">{whats.name}</div>
                  <div className="description">{whats.description}</div>
                  <div className="created">{whats.created}</div>
                  <div className="page">{whats.page}</div>                
                </li>
              )
            })
          }        
        </ul>
      </div>
    )
    */
  }

  render() {
    return (
      <div className="outer">
          <div className="middle">
            <div className="inner">
              <Logo game={true}/>
              <SearchBar search={this.props.search} />
              {this.processButtons()}
              {this.renderWhatsNew()}
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
