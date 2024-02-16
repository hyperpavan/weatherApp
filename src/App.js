import React from 'react';
import './App.css';
import WeatherApp from './Components/WeatherComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <WeatherApp />
      </main>
    </div>
  );
}

export default App;
