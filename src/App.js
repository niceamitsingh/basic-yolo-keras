import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuContainer from "./components/Slideoutmenu/MenuContainer";
import Leftnav from "./components/Leftnav";

function App() {
  return (
    <div className="App">
      <Leftnav></Leftnav>
      <MenuContainer></MenuContainer>
    </div>
  );
}

export default App;
