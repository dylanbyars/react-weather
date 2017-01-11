import React, { Component } from 'react';
import axios from 'axios';

import { SearchInput } from './components/search_input';
import { WeatherDisplay } from './components/weather_display';

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      location: null,
      coord: null,
      temp: null,
      weather: null,
      icon: null,
      active: false
    }
    
    this.launchSearch = this.launchSearch.bind(this)
  }
  
  launchSearch(place) {
    const API_KEY = '64168a0402bae581dc49cc5bf83439b8'
    const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q='
    const ICON_URL = (code) => {
      return `http://openweathermap.org/img/w/${code}.png`
    }
    
    let url = `${BASE_URL}${place},us&units=metric&appid=${API_KEY}`
    
    axios.get(url).then(
      response => {
        this.setState({
          location: response.data.name,
          coord: response.data.coord,
          temp: response.data.main.temp,
          weather: response.data.weather[0].description,
          icon: ICON_URL(response.data.weather[0].icon),
          active: true
        })
        console.log(this.state)
      })
  }
  
  render() {
    return (
      <div>
        <SearchInput launchSearch={this.launchSearch} />
        { this.state.active && <WeatherDisplay data={this.state} /> }
      </div>
    )
  }
  
}

export default App