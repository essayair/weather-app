import React from 'react';
// import logo from './icon/logo.svg';
import './App.css';
import Headers from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App" >
      <div class="weather-channel__container"> 
      <Headers /> 
      <Nav /> 
      <Main /> 
      <Footer />
      </div>
    </div>
  );
}

export default App;
