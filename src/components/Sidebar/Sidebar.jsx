import React, { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { app, db, database } from "../../firebase";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from "../SidebarChat/SidebarChat";
import "./sidebar.css";

const Sidebar = ({ currentUser }) => {
  const [rooms, setRooms] = useState([]);
  const [dbCollection, setCollection] = useState({});
  const dbRef = ref(database);

  useEffect(() => {
    // Reading from firebase realtime database
    get(dbRef, `rooms/`)
      .then((snapshot) => {
        if (snapshot.exists()) {
          //console.log(snapshot.val());
          setCollection(snapshot.val().rooms);
          setRooms(snapshot.val().rooms.name);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("The error is here", error);
      });
  }, []);

  return (
    <div className="sidebar">
      <div className="sideBarHeader">
        <Avatar src={currentUser.user.photoURL} />
        <div className="sideBarHeaderRight">
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
      <div className="sideBarSearch">
        <div className="searchContainer">
          <SearchIcon />
          <input placeholder="Search or create a new chat" type="text" />
        </div>
      </div>
      <div className="sideBarChats">
        <SidebarChat roomsNames={dbCollection} addNewChat={true} />
        {rooms.length
          ? rooms.map((room, i) => {
              return room !== "" ? (
                <SidebarChat key={i} id={i} title={room} />
              ) : (
                ""
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Sidebar;
