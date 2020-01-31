import React from 'react';
import './App.css';
import Headers from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import Nav from './components/Nav';
import { getWeather } from './utlis/axios';

class App extends React.Component  {

  constructor(props) {
    super(props);

    this.state = {
      cityName:'',
      current: {},
      forecasts: [],
      limit:5,
      searchValue:'',
      unit: 'C'
    }
  }

  async componentDidMount(){
    try {
      const response = await getWeather('Brisbane');
      this.updateWeather(response);
    } catch (err){
      console.log(err)
    }
  }

  handleChangeLimit = limit =>{
    this.state({ limit });
  }

  updateWeather = (response) => {
    const data =response.data.data;
    const cityName = data.city.name;
    const current = data.current;
    const forecasts = data.forecasts.slice(0,10);
    this.setState({cityName, current,forecasts});

  }
 search = async() =>{
    const response = await getWeather(this.state.searchValue);
    this.updateWeather(response);

  }
  toggleUnit = () => {
    this.setState(state => ({
        unit: state.unit === 'C' ? 'F' : 'C'
    }) )
  }

  handleSearchValueChange = event => {
    const value = event.target.value;
    this.setState({searchValue: value});

  }

  render(){
    return (
      <div className="App" >
        <div className="weather-channel__container"> 
        <Headers /> 
        <Nav 
        toggleUnit={this.toggleUnit}
        unit = {this.state.unit}
        search={this.search}
        searchValue={this.state.searchValue}
        handleSearchValueChange={this.handleSearchValueChange}
        /> 

        <Main 
        unit={this.state.unit}
        cityName={this.state.cityName}
        current = {this.state.current}
        forecasts={this.state.forecasts}
        handleChangeLimit={this.handleChangeLimit}
        limit={this.state.limit}
        /> 

        <Footer />
        </div>
      </div>
    )
  }
}

export default App;
