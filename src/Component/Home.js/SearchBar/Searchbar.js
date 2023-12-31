import { faBell, faMicrophone, faSearch, faUser, faVideoCamera, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './searchbar.css';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import SelectedVideo from '../SelectedVideo';
import VideoCard from '../../VideoCard/VideoCard';
import axios from 'axios';
import UserSignedInProperty from '../../If_SignedIn/UserSignedInProperty';
import Recommendation from '../../Recommendation-list/Recommendation';
import VideoRecommendation from '../../Recommendation-list/VideoRecommendation';
import SearchingBar from './SearchingBar';
const search = <FontAwesomeIcon icon={faSearch} size='1x' />
const voice = <FontAwesomeIcon icon={faMicrophone} />
const create = <FontAwesomeIcon icon={faVideoCamera} size='1x' />
const notification = <FontAwesomeIcon icon={faBell} size='1x' />
const login = <FontAwesomeIcon icon={faUser} size='1x'/>
function Searchbar(props) {
    const[name,setName]=useState('');
    const[avatarImg,setAvatarImg]=useState('');
    const[email,setEmail]=useState('')
    const[showSigninProperty,setShowSigninProperty]=useState(false);
   const navigate=useNavigate();
    function handleSignin()
    {
        console.log('called')
       navigate('/login'); 
    }
  async  function handleLogout()
    {
        console.log("handleLogout claled");
        const logoutoutput=await axios.post('/user/logout');
        console.log("this is logoutoutput",logoutoutput);
        setShowSigninProperty(false);
        toast.success("Logout successfully");
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    }
    const [isUserLoggedIn,setuserLoggedIn]=useState(false);
    useEffect(()=>{
        console.log("useefect")
       fetchUser();
    },[])
    async function fetchUser(){
        const user=await axios.post('/user/get-current-user');
       console.log(user);
        if(user.status===200){
            const userName=user?.data?.isExist?.name || user?.data?.user?.userName;
        const userAvtarImg=user?.data?.isExist?.avatar || user?.data?.user?.avatar;
        const userEmail=user?.data?.isExist?.email || user?.data?.user?.email;
        setName(userName);
        setAvatarImg(userAvtarImg);
        setEmail(userEmail);
            setuserLoggedIn(true);
            toast.success('Login successful!');
        }
        else 
        {
            toast.error(`${user.data.message},Please signin to continue `);
  
            // alert(user.data.message);
        }
        
    }
    async function handleSigninProperty()
    {
        setShowSigninProperty(!showSigninProperty);
    }
    return (
        <div className='main-search-bar'>
            <ToastContainer/>
          <SearchingBar
           handleLogout={handleLogout} handleSignin={handleSignin} handleSigninProperty={handleSigninProperty}
           isUserLoggedIn={isUserLoggedIn} name={name} email={email} avatarImg={avatarImg} search={search} voice={voice}
           create={create} notification={notification} showSigninProperty={showSigninProperty} login={login}
           />

           {/* <Recommendation/>
            <VideoRecommendation/> */}
        </div>
    );
}

export default Searchbar;