import React from 'react';

export const WeatherDisplay = ({ data }) => {
  
  let { location, coord, temp, weather, icon } = data
  
  const celciusToFahrenheit = (num) => {
      return num * (9 / 5) + 32
  }
    
  return (
    <div className="weather-display">
      <div>{location}</div>
      <div>{temp}</div>
      <div>{weather}</div>
      <img src={icon}/>
    </div>
  )
  
}