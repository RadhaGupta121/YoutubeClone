import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle,faDollarSign,faUsersViewfinder,faMoon,faLanguage,faLocation,faQuestion,faMessage} from '@fortawesome/free-solid-svg-icons';
import { faErlang, faGoogle, faStudiovinari, faThemeco, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import './usersignedIn.css';
function UserSignedInProperty(props) {
    const signoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />
    const switchIcon = <FontAwesomeIcon icon={faUserCircle} />
    return (
        <div style={{ width: "17rem",marginTop:"-12px", height: "90vh", backgroundColor: "whitesmoke", position: "absolute", zIndex: "100" }}>
            <div style={{ display: "flex" }}>
                <span>
                    <img src={props.avatarimg} alt='not found' style={{ width: "5rem", height: "5rem", borderRadius: "50%", }} />
                </span>
                <span>
                    <p style={{ padding: "12px", margin: "12px" }}>{props.userName.toUpperCase()}</p>
                    <span style={{ padding: "5px" }}>
                        <Link to='/view-channel'>
                            View Channel
                        </Link>
                    </span>
                </span>
            </div>
            <p style={{ margin: "12px", padding: "12px" }}>{props.email}</p>
            <hr />
            <div className='list-container'>
                <ul >
                    <li> <span>{googleIcon}  Google Account</span></li>
                    <li>  <span>{switchIcon}  Switch Account</span></li>
                    <li>  <span onClick={()=>props.handleLogout()}>{signoutIcon}  SignOut</span></li>
                </ul>
            </div>
            <hr/>
            <div className='list-container'>
            <ul >
                    <li> <span><FontAwesomeIcon icon={faYoutubeSquare} /> Youtube Studio</span></li>
                    <li>  <span><FontAwesomeIcon icon={faDollarSign}/> Purchases and memberships</span></li>
                    
                </ul>
            </div>
            <hr/>
            <div className='list-container'>
            <ul >
                    <li> <span><FontAwesomeIcon icon={faUsersViewfinder}/> Your Data in Youtube</span></li>
                    <li>  <span><FontAwesomeIcon icon={faMoon}/> Appearance</span></li>
                    <li>  <span><FontAwesomeIcon icon={faLanguage}/>  Language: British English</span></li>
                    <li>  <span>{switchIcon}  Restricted Mode: Off</span></li>
                    <li>  <span><FontAwesomeIcon icon={faLocation}/>  Location:India</span></li>
                    
                </ul>
            </div>
            <hr/>
            <div className='list-container'>
               <ul>
                <li><FontAwesomeIcon icon={faDollarSign}/> Settings</li>
               </ul>
            </div>
            <hr/>
            <div className='list-container'>
                <ul>
                    <li><FontAwesomeIcon icon={faQuestion}/> Help</li>
                    <li><FontAwesomeIcon icon={faMessage}/> Send Feedback</li>
                </ul>
            </div>
        </div>
    );
}

export default UserSignedInProperty;