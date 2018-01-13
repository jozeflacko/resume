import * as React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import './home_mobile.css';
import SearchBar from '../../components/searchBar/searchBar';
import Logo from '../../components/logo/logo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearchMessage, turnOffAnimation } from '../../actions';
import RISearch from "../../reducers/interfaces/RISearch";
import * as FontAwesome from 'react-fontawesome';

interface Props extends React.Props<any> {
  fetchSearchMessage: any; // from redux
  turnOffAnimation: any // from redux
  search: RISearch;   // from redux
}

export type HistoryContext = {
  push: Function
}

class Home extends React.Component<Props, {}> {

  componentDidMount() {
    this.props.fetchSearchMessage();
  }
  render() {
    return (
      <div className="outer">
          <div className="middle">
            <div className="inner">
              <Logo game={true} />
              <SearchBar search={this.props.search} />
              <div className="buttons" onClick={ ()=> { this.props.turnOffAnimation(); } } >
                <Link
                  to={'/results'}
                  className="button"
                  title="Click here to get to know me better!"
                >
                  Google Search
                </Link>
                <Link
                  title="Click here to get to know me better!"
                  to={'/results'}
                  className="button i-feel-lucky active"
                >
                  I am feeling lucky
                </Link>
              </div>
              <div className="text">
                Jozef Lacko <span>
                <FontAwesome name="hand-peace-o" />
                </span> Vienna, 2018
              </div>
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps( state:Props, ownProps: any = {} ) {
  return {
    search: state.search
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
      fetchSearchMessage,
      turnOffAnimation,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default connect<any, any, Props>(mapStateToProps, mapDispatchToProps)(Home);
