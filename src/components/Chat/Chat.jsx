import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import "./Chat.css";

const ChatRoom = () => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chatRoom">
      <div className="chatHeader">
        <Avatar src={`https://i.pravatar.cc/150?u=${seed}`} />
        <div className="chatHeaderInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chatHeaderRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chatBody"></div>
      <div className="chatFooter"></div>
    </div>
  );
};

export default ChatRoom;
