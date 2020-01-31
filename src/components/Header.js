import React from 'react';
import logo from '../icon/logo.png';

class Header extends React.Component{

    render(){
        return (
            <header>
            <img className="header__logo" src={logo } alt="logo" />
            {/* <img class="header__logo" src={require("./icon/logo.png") }  /> */}

            <h1 className="header__title">Weather Channel</h1>
          </header>
        );
    }

}

export default Header;