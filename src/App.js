import React from 'react';
// import logo from './icon/logo.svg';
import './App.css';
import Headers from './Header';
import Footer from './Footer';
import Main from './Main'
import Nav from './Nav';
// import Nav from './Nav';

function App() {
  return (
    <div className="App" >
      <div class="weather-channel__container"> 
      <Headers /> <Nav /> < Main /> <Footer />
      </div>
    </div>
  );
}

export default App;
