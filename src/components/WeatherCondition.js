import React from 'react';
import umberella from '../icon/icon-umberella.png';
import wind from '../icon/icon-wind.png';
import compass from '../icon/icon-compass.png';

class WeatherCondition extends React.Component{

    render(){
        return (
            <section class="weather-condition">
            <div class="weather-condition__location">Brisbane</div>
            <div style={{textAlign: 'center',fontSize: '14px'}}>Clear</div>
            <div class="weather-condition__temp">19 c</div>
            <div class="weather-condition__desc">
              <div>
                <img src={ umberella}/>
                <span class="citem">20%</span>
              </div>
              <div>
                <img src={wind}/> <span class="citem">3 km/h</span>
              </div>
              <div>
                <img src={compass} /> <span class="citem">NE</span>
              </div>
            </div>
          </section>
        );
    }

}

export default WeatherCondition;