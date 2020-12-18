import React from 'react';


import "./SidebarRow.css"

const SidebarRow = ({isActive, title, Icon}) => {
   

    const active = isActive ? "SidebarRow_active" : "";

    return (
        <div className={"SidebarRow "+ active}>
           <Icon className="SidebarRow__home_icon"/>
           <h2 className="SidebarRow_title">{title}</h2>
        </div>
    );
}

export default SidebarRow;
