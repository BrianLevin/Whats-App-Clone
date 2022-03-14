import React from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";

import "./Chat.css"
function Chat() {
  return (
    <div className ="chat"><h1>I am the chat</h1>
    <div className="chat_header">
    <Avatar />
    <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
    </div>
    
    </div>
  )
}

export default Chat