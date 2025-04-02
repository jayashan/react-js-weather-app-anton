import React, { useState } from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  const [location, setLocation] = useState('');

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Weather Forecast</h1>
      {/* <h1>Weather App</h1>
      <input 
        type="text" 
        placeholder="Enter location" 
        value={location}
        onChange={handleInputChange}
      />
      <Weather location={location} /> */}

      <div className="flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={handleInputChange}
          class="flex-1 border-2 border-slate-black"
        />
      </div>
      <Weather location={location} />

    </div>
  );
}

export default App;