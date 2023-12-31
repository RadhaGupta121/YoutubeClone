import React from 'react';
import './mynav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faBars, faFire, faHistory, faHome, faSubscript, faToggleOff, faUserMinus } from '@fortawesome/free-solid-svg-icons'

const home = <FontAwesomeIcon icon={faHome} />
const trending=<FontAwesomeIcon icon={faFire}/>
const subscrip=<FontAwesomeIcon icon={faSubscript}/>
const history=<FontAwesomeIcon icon={faHistory}/>
const togglebtn=<FontAwesomeIcon icon={faBars} size="1.5x"/>
const youtube=<FontAwesomeIcon icon={faYoutube}/>
function MyNav(props) {
    return (
        <div style={{width:"14vw",height:"100vh",backgroundColor:" gainsboro"}}>
           <div>
            
           <aside className="sidebar">
          <ul>
             <span>{togglebtn}<span className='yt-icon'>{youtube}YouTube</span></span>
            <li>{home} Home</li>
            <li>{trending}Trending</li>
            <li>Subscriptions</li>
          </ul>
          <hr />
          <ul>
            <li>{history}History</li>
            <li>Your videos</li>
            <li>Watch later</li>
            <li>Liked videos</li>
          </ul>
          <hr />
          <ul>
            <li>Library</li>
            <li>History</li>
            <li>Music</li>
            <li>Games</li>
          </ul>
        </aside>
           </div>
        </div>
    );
}

export default MyNav;