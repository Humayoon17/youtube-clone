import React from 'react'
import VideosCard from "../../components/recommendedVideos/VideosCard";

import data from "../../data";


import "./Main.css"

export default function Main() {
    console.log(data);
    return (
        <div className="Main">
        {data.map(video=>{
            return <VideosCard key={video.id}
            thumbnail={video.thumbnail}
            title={video.title}
            channelName={video.channelName}
            views={video.views}
            timestamp={video.timestamp}
            channelLogo={video.channelLogo}
              />;
        })}
            


        </div>
    )
}
