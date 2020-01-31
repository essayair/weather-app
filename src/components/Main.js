import React from 'react';
import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';
// import { parseWithOptions } from 'date-fns/fp';


function Main(props) {
    return (
        <main>
        <WeatherCondition
          unit={props.unit}
          cityName = {props.cityName}
          current={props.current} 
          />
        <WeatherForecast 
          unit={props.unit}
          forecasts={props.forecasts}
          handleChangeLimit={props.handleChangeLimit}
          limit={props.limit}
        />
      </main>       
      )
}


export default Main;