import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Main/Navbar/Navbar";
import Media from "./Components/Main/Media/Media";
import Profile from "./Components/Main/Profile/Profile";
import Music from "./Components/Main/Music/Music";
import Weather from "./Components/Main/Weather/Weather";
import Sidebar from "./Components/Main/Sidebar/Sidebar";
import Stars from "./Components/Main/Stars/Stars";
import './App.css';
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./Components/Main/Users/UsersContainer";
import Groups from "./Components/Main/Groups/Groups";


function App(props) {
  return (
      <div>
          <Header />
          <Main >
              <Navbar />
              <Routes>
                  <Route path="/frandsin" element={<Media />} />
                  <Route path="frandsin/profile" element={<Profile />} />
                  <Route path="frandsin/timeline" element={<Media />} />
                  <Route path="frandsin/favorites" element={<Stars />} />
                  <Route path="frandsin/groups" element={<Groups />} />
                  <Route path="frandsin/music" element={<Music />} />
                  <Route path="frandsin/weather" element={<Weather />} />
                  <Route path={"/frandsin/users/" + props.name} element={<Profile store={props.store} dispatch={props.dispatch}/>} />
              </Routes>
              <Sidebar />
          </Main>
      </div>
  );
}

export default App;
