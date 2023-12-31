import React from 'react';
import './video.css'
function VideoCard(props) {
    console.log(props.link);
    return (
        <div className='video-container'>
            <div className='video-main'>
            <video width="100%" height="100%" controls autoPlay>
          <source src={props.link} type={props.type} />
          Your browser does not support the video tag.
        </video>
            </div>
            <div>
               <span className='video-title'>Video Title</span> 
            </div>
            <div>
                <span className='channel-name'>channel name</span>
            </div>
            <div>
                <span className='video-views'>237 views . 13hours ago</span>
            </div>
        </div>
    );
}

export default VideoCard;