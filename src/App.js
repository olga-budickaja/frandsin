import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Main/Navbar/Navbar";
import Media from "./Components/Main/Media/Media";
import Profile from "./Components/Main/Profile/Profile";
import Groups from "./Components/Main/Groups/Groups";
import Music from "./Components/Main/Music/Music";
import Weather from "./Components/Main/Weather/Weather";
import Sidebar from "./Components/Main/Sidebar/Sidebar";
import Users from "./Components/Main/Users/Users";
import Stars from "./Components/Main/Stars/Stars";

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideBarItem from "./Components/Main/Sidebar/SideBarItem";
import {SideBarList} from "./Components/Main/Sidebar/SideBarList";

function App(props) {
  return (
      <BrowserRouter>
              <Header users={props.appState.users}/>
              <Main users={props.appState.users}>
                  <Navbar />
                  <Routes>
                      <Route path="/" element={<Profile />} />
                      <Route path="/timeline" element={<Media />} />
                      <Route path="/favorites" element={<Stars />} />
                      <Route path="/groups" element={<Groups />} />
                      <Route path="/music" element={<Music />} />
                      <Route path="/weather" element={<Weather />} />
                      <Route path={`/${props.appState.users.name}`} element={<Users users={props.appState.users}/>} />
                  </Routes>
                  <Sidebar users={props.appState.users}/>
              </Main>
      </BrowserRouter>

  );
}

export default App;
