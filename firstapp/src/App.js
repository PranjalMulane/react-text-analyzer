import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Mode from './Components/Mode';
//imrs
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  //togglemodes
  const toggleMode=()=>{
      if(mode=='light'){
         setMode('dark');
         document.body.style.backgroundColor='#330033';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='light';
      }
  }


  return (
    <>
    <Navbar titleText="Text Analyzer" mode={mode} aboutText="About us" togglemode={toggleMode} contactText="Contact" />
    <TextForm mode={mode}/>
    {/* <Mode/> */}



    </>
  );
}

export default App;
