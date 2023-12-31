// src/App.js
import React from 'react';
import './App.css';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import MyNav from './Component/Navbar/MyNav';
import Searchbar from './Component/Home.js/SearchBar/Searchbar';
import Home from './Component/Home.js/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyChannel from './Component/ViewChannel/MyChannel';
import Channel from './Component/ViewChannel/Channel';

function App() {
  return (
    <>
     
          <div style={{display:"flex"}}>
            <MyNav />
            <div>
         
            <BrowserRouter>
            <Searchbar />
           <Routes>
             
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/view-channel' element={<MyChannel />} />
              </Routes>
      </BrowserRouter>
            </div>
          </div>

       
    </>
  );
}

export default App;
