

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/AboutMe';
import Skills from './components/Skills';
import './App.css'; 

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <br></br>
      <br></br>
      <br></br>
      <About />
      <br></br>
      <Skills />
      <br></br>
      <Projects />
      <br></br>
      <br></br>
      <Contact />
      
    </div>
  );
};

export default App;
