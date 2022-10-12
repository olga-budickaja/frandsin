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

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
              <Header users={props.appState.users}/>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Profile />} />
                  <Route path="/media" element={<Media />} />
                  <Route path="/groups" element={<Groups />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/user1" element={<Users />} />
                  <Route path="/user2" element={<Users />} />
                  <Route path="/user3" element={<Users />} />
                  <Route path="/user4" element={<Users />} />
                  <Route path="/user5" element={<Users />} />
              </Routes>
              <Sidebar />
              <Main>

              </Main>
      </BrowserRouter>

  );
}

export default App;
