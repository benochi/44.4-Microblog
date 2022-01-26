import React from 'react';
import Nav from "./Nav";
import Routes from './Routes';
import './App.css';

//hav a Nav and a Routes component, use <Jumbotron> wrapper for Nav. 
function App() {

  return (
    <div className="App">
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
