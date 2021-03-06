import React from 'react';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className= "sidebar">
    <div className="sidebar__header">
    <Avatar src="https://avatars1.githubusercontent.com/u/54590754?s=460&u=963670b8242d936102baf79974c98a5f27a06041&v=4" />

<div className= "sidebar__headerRight">
<IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
</div>
    </div>

     <div className="sidebar__search">
     <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
       </div>
       <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar