import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
  const [weather, setWeather] = useState({
    city: "Kota",
    weather: "clear sky",
    feels_like: 19.39,
    humidity: 38,
    temp: 20.31,
    temp_max: 20.31,
    temp_min: 20.31,
  });

  let updateWeather = (newInfo) => {
    setWeather(newInfo);
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <SearchBox updateWeather={updateWeather} />
        <InfoBox info={weather} />
      </div>

    </>
  );
}