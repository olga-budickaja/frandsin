import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Section from "./Components/Section/Section";

import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <Main>
          <Section />
        </Main>
      </div>
  );
}

export default App;
