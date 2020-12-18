import { Avatar } from '@material-ui/core';
import React from 'react';
import Badge from '@material-ui/core/Badge';

import "./VideoRow.css"

const VideoRow = ({image, title, views, timestamp, channelName, channelLogo, description, isNew}) => {
    return (
        <div className="VideoRow">
            <img className="VideoRow_image" src={image} alt={title} />
            <div className="videoRow_info">
                <h4>{title}</h4>
               
                <p>{views} views ⋅ {timestamp}</p>

                <div className="channel_info">
                    <Avatar src={channelLogo} alt={channelName} />
                    <p>{channelName}</p>
                </div>
                <p className="description">
                    {description}
                </p>
                {
                    isNew && <Badge className="videowRow_badge" badgeContent="New" color="primary" />
                }
                  
            </div>
           
        </div>
    );
}

export default VideoRow;
