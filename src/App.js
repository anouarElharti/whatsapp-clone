import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import "./App.css";
import Login from "./components/Login/Login";
import ChatRoom from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import { useStateValue } from "./ContextsAPI/StateProvider";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <>
        {user ? (
          <div className="app_body">
            <BrowserRouter>
              <Routes>
                <>
                  <Route
                    path="/rooms/:roomName"
                    element={
                      <>
                        <Sidebar currentUser={user} />
                        <ChatRoom currentUser={user} />
                      </>
                    }
                  />
                  <Route
                    path="/rooms"
                    element={
                      <>
                        <Sidebar currentUser={user} />
                        <ChatRoom currentUser={user} />
                      </>
                    }
                  />
                </>
              </Routes>
            </BrowserRouter>
          </div>
        ) : (
          <Login />
        )}
      </>
    </div>
  );
};

export default App;
