import { Avatar } from '@material-ui/core'
import React from 'react'

import "./VideosCard.css"

export default function VideosCard({thumbnail, title, channelName, views, timestamp, channelLogo}) {
    return (
        <div className="VideosCard">
           <img className="videocard_image" src={thumbnail} alt="thumbnail"/>
           
           <div className="videocard_channel">
               <Avatar src={channelLogo} className="channel_thumbnail" />
               <h1 className="videocard_title">{title}</h1>
           </div>
            <div className="videocard_info">
           <h4 className="videocard_creator">{channelName}</h4>
            <div className="videocard_details">
               <span className="videocard_viewers">{views}</span>
               <p className="videocard_timestamps">{timestamp}</p>
           </div>
           </div>
           </div>
    )
}
