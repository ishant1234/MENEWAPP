import React from 'react';
import './topbar.css';
import {NotificationsNone,Language,Settings} from '@material-ui/icons';

export default function Topbar()
{
    return (
        <div className="topbar">
           <div className="topbarWrapper">
               <div className="topleft">
                   <span className="logo">lamaadmin</span>
                   
                   </div>
               <div className="topright">
                   <div className="topbarIconContainer">
                     <NotificationsNone/>
                     <span className="topIconBag">2</span>
                   </div>
                   <div className="topbarIconContainer">
                     <Language/>
                     <span className="topIconBag">2</span>
                   </div>
                   <div className="topbarIconContainer">
                     <Settings/>
                   </div>
                   <img src="https://www.cheddarwater.com/content/gallery/5e1f2dbb9af369.80542066.jpg" alt="" className="topAvatar"/>
               </div>
           </div>
            </div>
    )
}