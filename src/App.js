import React from 'react';
import ScrollToTop from './Projects/ScrollToTop'
import './App.css';
import { Switch,Route } from 'react-router-dom';
import Navbar from './Projects/Navbar';
import About from './Projects/About';
import Home from './Projects/Home';
import Services from './Projects/Services';

import Contact from './Projects/Contact';
import Skills from './Projects/Skills'
function App() {
  return (
    <>
    <ScrollToTop/>
    
    

    <Navbar/>
      <Switch>
        <Route exact path="/" render={()=><Home/>}/>
        <Route  path="/Services" render={()=><Services/>}/>
        <Route  path="/About" render={()=><About/>}/>
        
        <Route  path="/Contact" render={()=><Contact/>}/>
        <Route  path="/Skills" render={()=><Skills/>}/>      
      </Switch>
      <Services/>
    
    <About/>
    <Skills/>
    <Contact/>
    
    </>
  );
}

export default App;
