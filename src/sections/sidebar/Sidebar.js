import React from 'react'
import SidebarRow from '../../components/sidebarRow/SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import DescriptionIcon from '@material-ui/icons/Description';
import LiveTvIcon from '@material-ui/icons/LiveTv';

import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="Sidebar">

            <SidebarRow isActive={true} title="Home" Icon={HomeIcon} />
            <SidebarRow  title="Trending" Icon={WhatshotIcon} />
            <SidebarRow  title="Subscriptions" Icon={SubscriptionsIcon} />

            <hr className="Sidebar__line" />
            <SidebarRow  title="Library" Icon={VideoLibraryIcon} />
            <SidebarRow title="History" Icon={HistoryIcon} />
           
            <hr className="Sidebar__line" />

            <h3 className="Sidebar__best_of_youtube">Best of Youtube</h3>
            <SidebarRow  title="Music" Icon={MusicNoteIcon} />
            <SidebarRow title="Sports" Icon={SportsHandballIcon} />
            <SidebarRow  title="Gaming" Icon={SportsEsportsIcon} />
            <SidebarRow title="News" Icon={DescriptionIcon} />
            <SidebarRow  title="Live" Icon={LiveTvIcon} />

        </div>
    )
}
