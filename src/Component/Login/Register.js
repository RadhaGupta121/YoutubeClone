import React, { useRef, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const youtube=<FontAwesomeIcon icon={faYoutube}/>
function Register(props) {
    const navigate=useNavigate();
    const[name,setname]=useState('');
    const[userName,setUserName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
    const avatarref=useRef();
    const coverimgRef=useRef();
    async function handleSubmit(e)
    {
        e.preventDefault();
        const avtarImg=avatarref.current;
        const coverImg=coverimgRef.current;
        const formData=new FormData();
        formData.append("avatar",avtarImg.files[0]);
        formData.append("coverImage",coverImg.files[0]);
      formData.append("email",email);
      formData.append("userName",userName);
      formData.append("name",name);
      formData.append("password",password);
        const submit=await axios.post('/user/register',formData);
        console.log("this is result after submission",submit);
        if(submit.status===200 && submit.data.userCreated)
        {
            // alert("User registered succesfully");
            toast.success("User registered succesfully");
           setTimeout(() => {
            navigate('/login');
           }, 2000);
        }
        else{
          // alert(submit.data.message);
          toast.error(`${submit.data.message}`);
        }
       
    }
    return (
        <div className='login-main'>
          <ToastContainer/>
        <div className='login-container'>
            <span className='logo-yt'>{youtube}YouTube</span>
            <h2 style={{marginTop:"12px"}}>Register</h2>
            <p style={{marginTop:"5px"}}>to continue to YouTube</p>
         <form className='login-form' onSubmit={handleSubmit}>
         <div className='form-group'>
         
         <input type='text' id='name' placeholder='Enter name' name='name' onChange={(e)=>setname(e.target.value)}/>
        
        </div>
         <div className='form-group'>
       
            <input type='text' placeholder='userName' id='userName' name='userName' onChange={(e)=>setUserName(e.target.value)}/>
         
         </div>
          <div className='form-group'>
        
           <input type='email' id='email' placeholder='Enter email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
          
            </div>  
          <div className='form-group'>
         
           <input type='password' id='password' placeholder='Enter password' name='password' onChange={(e)=>setPassword(e.target.value)}/>
          
          </div>
          <div className='form-group-file'>
         
          <input className='file-inpt' type='file' name='avatar' placeholder='choose image for avtar'
           ref={avatarref} />
         
        </div>
        <div className='form-group-file' >
         
        <input className='file-inpt' type='file' name='coverImage' placeholder='choose image fro coverImage'
         ref={coverimgRef}/>
           
        </div>
       
          
          <br/> 
          <span className='register-btn' onClick={()=>navigate('/login')}>Signin</span>
           <input className='login-btn-submit' type='submit' value='Next'/>
            </form> 
            
        </div>
        </div> 
        
    );
}

export default Register;
