import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ref, set, get, update } from "firebase/database";
import { db, database } from "../../firebase";
import "./SidebarChat.css";

const SidebarChat = ({ addNewChat, title, roomsNames }) => {
  const [seed, setSeed] = useState("");
  const dbRef = ref(database, "rooms/name/");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createNewChat = () => {
    const roomName = prompt("Please enter a name for the chat");
    let oldRoomsNames = roomsNames.name;
    if (roomName) {
      // FIREBASE DB ADD CHAT ROOM: Replacing the old array with the new one
      oldRoomsNames.push(roomName);
      /*console.log("New list of rooms", oldRoomsNames);*/
      set(dbRef, oldRoomsNames);
      window.location.reload();
    }
  };
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://i.pravatar.cc/150?u=${seed}`} />
      <div className="sidebarChatInfo">
        <h4>{title}</h4>
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
