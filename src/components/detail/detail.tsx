import * as React from 'react';
import './detail.css';
import './detail_mobile.css';
import './alive.css';
import * as FontAwesome from 'react-fontawesome';
import Sentence from '../sentence/sentence';
import Hero from '../hero/hero';
import KidWithABaloon from './kidWithABaloon/kidWithABaloon';
import CoolLine from '../coolLine/coolLine';
import FlipPhotos from '../flipPhotos/flipPhotos';
import Helper from '../../helper/helper';
import * as ViewportObserver from '../../utils/ViewportObserver';
import * as AddressBarUtils from '../../utils/AddressBarUtils';
import Share from '../share/share';

interface Props extends React.Props<any> {
  detail: any;
  isActive: boolean;
  setUnactiveDetail: any;
}

export default class Detail extends React.Component<Props, {}> {
  processDetail() {
    const { photo, flipPhotos, flipPhotosBackground, flipPhotosBottom, sentence, bottomPhoto, description, items, itemsFunny, bulletgroups } = this.props.detail.getDetail();
    return (
      <div className="content">
        {this.processHero(photo)}
        {this.processFlipPhotos(flipPhotos, flipPhotosBackground, flipPhotosBottom)}
        <div className="photo">{Helper.processPhoto(photo)}</div>
        {this.processSentence(sentence)}
        <div className="description">{this.processDescription(description)}</div>
        <div className="items">
          {this.processItemsFunny(itemsFunny)}
          {this.processItems(items)}
        </div>
        {this.processBulletsgroups(bulletgroups)}
        {Helper.processPhoto(bottomPhoto, 'bottom-photo')}
      </div>
    );
  }

  componentDidMount() {    
    this.handleViewportListener();
  }
  componentWillUnmount() {   
    ViewportObserver.uninstallViewportListener();
  }
  componentDidUpdate() {
    this.handleViewportListener();
  }

  handleViewportListener = () => {
    if(this.props.detail && this.props.detail.shouldSetActiveViewportListener() === true) {
      this.installViewportListener();
      ViewportObserver.scrollToItemVisibleViewportItem();
    } else if(this.props.detail) {
      ViewportObserver.uninstallViewportListener();
    }
  }
  installViewportListener = () => {
    ViewportObserver.installViewportListener(
      "viewport-mark", 
      "item", 
      (el:any) => {
        if(el) {
          AddressBarUtils.setSubsection(el.getAttribute("id"));  
        }
      },
      window, // big screen
      document.getElementsByClassName('detail')[0] // small screen
    );
  }



  processFlipPhotos(flipPhotos: Array<string>, flipPhotosBackground: string, flipPhotosBottom: string) {
    return <FlipPhotos flipPhotos={flipPhotos} flipPhotosBackground={flipPhotosBackground} flipPhotosBottom={flipPhotosBottom} numberOfRows={2} />;
  }
  processHero(photo: string) {
    if (!photo)
      return "";
    return (<Hero photo={photo} />);
  }

  processLogos(logos: Array<string>) {
    return logos ? logos.map((logo) => {
      return Helper.processPhoto(logo); // key is rendered in process photo
    }) : "";
  }

  processDescription(description: Array<String>) {
    return description ? description.map((paragraf: string, index: number) => {
      return (<p key={"key" + index}>{paragraf}</p>);
    }) : "";
  }

  processDescriptionExtension(descriptionExtension?: Array<String>) {
    return descriptionExtension.map((paragraf: string, index: number) => {
      return (<p key={"key_extension_" + index}>{paragraf}</p>);
    });
  }

  processBulletsgroups(bulletgroups: any) {
    return bulletgroups ? bulletgroups.map((bulletgroup: any) => {
      return (
        <div key={bulletgroup.key} className="bulletgroups">
          <div className="title">{bulletgroup.title}</div>
          <div className="groups">
            {bulletgroup.bullets.map((group: { subtitle: string, description: string, bullets?: any, bubbless?: any }, index: number) => {
              return (
                <div key={"key" + index} className="group">
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

  processBullets(bullets: Array<{ picture: 'string', link?: string, phoneLink?: string; label: string, value: string, bubbles: Array<{ value: string, size: number }> }>) {
    return bullets.map((bullet, index) => {
      const key = bullet.label ? bullet.label : 'key' + index;
      const onClick = bullet.link ? () => { window.open(bullet.link) } : () => { };
      const href = bullet.phoneLink ? bullet.phoneLink : "javascript:void(0);";
      const className = bullet.link || bullet.phoneLink ? "bullet can-click" : "bullet";
      const title = bullet.label && bullet.value ? bullet.label + ": " + bullet.value : "";
      return (
        <a key={key} className={className} onClick={onClick} href={href} title={title}>
          {Helper.processIconAndLabel(bullet)}
          <span className="value">{bullet.value}</span>
          {this.processBubbless(bullet.bubbles)}
        </a>
      );
    });
  }

  processBubbless(bubbles: Array<{ value: string, size: number }>) {
    if (!bubbles)
      return "";

    const printBubbles = () => {
      return bubbles.map((bubble, index) => {
        if (bubble.size === 0) {
          const className = 'bubble no-style';
          return (
            <div key={'heart-' + index.toString()} className={className}>
              <KidWithABaloon name={bubble.value} />
            </div>
          )
        }
        return <div key={index.toString()} className={'bubble size-' + bubble.size}>{bubble.value}</div>;
      });
    }

    return (
      <div className="bubbles">
        {printBubbles()}
      </div>
    );
  }

  processItemsFunny(itemsFunny: any): void {
    return this.processItems(itemsFunny, "funny");
  }

  generateTimeRange(from: string, to: string) {
    if (from !== undefined && to !== undefined) {
      return (
        <div className="timerange">
          <div className="from">{this.printValue(from)}</div>
          <div className="to">{this.printValue(to)}</div>
        </div>
      )
    } else {
      return "";
    }
  }
  generateDate(date: string) {
    if (date !== undefined) {
      return (
        <div className="timerange">
          <div className="date">{this.printValue(date)}</div>
        </div>
      )
    } else {
      return "";
    }
  }

  processImage(src, name) {
    if (src === undefined) {
      return "";
    }
    return (
      <div className="item-image">
        <img 
          src={src ? src : "./public/assets/default_src.jpg"} 
          alt={name} 
          title={name}
        />
      </div>
    )
  }

  processWWW(www) {
    if (www === undefined) {
      return "";
    }
    return (
      <a className="www" title={"Click to open " + www} href={"http://" + www}>
        <FontAwesome name="paper-plane-o" />
        {this.printValue(www)}
      </a>
    )
  }
  processGithub(github) {
    if (github === undefined) {
      return "";
    }
    return (
      <a className="github button" title={"Click to open Github"} href={github}>
        <FontAwesome name="github" />Github
      </a>
    )
  }

  getShareUrl(id) {    
    if(!id) {
      return null;
    }
    return location.origin + location.pathname + AddressBarUtils.getSectionWithoutSubsection() +":_"+id;
  }

  urlPrefix: string = "";

  processItems(items: any, addClassName?: string) {
    let classNameAbstract = addClassName === undefined ? "item" : addClassName + " item";

    return items ? items.map((item: any, index: number) => {
      const { 
        name, 
        subname, 
        place, 
        from, 
        to, 
        from2, 
        to2, 
        description, 
        notes, 
        logos, 
        www, 
        id, 
        image, 
        github, 
        date 
      } = item;

      const className = AddressBarUtils.isThisCurrentSubSection(id) ? classNameAbstract+" "+ViewportObserver.getCurrentItemClass() : classNameAbstract;

      return (
        <div className={className} key={"key" + index}>              
          {this.generateDate(date)}
          {this.generateTimeRange(from, to)}
          {this.generateTimeRange(from2, to2)}
          
          <div className="myHead">
            
            <div className="name cblue viewport-mark" id={id ? id : ""}>{this.printValue(name)}        </div>
          
            <div className="subname"    >{this.printValue(subname)}     </div>
            <div className="place"      >{this.printValue(place)}       </div>           
          </div>
          <div className="logos">
            {this.processLogos(logos)}
          </div>
          <div className="myBody">            
            <div className="description">{this.printValue(description)} </div>
            {this.processSimpleList(item.list)}
            <div className="notes">{this.printValue(notes)}</div>
            {this.processImage(image, name)}
            <div className="url-buttons">              
              <Share url={this.getShareUrl(id)} id={id}/>  
              {this.processWWW(www)}
              {this.processGithub(github)}          
            </div>
          </div>
        </div>
      );
    }) : "";
  }

  processSimpleList(list: Array<{ name: string, link: string }>) {
    if (list === undefined || list.length < 1)
      return "";
    return <ul className="simple-list">{printLi()}</ul>;

    function printLi() {
      return list.map((elem: { name: string, link: string }, index) => {
        return (
          <li key={elem.name}>
            <a
              href={elem.link}
              title={'Click here to see certificate for ' + elem.name}
              target="_blank"
            >
              <FontAwesome name="check" />
              <span className="name">{elem.name}</span>
            </a>
          </li>
        );
      })
    }
  }

  printValue(value: string | undefined) {
    return value !== undefined ? value : "";
  }

  renderIcon(iconName: string | undefined) {
    if (iconName === undefined)
      return "";
    else
      return <FontAwesome name={this.props.detail.getDetail().icon} />
  }

  processSentence(sentence: {
    image: string,
    startSentence: string,
    endSentences: Array<string>
  }) {
    if (sentence === undefined)
      return "";
    return (<Sentence image={sentence.image} startSentence={sentence.startSentence} endSentences={sentence.endSentences} />);
  }



  render() {
    if (!this.props.detail)
      return "";

    const myClassName = "general " + this.props.detail.getBackground();
    const containerClass = this.props.isActive ? "detail active " : "detail";

    return (
      <div className={containerClass}>
        <FontAwesome
          name="times-circle"
          className="back-button cred"
          onClick={() => { this.props.setUnactiveDetail() }}
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
