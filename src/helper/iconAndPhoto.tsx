import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
import {IInnerBullet} from "../interfaces";

export default class IconAndPhoto {

    static renderIconAndLabel(bullet: IInnerBullet) {
        if (bullet.picture) {
            return (
                <label className="label">
                    {IconAndPhoto.renderPhoto(bullet.picture)}
                    {bullet.label}
                </label>
            );
        } else if (bullet.label || bullet.icon) {
            const icon = bullet.icon || "circle-thin";
            const className = bullet.className && bullet.className != '' ? 'icon cblue ' + bullet.className : 'icon cblue';
            return (
                <label className="label">
                    <FontAwesome name={icon} className={className}/>
                    {bullet.label}
                </label>
            );
        } else return "";
    }

    static renderPhoto(photo?: string, className = 'my-photo') {
        return !photo ? "" : (
            <img src={photo} key={photo} className={className}/>
        );
    }

}