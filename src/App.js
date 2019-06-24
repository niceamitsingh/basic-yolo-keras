import React from 'react';
import './App.css';
import MenuContainer from "./components/Slideoutmenu/MenuContainer";
import Header1 from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <div id="Make_fixed">
        <Header1></Header1>
        <MenuContainer></MenuContainer>
      </div>
      <Home></Home>
      
    </div>
  );
}

export default App;
