import React from 'react'
import './Widget.css'
import {Visibility} from '@mui/icons-material';
function Widget() {
  return (
    <div className='widgetsm'>
        <span className="widgetsmTitle">New Members</span>
            <ul className="widgetsmList">
                <li className="widgetsmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='widgetsmImg' />
                    <div className="widgetsmUser">
                        <span className='widgetsmUsername'>Khouloud taouchikht</span>
                        <span className='widgetsmUserTitle'>Software engineer</span>

                    </div>
                    <button className="widgetsmButton">
                        <Visibility className="widgetsmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetsmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='widgetsmImg'/>
                    <div className="widgetsmUser">
                        <span className='widgetsmUsername'>Khouloud taouchikht</span>
                        <span className='widgetsmUserTitle'>Software engineer</span>

                    </div>
                    <button className="widgetsmButton">
                        <Visibility className="widgetsmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetsmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='widgetsmImg' />
                    <div className="widgetsmUser">
                        <span className='widgetsmUsername'>Khouloud taouchikht</span>
                        <span className='widgetsmUserTitle'>Software engineer</span>

                    </div>
                    <button className="widgetsmButton">
                        <Visibility className="widgetsmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetsmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='widgetsmImg' />
                    <div className="widgetsmUser">
                        <span className='widgetsmUsername'>Khouloud taouchikht</span>
                        <span className='widgetsmUserTitle'>Software engineer</span>

                    </div>
                    <button className="widgetsmButton">
                        <Visibility className="widgetsmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetsmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='widgetsmImg'/>
                    <div className="widgetsmUser">
                        <span className='widgetsmUsername'>Khouloud taouchikht</span>
                        <span className='widgetsmUserTitle'>Software engineer</span>

                    </div>
                    <button className="widgetsmButton">
                        <Visibility className="widgetsmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        
    </div>
  )
}

export default Widget