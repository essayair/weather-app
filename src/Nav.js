import React from 'react';
// import logo from './icon/logo.png'


class Nav extends React.Component{

    render(){

        // const styles1 = {
        //     flex: 1
        // };
        // const styles2 = {
        //     paddingRight:'5px'
        // };
    

        return (
            <nav>
            <div style={{flex: 1}}>
              <input class="search-input" />
              <button class="search-btn"><i class="fa fa-search"></i></button>
    
              <button class="temp-switch">
                <i
                  class="fa fa-thermometer-empty"
                  aria-hidden="true"
                  style={{paddingRight:'5px'}}
                ></i>
                <sup>&deg;</sup>C
              </button>
            </div>
          </nav>
        );
    }

}

export default Nav;