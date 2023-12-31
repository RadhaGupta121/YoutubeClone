import React from 'react';
import MyNav from '../Navbar/MyNav';
import SearchingBar from '../Home.js/SearchBar/SearchingBar';
import Searchbar from '../Home.js/SearchBar/Searchbar';
import MyChannel from './MyChannel';

function Channel(props) {
    return (
        <div style={{display:"flex"}}>
         <MyNav/>
       <div>
       <Searchbar/>
        <MyChannel/>
       </div>
        </div>
    );
}

export default Channel;