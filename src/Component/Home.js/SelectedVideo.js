import React from 'react';
import './selectedvideo.css';
function SelectedVideo(props) {
    return (
        <div className="app">
      <div className="main-content">
       
        <div className="video-player">
          {/* Video Player Component Goes Here */}
          <iframe
            title="YouTube Video Player"
            width="800"
            height="450"
            src="https://www.youtube.com/embed/VIDEO_ID"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="recommended-videos">
          <h2>Recommended Videos</h2>
          {/* Recommended Videos List Goes Here */}
          <ul>
            <li>Video 1</li>
            <li>Video 2</li>
            <li>Video 3</li>
            {/* Add more videos as needed */}
          </ul>
        </div>
      </div>
    </div>
    );
}

export default SelectedVideo;