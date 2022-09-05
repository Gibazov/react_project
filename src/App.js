import logo from './logo.svg';
import React from 'react';
import './App.css' 
import classes from './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/NavBar/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes } from 'react-router';


const App = () => {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header />
        <Nav />
        <div className='appWrapper_content'>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
