import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import "./Chat.css";
import { InsertEmoticon, Mic } from "@material-ui/icons";

const ChatRoom = () => {
  const [seed, setSeed] = useState("");
  const [inputMessage, setMessage] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const handleMessage = (e) => {
    e.preventDefault();
    // FIREBASE SENDING MESSAGE
  };

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
