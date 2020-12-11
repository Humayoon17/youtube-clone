import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import MicIcon from '@material-ui/icons/Mic';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from "@material-ui/core/Avatar"

import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
        <div className="Header_left">
            <MenuIcon className="Header_left_menu_icon" />
            <YouTubeIcon className="Header_left_menu_icon Youtube-icon" />
        </div>

        <div className="Header_middle">
            <input placeholder="Search" />
            <SearchIcon className="Header_middle_search_icon" />
            <MicIcon className="Header_middle_mic_icon" />
        </div>
        <div className="Header_right">
            <MoreVertIcon />
            <AppsIcon />
            <Avatar alt="Profile" src="https://avatars0.githubusercontent.com/u/59541560?s=460&u=3b1debfae7e2d8ee11b6d1685ff8da901fe4abed&v=4"  />
        </div>
        </div>
    );
}

export default Header;
