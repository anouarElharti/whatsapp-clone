import React, { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { app, db, database } from "../../firebase";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import "./Chat.css";
import { InsertEmoticon, Mic } from "@material-ui/icons";
import { useParams } from "react-router";

const ChatRoom = ({ currentUser }) => {
  const dbRef = ref(database);
  const [seed, setSeed] = useState("");
  const [inputMessage, setMessage] = useState("");

  const { roomName } = useParams();
  const [activeRoom, setActiveRooms] = useState("");

  //LOOKING FOR ROOM NAME FROM FIREBASE using PARAMS
  useEffect(() => {
    get(dbRef, `rooms/`)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Find the correct room name
          console.log("List of rooms", snapshot.val().rooms.name);
          if (snapshot.val().rooms.name.indexOf(roomName) !== -1) {
            setActiveRooms(roomName);
            console.log(activeRoom);
          } else {
            setActiveRooms("Chat room not found");
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("The error is here", error);
      });
  }, [roomName]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomName]);

  const handleMessage = (e) => {
    e.preventDefault();
    // FIREBASE SENDING MESSAGE

    setMessage("");
  };
  console.log("Current user", currentUser);
  return (
    <div className="chatRoom">
      <div className="chatHeader">
        <Avatar src={`https://i.pravatar.cc/150?u=${seed}`} />
        <div className="chatHeaderInfo">
          <h3>{activeRoom}</h3>
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
      <div className="chatBody">
        <p className="chatMessage">
          Hello from whatsapp
          <span className="chatName">Anouar</span>
          <span className="chatTimestamp">3:52pm</span>
        </p>
        <p className="chatMessage chatReciever">
          Hello from whatsapp
          <span className="chatName">Anouar</span>
          <span className="chatTimestamp">3:52pm</span>
        </p>
      </div>
      <div className="chatFooter">
        <InsertEmoticon />
        <form onSubmit={handleMessage}>
          <input
            value={inputMessage}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Tape your message here"
          />
          <button type="submit">Send</button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default ChatRoom;
