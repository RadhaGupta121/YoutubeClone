import React from 'react';
import MyNav from '../Navbar/MyNav';
import Searchbar from './SearchBar/Searchbar';
import '../../App.css'
import SelectedVideo from './SelectedVideo';
import Recommendation from '../Recommendation-list/Recommendation';
import VideoRecommendation from '../Recommendation-list/VideoRecommendation';
function Home(props) {
    return (
        <div className='container'>
           <Recommendation/>
           <VideoRecommendation/>
        </div>
    );
}

export default Home;