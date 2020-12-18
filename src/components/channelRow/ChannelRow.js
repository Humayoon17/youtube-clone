import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsIcon from '@material-ui/icons/Notifications';

import "./ChannelRow.css"

const ChannelRow = ({image, description, channelName, subscriber,numberOfVideos, isSubscribed}) => {
    return (
        <div className="ChannelRow">
        <div className="channel">            <Avatar className="channelRow_avatar" alt={channelName} src={image} />
            <div className="channelRow_info">
            <h3>{channelName}</h3>
            <p>{subscriber} subscribes ⋅ {numberOfVideos} videos</p>
            <p>{description}</p>
            </div>
            </div>
            <div 
            className="channelRow_subscribe">
                <IconButton>
                    <button className="subscribedBtn">
                    { isSubscribed ? "Subscribed" : "Subscribe"}</button>
                </IconButton>
                <IconButton>
                    {isSubscribed ? <NotificationsIcon className="notificationIcon" />  
                    : <NotificationsNoneIcon className="notificationIcon" />
                    }
                   
                </IconButton>
            </div>
            
        </div>
    );
}

export default ChannelRow;
