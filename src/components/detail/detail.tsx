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
import IconAndPhoto from '../../helper/iconAndPhoto';
import * as ViewportObserver from '../../utils/ViewportObserver';
import * as AddressBarUtils from '../../utils/AddressBarUtils';
import Share from '../share/share';
import IResult from "../../interfaces/IResult";
import {IBulletGroup, IContact, IInnerBullet, ISentence} from "../../interfaces";

interface Props {
    result: IResult;
    isActive: boolean;
    setNotActiveDetail: () => void;
    onNextClick: () => void;
}

export default class Detail extends React.Component<Props> {

    renderDetail() {
        const {
            photo,
            flipPhotos,
            flipPhotosBackground,
            flipPhotosBottom,
            sentence,
            bottomPhoto,
            description,
            items,
            itemsFunny,
            bulletGroups,
        } = this.props.result.getDetail();

        return (
            <div className="content">
                {this.renderHero(photo)}
                {this.renderFlipPhotos(flipPhotos, flipPhotosBackground, flipPhotosBottom)}
                <div className="photo">{IconAndPhoto.renderPhoto(photo)}</div>
                {this.renderSentence(sentence)}
                <div className="description">{this.renderDescription(description)}</div>
                <div className="items">
                    {this.renderItemsFunny(itemsFunny)}
                    {this.renderItems(items)}
                </div>
                {this.renderBulletGroups(bulletGroups)}
                {IconAndPhoto.renderPhoto(bottomPhoto, 'bottom-photo')}
                <div className="buttons">
                    <div
                        title={"Next"}
                        onClick={this.props.onNextClick}
                        className="button button-next"
                    >
                        Next
                    </div>
                </div>
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
        if (this.props.result && this.props.result.shouldSetActiveViewportListener() === true) {
            this.installViewportListener();
            ViewportObserver.scrollToItemVisibleViewportItem();
        } else if (this.props.result) {
            ViewportObserver.uninstallViewportListener();
        }
    }
    installViewportListener = () => {
        ViewportObserver.installViewportListener(
            "viewport-mark",
            "item",
            (el: any) => {
                if (el) {
                    AddressBarUtils.setSubsection(el.getAttribute("id"));
                }
            },
            window, // big screen
            document.getElementsByClassName('detail')[0] // small screen
        );
    }


    renderFlipPhotos(flipPhotos?: Array<string>, flipPhotosBackground?: string, flipPhotosBottom?: string) {
        return (
            <FlipPhotos
                flipPhotos={flipPhotos}
                flipPhotosBackground={flipPhotosBackground}
                flipPhotosBottom={flipPhotosBottom}
                numberOfRows={2}
            />
        );
    }

    renderHero(photo?: string) {
        return !photo ? "" : (<Hero photo={photo}/>);
    }

    renderLogos(logos: Array<string>) {
        return logos ? logos.map((logo) => IconAndPhoto.renderPhoto(logo)) : "";
    }

    renderDescription(description?: Array<String>) {
        return description ? description.map((text: string, index: number) => {
            return (<p key={"key" + index}>{text}</p>);
        }) : "";
    }

    renderDescriptionExtension(descriptionExtension?: Array<String>) {
        return descriptionExtension && descriptionExtension.map((text: string, index: number) => {
            return (<p key={"key_extension_" + index}>{text}</p>);
        });
    }

    renderBulletGroups(bulletGroups?: IBulletGroup[]) {
        return bulletGroups && Array.isArray(bulletGroups) ? bulletGroups.map((bulletGroup) => {
            return (
                <div key={bulletGroup.key} className="bulletgroups">
                    <div className="title">{bulletGroup.title}</div>
                    <div className="groups">
                        {bulletGroup.bullets.map((bullet, index) => {
                            return (
                                <div key={"key" + index} className="group">
                                    <div className="subtitle cblue">{bullet.subtitle}</div>
                                    <div className="description">{bullet.description}</div>
                                    <div className="bullets">
                                        {bullet.bullets && this.renderBullets(bullet.bullets)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            );
        }) : "";
    }

    // FIXME
    renderBullets(bullets: (IInnerBullet[] | IContact[])) {
        if (!Array.isArray(bullets)) {
            return <></>;
        }

        return (bullets as any).map((bullet, index) => {
            const key = bullet.label ? bullet.label : 'key' + index;
            const onClick = bullet.link ? () => {
                window.open(bullet.link)
            } : () => {
            };
            const href = bullet.phoneLink ? bullet.phoneLink : "javascript:void(0);";
            const className = bullet.link || bullet.phoneLink ? "bullet can-click" : "bullet";
            const title = bullet.label && bullet.value ? bullet.label + ": " + bullet.value : "";
            return (
                <a key={key} className={className} onClick={onClick} href={href} title={title}>
                    {IconAndPhoto.renderIconAndLabel(bullet)}
                    <span className="value">{bullet.value}</span>
                    {this.renderBubbless(bullet.bubbles)}
                </a>
            );
        });
    }

    renderBubbless(bubbles: Array<{ value: string, size: number }>) {
        if (!bubbles)
            return "";

        const printBubbles = () => {
            return bubbles.map((bubble, index) => {
                if (bubble.size === 0) {
                    const className = 'bubble no-style';
                    return (
                        <div key={'heart-' + index.toString()} className={className}>
                            <KidWithABaloon name={bubble.value}/>
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

    renderItemsFunny(itemsFunny: any): void {
        return this.renderItems(itemsFunny, "funny");
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

    renderImage(src, name) {
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

    renderVideo(src?: string) {
        if (src === undefined) {
            return "";
        }

        return (
            <iframe
                width="640"
                height="480"
                src={src}
                frameBorder="0"
                allowFullScreen={true}
                style={{margin: 'auto'}}
            >
                Video loading...
            </iframe>
        );
    }

    renderWWW(www, text, icon?: string, color?: string) {
        if (www === undefined) {
            return "";
        }

        const link = www.indexOf('../assets') > -1 ? www : (www.indexOf("http") < 0 ? "http://" + www : www);
        const style: any = {};

        if (color) {
            style.color = color;
        }

        return (
            <a key={link} style={style} className="www" title={"Click to open " + text} href={link} target="_blank">
                <FontAwesome name={icon === undefined ? "paper-plane-o" : icon}/>
                {this.printValue(text)}
            </a>
        )
    }

    renderLinks(links: { www: string, text: string, icon: string, color: string }[]) {
        if (links) {
            return links.map(link => {
                return this.renderWWW(link.www, link.text, link.icon, link.color);
            });
        }
    }

    renderGithub(github) {
        if (github === undefined) {
            return "";
        }
        return (
            <a className="github button" title={"Click to open Github"} href={github} target="_blank">
                <FontAwesome name="github"/>Github
            </a>
        )
    }

    getShareUrl(id) {
        if (!id) {
            return null;
        }
        return location.origin + location.pathname + AddressBarUtils.getSectionWithoutSubsection() + ":_" + id;
    }

    urlPrefix: string = "";

    renderItems(items: any, addClassName?: string) {
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
                links,
                id,
                image,
                github,
                date,
                video,
            } = item;

            const className = AddressBarUtils.isThisCurrentSubSection(id) ? classNameAbstract + " " + ViewportObserver.getCurrentItemClass() : classNameAbstract;

            const shareUrl = this.getShareUrl(id);

            return (
                <div className={className} key={"key" + index}>
                    {this.generateDate(date)}
                    {this.generateTimeRange(from, to)}
                    {this.generateTimeRange(from2, to2)}

                    <div className="myHead">
                        <div
                            className="name cblue viewport-mark"
                            id={id ? id : ""}
                        >
                            {this.printValue(name)}
                        </div>
                        <div className="subname">{this.printValue(subname)}</div>
                        <div className="place">{this.printValue(place)}</div>
                    </div>
                    <div className="logos">
                        {this.renderLogos(logos)}
                    </div>
                    <div className="myBody">
                        <div className="description">{this.printValue(description)} </div>
                        {this.renderSimpleList(item.list)}
                        <div className="notes">{this.printValue(notes)}</div>
                        {this.renderImage(image, name)}
                        {this.renderVideo(video)}
                        <div className="url-buttons">
                            {shareUrl != null && <Share url={shareUrl} id={id}/>}
                            {this.renderWWW(www, "Open")}
                            {this.renderLinks(links)}
                            {this.renderGithub(github)}
                        </div>
                    </div>
                </div>
            );
        }) : "";
    }

    renderSimpleList(list: Array<{ name: string, link: string }>) {
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
                            <FontAwesome name="check"/>
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
        if (iconName == null)
            return "";
        else
            return <FontAwesome name={iconName}/>
    }

    renderSentence(sentence?: ISentence) {
        if (sentence === undefined)
            return "";
        return (
            <Sentence
                image={sentence.image}
                startSentence={sentence.startSentence}
                endSentences={sentence.endSentences}
            />
        );
    }


    render() {
        if (!this.props.result)
            return "";

        const myClassName = "general " + this.props.result.getBackground();
        const containerClass = this.props.isActive ? "detail active " : "detail";

        return (
            <div className={containerClass}>
                <FontAwesome
                    name="times-circle"
                    className="back-button cred"
                    onClick={() => {
                        this.props.setNotActiveDetail()
                    }}
                />
                <div className={myClassName}>
                    <div className="title">
                        {this.props.result.getTitle()}
                    </div>
                    <div className="subtitle">{this.props.result.getSubtitle()}</div>
                </div>
                <CoolLine animated={false}/>
                {this.renderDetail()}
            </div>
        );

    }
}
