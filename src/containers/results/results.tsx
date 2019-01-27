import * as React from 'react';
import './results.css';
import './results_mobile.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  set4ReduxTypeOfResume,
  fetchLinks,
  fetchIntro,
  fetchWorkExperience,
  fetchEducation,
  fetchSearchMessage,
  fetchSkills,
  fetchFreeTime, 
  turnOffAnimation,
  setDetail
}  from '../../actions';
import SearchBar from '../../components/searchBar/searchBar';
import Logo from '../../components/logo/logo';
import Result from '../../components/result/result';
import Detail from '../../components/detail/detail';
import { ILink } from '../../texts/links';
import RISearch from "../../reducers/interfaces/RISearch";
import PreloadImages from '../../tools/preloadImages';
import Contact from '../../components/contact/contact';
import * as AddressBarUtils from '../../utils/AddressBarUtils';


interface Props extends React.Props<any> {
  set4ReduxTypeOfResume: any; // from redux
  fetchLinks: any;
  fetchIntro: any;
  fetchWorkExperience: any;
  fetchEducation: any;
  fetchDetail: any;
  fetchSearchMessage: any;
  fetchSkills: any;
  fetchFreeTime: any;
  turnOffAnimation: any;
  setDetail: any;

  search: RISearch;   // from redux
  information: any; // from redux
  detail: any; // from redux

  type: any;
}

class Results extends React.Component<Props, { isActive:boolean }>  {

  constructor(props:Props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  calcDate(date1,date2): string {
    let diff = Math.floor(date1.getTime() - date2.getTime());
    let day = 1000 * 60 * 60 * 24;

    let days = Math.floor(diff/day);
    let months = Math.floor(days/31);
    let years = Math.floor(months/12);

    let message: string = years.toString();
    if(months - (years*12) >= 2) {
      message += " and a half"; 
    }     
    return message + " years";
  }

  navigateToCorrectSection = () => {
    this.navigateToResult();    
  }

  

  private setValueIntoAddressbar(name) {
    AddressBarUtils.setSection(name);
  }


  preloadImages = new PreloadImages();

  componentDidMount() {    
    this.props.fetchLinks();
    this.props.fetchIntro();
    this.props.fetchWorkExperience();
    this.props.fetchEducation();
    this.props.fetchSearchMessage();
    this.props.fetchSkills();
    this.props.fetchFreeTime();
    this.props.turnOffAnimation(); // we never want here animation
    this.navigateToCorrectSection();

    const navigateToCorrectSection = this.navigateToCorrectSection; 
    window.onload = () => {
      navigateToCorrectSection();
    }
    
    
  }

  createLinks() {
    if( ! this.props.information.links )
      return "Loading ...";

    return this.props.information.links.map( (link: ILink, index: number) => {
      const priority = link.priority  ? 'priority-' + link.priority  : 'priority-high';
      const className = index === 0 ? priority +' active' : priority ; // only first can be active, other are external links

      return (
        <a
          key={link.name}
          href={link.url}
          title={link.title}
          className={className}
          target={index === 0 ? "": "_blank"}
        >
          {link.name}
        </a>
      );
    });
  }

  setActiveDetail() {
    this.setState({ isActive: true });
  }
  setUnactiveDetail() {
    this.setState({ isActive: false });
    this.props.setDetail(null);
  }

  navigateToResult = (name?:string) => {
    const { experience, education, intro, skills, freeTime} = this.props.information;

    const takenFromHash = name === undefined;
    if(takenFromHash) {
      name = location.hash;
    }


    if(intro === undefined) {
      return; // too soon
    } else {  
        let strippedName = name;
        if(strippedName.indexOf('#') > -1) {
          strippedName = strippedName.replace('#','');
          strippedName = (strippedName.split(":_"))[0]; 
        }

        let detail: any = null;
        switch(strippedName) {
          case "introduction":
            detail = intro;
            break;
          case "experience":
            detail = experience;
            break;
          case "education":
            detail = education;
            break;
          case "skills":
            detail = skills;
            break;
          case "what'snew":
            detail = freeTime;
            break;
          default:
            detail = intro;
            name = "introduction";
            break;
        }

        this.props.setDetail(detail); 
        this.setActiveDetail(); 
        if(takenFromHash === false ) {
          this.setValueIntoAddressbar(name);
        }
    }
  }

  createMyLife() {
    const { experience, education, intro, skills, freeTime} = this.props.information;

    return (
      <div>
        <Result
          result={intro}
          isActive={this.props.information.detail === this.props.information.intro}
          onClick={() => {this.navigateToResult("introduction"); }}
          onActiveClassName="blightblue"
        />
        <Result
          result={experience}
          isActive={this.props.information.detail === this.props.information.experience}
          onClick={() => {this.navigateToResult("experience");}}
          onActiveClassName="blightred"
        />
        <Result
          result={education}
          isActive={this.props.information.detail === this.props.information.education}
          onClick={() => {this.navigateToResult("education");}}
          onActiveClassName="blightyellow"
        />
        <Result
          result={skills}
          isActive={this.props.information.detail === this.props.information.skills}
          onClick={() => {this.navigateToResult("skills");}}
          onActiveClassName="blightblue"
        />
        <Result
          result={freeTime}
          isActive={this.props.information.detail === this.props.information.freeTime}
          onClick={() => {this.navigateToResult("what'snew");}}
          onActiveClassName="blightgreen"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="results">
        <div className="header">

          <div className="left" onClick={()=> {this.props.turnOffAnimation();}} >
            <Logo game={false} />
          </div>
          <div className="right">
            <SearchBar search={this.props.search} />
            <div className="links">{this.createLinks()}</div>
          </div>
        </div>
        <div className="body">
          <div className="left">
            <div className="info"><br/></div>
            {this.createMyLife()}
            {<Contact/>}
          </div>
          <div className="right">
            <Detail detail={this.props.information.detail} isActive={this.state.isActive} setUnactiveDetail={() => {this.setUnactiveDetail()}}/>
          </div>
          <div className="clear"/>
        </div>
        <div className="footer">
          <span>This web is under long term development</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: Props) {
  return {
    information: state.information,
    search: state.search,
    type: state.type
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    fetchLinks,
    fetchIntro,
    fetchWorkExperience,
    fetchEducation,
    fetchSearchMessage,
    fetchSkills,
    fetchFreeTime,
    turnOffAnimation,
    setDetail,
    set4ReduxTypeOfResume,
  }, dispatch );
}

export default connect<{}, {}, Props>(mapStateToProps, mapDispatchToProps)(Results);
