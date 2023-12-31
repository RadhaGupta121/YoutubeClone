import React, { useRef, useState } from 'react';
import axios from 'axios';
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const youtube=<FontAwesomeIcon icon={faYoutube}/>
function Login(props) {
  const navigate=useNavigate();
    const[userName,setUserName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    async function handleSubmit(e)
    {
        e.preventDefault();
        console.log(userName,password,email);
        const data={
           
            userName:userName,
            password:password,
            email:email,
           
        }
        const submit=await axios.post('/user/login',data);
        console.log("this is result after submission",submit);
        if(submit.status===200)
        {
            toast.success('Login successful!');
          setTimeout(() => {
            navigate('/')
          }, 2000);
        }
        else{
            if(submit.data.message==="false")
            {
                toast.error('Login failed. Please check your Password.');
            }
            else{
                toast.error('User not found by this email');
            }
        }

      
    }
   function handleCreateAccount()
   {
    navigate('/register');
   }
    return (
        <div className='login-main'>
            <ToastContainer/>
        <div className='login-container'>
            <span className='logo-yt'>{youtube}YouTube</span>
            <h2 style={{marginTop:"12px"}}>Sign in</h2>
            <p style={{marginTop:"5px"}}>to continue to YouTube</p>
         <form className='login-form' onSubmit={handleSubmit}>
         <div className='form-group'>
       
            <input type='text' placeholder='userName' id='userName' name='userName' onChange={(e)=>setUserName(e.target.value)}/>
         
         </div>
          <div className='form-group'>
        
           <input type='email' id='email' placeholder='Enter email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
          
            </div>  
          <div className='form-group'>
         
           <input type='password' id='password' placeholder='Enter password' name='password' onChange={(e)=>setPassword(e.target.value)}/>
          
          </div>
          
          <br/> 
          <span className='register-btn' onClick={()=>handleCreateAccount()}>Create Account</span>
           <input className='login-btn-submit' type='submit' value='Sign in'/>
            </form> 
            
        </div>
        </div> 
    );
}

export default Login;