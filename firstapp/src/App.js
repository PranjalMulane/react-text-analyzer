import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Mode from './Components/Mode';
//imrs
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  return (
    <>
    <Navbar titleText="React Text Analyzer" mode={mode} aboutText="About us" contactText="Contact" />
    <TextForm/>
    {/* <Mode/> */}



    </>
  );
}

export default App;
