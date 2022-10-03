import React from "react";

import "./App.css";
import classes from "./App.css";

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/NavBar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    // <BrowserRouter>
    <div className="appWrapper">
      <Header />
      <Nav />
      <div className="appWrapper_content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                posts={props.dataStorage.profilePage.posts}
                addPost={props.dataStorage.profilePage.addPost}
              />
            }
          />
          <Route
            path="/dialogs/"
            element={
              <Dialogs
                messages={props.dataStorage.dialogsPage.messages}
                dialogs={props.dataStorage.dialogsPage.dialogs}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
    // </BrowserRouter>
  );
};

export default App;
