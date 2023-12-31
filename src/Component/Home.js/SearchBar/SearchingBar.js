import React from 'react';
import UserSignedInProperty from '../../If_SignedIn/UserSignedInProperty';
function SearchingBar({search,create,notification,isUserLoggedIn,handleSignin,handleLogout,handleSigninProperty,
avatarImg,showSigninProperty,name,email,login}) {
    return (
        <div className='search-bar'>
        <input className='search-input' type='text' />
        <div className='search-btn'>{search}
        </div>
        {/* <span className='search-voice'>{voice}</span> */}
        <div className='other-feature'>
        <div className='create'>
            {create}
        </div>
        <div className='notify'>
            {notification}
        </div>
      
    {isUserLoggedIn?
    <>
    <div className='login-btn'>
      <div className='avatar-img' onClick={handleSigninProperty}> <img src={avatarImg} alt='not found' style={{width:"3rem",height:"3rem",borderRadius:"50%"}}/>
      </div>  
 <div className='signin-property'>
 {
       showSigninProperty?   
       <UserSignedInProperty
        userName={name} email={email} avatarimg={avatarImg}
        handleLogout={handleLogout}
        />:null
    }
 </div>
        {/* <button onClick={()=>handleLogout()}>Logout</button> */}
    </div></>:
    <div className='login-btn'>
    <button onClick={()=>handleSignin()}>{login} Signin</button>
    {/* <ToastContainer /> */}
</div>}
        </div>
    </div>
    );
}

export default SearchingBar;