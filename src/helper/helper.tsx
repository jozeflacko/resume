import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';

export default class Helper {

    static processIconAndLabel(bullet:any) {
        if(bullet.picture) {
          return (
            <label className="label">
              {Helper.processPhoto(bullet.picture)}
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

      static processPhoto(photo: string, className = 'my-photo') {
        if (! photo)
          return "";
    
        return (
            <img src={photo} key={photo} className={className}/>
        );
      }
      
}