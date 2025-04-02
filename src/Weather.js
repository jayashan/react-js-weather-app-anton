import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Wind,ThermometerSun ,Eye ,CloudDrizzle ,MapPin} from 'lucide-react';

  


const Weather = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  //const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    if (location) {
      const fetchWeatherData = async () => {
        try {
          const response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=a5df75cbcffb47b5b9612832250104&q=${location}&aqi=no`
           
          );
          setWeatherData(response.data);
          setError(null);
        } catch (err) {
          setError('Could not fetch weather data. Please try again.');
          setWeatherData(null);
        }
      };

      fetchWeatherData();
    }
  }, [location]);

  return (
    <div className="weather-report">
      {error && <p>{error}</p>}
      {weatherData && (
        <>
        <div className='flex flex-row gap-2'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white/30 backdrop-opacity-10 border">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2"><MapPin /><p class="text-sm ...">{weatherData.location?.region}</p><h2>{weatherData.location?.name},{weatherData.location?.country}</h2></div>
                    <p className='text-black'>Temperature: {weatherData.current?.temp_c} °C || {weatherData.current?.temp_c} °F</p>
                    <p className='text-black'>Weather: {weatherData.current?.condition?.text}</p>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white/30 backdrop-opacity-10 border">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2"><Wind /><h2>Wind</h2></div>
                    <p className='text-black'>{weatherData.current?.gust_kph} KM/H Gusts</p>
                    <p className='text-black'>{weatherData.current?.wind_kph} KM/H</p>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white/30 backdrop-opacity-10 border">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2"><ThermometerSun /><h2>FEELS LIKE</h2></div>
                    <p className='text-black'>{weatherData.current?.feelslike_c} °C </p>
                    <p className='text-black'>{weatherData.current?.feelslike_f} °F</p>
                </div>
            </div>
        </div>
        <div className='flex flex-row gap-2 py-2'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg border bg-white/30 backdrop-opacity-10">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2"><Eye /><h2>VISIBILITY</h2></div>
                    <p className='text-black font-bold text-5xl'>{weatherData.current?.vis_km}km</p>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg border bg-white/30 backdrop-opacity-10">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2"><CloudDrizzle /><h2>HUMIDITY</h2></div>
                    <p className='text-black font-bold text-5xl'>{weatherData.current?.humidity} %</p>
                </div>
            </div>
        </div>
        </>
       
      )}
    </div>
  );
};

export default Weather;