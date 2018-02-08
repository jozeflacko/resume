import * as React from 'react';
import './index.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Index extends React.Component<{}, {
  value:string;
}> {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let searchFor:string = this.state.value;

    if(searchFor && searchFor !== '') {

      searchFor = searchFor.toLowerCase();
      searchFor = searchFor.trim();
      while(searchFor.indexOf(' ') > -1) {
        searchFor = searchFor.replace(' ', '');
      }
      if(searchFor && searchFor !== '') {
          window.open('/'+searchFor,"_self");
          this.setState({value: ''});
      }
    }
    event.preventDefault();
  }
  render() {

    return (
      <div className="index">
        <form onSubmit={this.handleSubmit} >
          <h2>Hi!<br/>This is <b>Jozef Lacko's</b><br/> web page.</h2>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Please insert project name"
            />
          </label>
          <input type="submit" value="Go" />
        </form>
      </div>
    );
  }
}

function mapStateToProps( state:{}, ownProps: any = {} ) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
//export default connect<any, any, Props>(mapStateToProps, mapDispatchToProps)(Home);
