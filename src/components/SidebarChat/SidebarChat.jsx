import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createNewChat = () => {
    const roomName = prompt("Please enter a name for the chat");
    if (roomName) {
      // FIREBASE DB ADD CHAT ROOM
    }
  };
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://i.pravatar.cc/150?u=${seed}`} />
      <div className="sidebarChatInfo">
        <h4>Room name</h4>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createNewChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
};

export default SidebarChat;
