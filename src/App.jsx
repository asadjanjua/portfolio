import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Navbar from './components/Navbar';
import Companies from './components/Companies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Companies/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;