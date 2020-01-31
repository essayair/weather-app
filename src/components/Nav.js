import React from 'react';

function Nav(props) {

    const searchOnEnter = event =>{
        const isEnterPressed = event.key === 'Enter';
        if (isEnterPressed) props.search();
    }



        return (
            <nav>
            <div style={{flex: 1}}>
              <input 
              onKeyPress = {searchOnEnter}
              onChange={props.handleSearchValueChange}
              value={props.searchValue}
              className="search-input" />
              <button onClick ={props.search} className="search-btn">
                <i className="fa fa-search"></i></button>
    
              <button onClick = {props.toggleUnit} className="temp-switch">
                <i
                  className="fa fa-thermometer-empty"
                  aria-hidden="true"
                  style={{paddingRight:'5px'}}
                ></i>
                <sup>&deg;</sup>{props.Unit}
              </button>
            </div>
          </nav>
        );
    }

export default Nav;