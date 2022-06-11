import React from "react";

import "./App.css";
import ChatRoom from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <ChatRoom />
      </div>
    </div>
  );
};

export default App;
