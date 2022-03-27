import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Mode from './Components/Mode';
//imrs
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  //togglemodes
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#330033';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      <Router>
        <Navbar titleText="Text Analyzer" mode={mode} aboutText="About us" togglemode={toggleMode} contactText="Contact" />
        <Routes>
          <Route Exact path="/mode" element={<Mode  mode={mode}/> } />
           
          <Route Exact path="/" element={<TextForm mode={mode} />} />
          
 
        </Routes>


      </Router>



    </>
  );
}

export default App;
