import React from 'react';
import umberella from '../icon/icon-umberella.png';
import wind from '../icon/icon-wind.png';
import compass from '../icon/icon-compass.png';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WeatherCondition (props){

  const {cityName, current, unit } = props;
  const tempHigh = unit === 'C' ? current.MaxCelsius : current.MaxFahrenheit;

  return (
            <section className="weather-condition">
            <div className="weather-condition__location">{cityName}</div>
            {/* <div style={{textAlign: 'center',fontSize: '14px'}}>Clear</div> */}
            
            <div className="weather-condition__temp">{tempHigh} {unit}</div>
            <div className="weather-condition__desc">
              <div>
                <img src={ umberella} alt="umberella"/>
                <span class="citem">{current.humidity}%</span>
              </div>
              <div>
                <img src={wind} alt="wind"/> <span class="citem">{current.windSpeed}km/h</span>
              </div>
              <div>
                <img src={compass} alt="compass"/> <span class="citem">{current.windDirection}</span>
              </div>
            </div>
          </section>
        );
  }

export default WeatherCondition;