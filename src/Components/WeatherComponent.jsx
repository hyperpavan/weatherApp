
import React, { useState } from 'react';
import axios from 'axios';


const API_KEY = '1635890035cbba097fd5c26c8ea672a1';
const API_BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState(null);

  const fetchForecast = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      setForecastData(response.data.list?.map((newData) => newData));
    } catch (error) {
      console.error('Error fetching forecast:', error);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchForecast();
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <input type="text" value={city} onChange={handleCityChange} placeholder="Enter city name" />
        <button type="submit" style={{ backgroundColor: 'orangered'}}>Search</button>
      </form>
      {forecastData && (
        <div>
         <h1 style={{ color: 'orangered'}}>Weather in your City {city}</h1>
          <ul>
            {forecastData.slice(0, 5).map((forecast) => (
               
                <div class="container">
                <table>
                    <thead>
                    <tr key={forecast.dt} >
                        <th class="date" colspan="5">Date: {forecast.dt_txt}</th>
                        </tr>
                    <tr>
                        <th colSpan='4'>Temperature</th>
                    </tr>
                       <tr>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                        <td>{forecast.main.temp_max}°C</td>
                        <td>{forecast.main.temp_min}°C</td>
                        <td>{forecast.main.pressure}°C</td>
                        <td>{forecast.main.humidity}°C</td>
                       </tr>
                    </tbody>
                </table>
                </div>
                
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
