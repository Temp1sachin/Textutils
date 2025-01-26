import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navk from './components/Navk'; // Note: Capitalized "Navk" for the component
import TextFront from './components/TextFront';
import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);
  const showalert=(msg,type)=>{
     setalert({
      msg:msg,
      type:type
     })
     setTimeout(() => {
      setalert(null)
     }, 1500);
  }
  const sis=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#101e30';
      showalert("dark mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
      <Navk title="Textutils" About="About Us" Mode={mode} sis={sis}/> 
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About />}/>
          
          
          <Route exact path="/" element={
          <TextFront heading="Enter your text" Mode={mode} showalert={showalert}/>}
          />
        
        </Routes>
      </div></Router>
      {/* <About/> */}

    </>
  );
}

export default App;
