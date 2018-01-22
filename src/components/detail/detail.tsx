import * as React from 'react';
import './detail.css';
import './detail_mobile.css';
import './alive.css';
import * as FontAwesome from 'react-fontawesome';
import Sentence from '../sentence/sentence';
//import SkillsTetris from '../../components/skillsTetris/skillsTetris';
import Rocket from '../rocket/rocket';
import Hero from '../hero/hero';
import Baloon from '../baloon/baloon'
/*import CoolIcon from '../coolIcon/coolIcon';*/
import CoolLine from '../coolLine/coolLine';
import FlipPhotos from '../flipPhotos/flipPhotos';

interface Props extends React.Props<any> {
  detail: any;
  isActive: boolean;
  setUnactiveDetail: any;
}

export default class Detail extends React.Component<Props, {}> {
  processDetail() {
    const { photo, flipPhotos, animation, sentence, bottomPhoto, description, items, bulletgroups } = this.props.detail.getDetail();
    return (
      <div className="content">
        {this.processHero(photo)}
        {this.processFlipPhotos(flipPhotos)}
        <div className="photo">{this.processPhoto(photo)}</div>
        {this.processSentence(sentence)}
        <div className="description">{this.processDescription(description)}</div>
        <div className="items">{this.processItems(items)}</div>
        {this.processBulletsgroups(bulletgroups)}
        {this.processPhoto(bottomPhoto, 'bottom-photo')}
        {this.processAnimation(animation)}
      </div>
    );
  }

  processAnimation(animation:string) {
    if(animation === 'rocket')
      return <Rocket/>
    return "";
  }

  processFlipPhotos(flipPhotos:Array<string>){
    return <FlipPhotos flipPhotos={flipPhotos} numberOfRows={4}/>;
  }

  processPhoto(photo: string, className = 'my-photo') {
    if (! photo)
      return "";

    return (
        <img src={photo} key={photo} alt="Smiley face" className={className}/>
    );
  }

  processHero(photo: string) {
    if (! photo)
      return "";
    return (<Hero photo={photo}/>);
  }

  processLogos(logos: Array<string>) {
    return logos ? logos.map((logo) => {
      return this.processPhoto(logo); // key is rendered in process photo
    }) : "";
  }

  processDescription(description: Array<String>) {
    return description ? description.map((paragraf:string, index:number) => {
      return (<p key={"key"+index}>{paragraf}</p>);
    }) : "";
  }

  processBulletsgroups(bulletgroups: any) {
    return bulletgroups ? bulletgroups.map((bulletgroup: any)=>{
      return (
        <div key={bulletgroup.key} className="bulletgroups">
          <div className="title">{bulletgroup.title}</div>
          <div className="groups">
            { bulletgroup.bullets.map((group: {subtitle: string, description: string, bullets?: any, bubbless?: any}, index: number) => {
              return (
                <div key={"key"+index} className="group">
                  <div className="subtitle cblue">{group.subtitle}</div>
                  <div className="description">{group.description}</div>
                  <div className="bullets">
                    {this.processBullets(group.bullets)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      );
    }) : "";
  }

  processBullets(bullets: Array<{key: string, picture: 'string', label: string, value: string, bubbles: Array<{value: string, size: number}>}>) {
    return bullets.map((bullet, index) => {
      const key = bullet.key ? bullet.key : 'key'+index;
      return (
        <div key={key} className="bullet">
          {this.processIconAndLabel(bullet)}
          <span className="value">{bullet.value}</span>
          {this.processBubbless(bullet.bubbles)}
        </div>
      );
    });
  }

  processIconAndLabel(bullet:any) {
    if(bullet.picture) {
      return (
        <label className="label">
          {this.processPhoto(bullet.picture)}
          {bullet.label}
        </label>
      );
    } else if(bullet.label || bullet.icon) {
      const icon = bullet.icon || "circle-thin";
      const className = bullet.className && bullet.className != '' ? 'icon cblue '+bullet.className : 'icon cblue';
      return (
        <label className="label">
          <FontAwesome name={icon} className={className}/>
          {bullet.label}
        </label>
      );
    }  else return "";
  }

  processBubbless(bubbles: Array<{value: string, size: number}>) {
    if(!bubbles)
    return "";

    const printBubbles = () => {
      return bubbles.map((bubble, index) => {
        if(bubble.size === 0) {
          const className = 'bubble no-style';
          return (
            <div key={'heart-'+index.toString()} className={className}>
              <Baloon name={bubble.value}/>
            </div>
          )
        }
        return <div key={index.toString()} className={'bubble size-'+bubble.size}>{bubble.value}</div>;
      });
    }

    return (
      <div className="bubbles">
        {printBubbles()}
      </div>
    );
  }

  processItems(items: any) {
    return items ? items.map((item: any, index: number) => {
      const { name, subname, place, from, to, description, notes, logos } = item;
      return (
        <div className="item" key={"key"+index}>
          <div className="timerange">
            <div className="from"       >{this.printValue(from)}        </div>
            <div className="to"         >{this.printValue(to)}          </div>
          </div>

          <div className="myHead">
            <div className="name cblue" >{this.printValue(name)}        </div>

            <div className="subname"    >{this.printValue(subname)}     </div>
            <div className="place"      >{this.printValue(place)}       </div>
          </div>
          <div className="logos">
            {this.processLogos(logos)}
          </div>
          <div className="myBody">
            <div className="description">{this.printValue(description)} </div>
            <div className="notes"      >{this.printValue(notes)}       </div>
          </div>
        </div>
      );
    }) : "";
  }

  printValue(value:string|undefined) {
    return value !== undefined ? value : "";
  }

  renderIcon(iconName:string|undefined) {
    if(iconName === undefined)
      return "";
    else
      return <FontAwesome name={this.props.detail.getDetail().icon} />
  }

  processSentence(sentence:{
    image:string,
    startSentence:string,
    endSentences:Array<string>
  }) {
    if(sentence === undefined)
      return "";
    return (<Sentence image={sentence.image} startSentence={sentence.startSentence} endSentences={sentence.endSentences} />);
  }

  render() {
    if(! this.props.detail)
      return "";

    const myClassName = "general " + this.props.detail.getBackground();
    const containerClass = this.props.isActive ? "detail active " : "detail";

    return (
      <div className={containerClass}>
        <FontAwesome
          name="times-circle"
          className="back-button cred"
          onClick={()=>{this.props.setUnactiveDetail()}}
        />
        <div className={myClassName}>
          <div className="title">
            {this.props.detail.title}
          </div>
          <div className="subtitle">{this.props.detail.subtitle}</div>
        </div>
        <CoolLine animated={false} />
        {this.processDetail()}
      </div>
    );

  }
}
