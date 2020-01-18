import React from 'react';
import logo from './icon/logo.png';

class Header extends React.Component{

    render(){
        return (
            <header>
            <img class="header__logo" src={logo }  />
            {/* <img class="header__logo" src={require("./icon/logo.png") }  /> */}

            <h1 class="header__title">Weather Channel</h1>
          </header>
        );
    }

}

export default Header;