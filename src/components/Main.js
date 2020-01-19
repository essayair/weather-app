import React from 'react';
import WeatherCondition from './WeatherCondition';
import WeatherForcast from './WeatherForcast';


class Main extends React.Component{

    render(){
        return (
            <main>
            <WeatherCondition />
            <WeatherForcast />
          </main>       
          );
    }

}

export default Main;