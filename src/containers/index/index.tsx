import * as React from 'react';
import './index.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Links from '../../links/links';

class Index extends React.Component<{}, {
  value:string;
  showErrorMessage:boolean;
}> {
  constructor(props) {
    super(props);
    this.state = {value: '', showErrorMessage: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, showErrorMessage: false});
  }

  renderPublicProjects() {    
    return (
      <div className="projects-container">
        <h4>or choose something from here:</h4>
        { Links.getAllProject().map((item:{ name:string, link:string, description:string } )=>{
           return this.renderPublicProject(item);
        })}
      </div>
    );
  }
  renderPublicProject( project:{ name:string, link:string, description:string } ) {
    return (
        <div key={project.link} className="project" onClick={()=> window.open(project.link)}>
          <label>{project.name}</label>
          <div className="description">
            {project.description}
          </div>
        </div>
    );
  }

  handleSubmit(event) {
    let searchFor:string = this.state.value;

    if(searchFor && searchFor !== '') {

      searchFor = searchFor.toLowerCase();
      searchFor = searchFor.trim();
      while(searchFor.indexOf(' ') > -1) {
        searchFor = searchFor.replace(' ', '');
      }
      if(searchFor !== null &&  searchFor !== undefined && searchFor !== '') {
          if(Links.doesLinkExist(searchFor) === true) {
            window.open('/'+searchFor,"_self");
            this.setState({showErrorMessage: false});
          } else {
            this.setState({...this.state, showErrorMessage: true});
          }
      }
    }
    event.preventDefault();
  }

  render() {
    return (
           
      <div className="index">
        <form onSubmit={this.handleSubmit} >
          <h2>Hi!<br/>This is <b>Jozef Lacko's</b><br/> workspace.</h2>
          <div className="search">
            <label>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter Project Name"
              />
            </label>
            <input type="submit" value="Go" />
          </div>
          <div className={this.state.showErrorMessage ? 'error show' : 'error'}>
            Project not found!
          </div>
          {this.renderPublicProjects()}
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
