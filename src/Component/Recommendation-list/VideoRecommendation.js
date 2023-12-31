import React, { useEffect, useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './recommendation.css';
import { createClient } from 'pexels';
function VideoRecommendation(props) {
    const [video, setVideos] = useState([]);
    async function FetchVideo() {
        let result=[];
        const client = await createClient('urw0PHipcP33VVf8rQFMWWU0ruOqDja78GkT2peObOUUcNf97BP3iZRE');
        const query = 'Nature';
             console.log("this is client",client);
      let responsed= await  client.videos.popular({ per_page: 1 }).then(videos => result.push(videos));
        console.log(responsed);
        console.log(result[0]?.videos?.[0]?.video_files);
        result=result?.[0]?.videos?.[0]?.video_files;
       return result;
    }
    useEffect(()=>{
        async function callMe(){
            let getVideio=  await FetchVideo();
            setVideos(getVideio);
          }
          callMe();
    },[])
    return video.length===0?<h1>Loading...</h1>: (
        <div className='video-card-show'>
           {
            video.map((item)=>{
                return(
                    <>
                    <VideoCard link={item.link} type={item.file_type}/>
                    </>
                )
            })
           }
        </div>
    );
}

export default VideoRecommendation;