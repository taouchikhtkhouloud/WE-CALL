import React from 'react'
import "./Topbar.css";
import me from "../../images/me.jpg"
import logo from "../../images/WE CALL.png"
import {NotificationsNone, Language, Settings} from '@mui/icons-material';
function Topbar() {
  return (
    <div className="topbar">

    <div className='topbarWrapper'>
        <div className="topLeft">
            <div className="logo"><img src={logo} alt="" className='logoImg' /></div>
        </div>
        <div className="topRight">
                <div className="topbarIconsContainer">
                
                    <NotificationsNone/>
                    <span className="topbarBadge">2</span>
                </div>
                <div className="topbarIconsContainer">

                     <Language/>
                </div>
                <div className="topbarIconsContainer">

                    <Settings/>
                </div>
                <img src={me} alt="" className="topAvatar" />

            
        </div>
        </div>
    </div>
  )
}

export default Topbar