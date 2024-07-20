import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import "./SearchBox.css"

export default function SearchBox({ updateWeather }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c9e7d1abe7c5246a8652195269c567a2";

    let getWeatherInfo = async () => {
        try {
            let responce = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await responce.json();
            let results = {
                city: city,
                temp: jsonResponce.main.temp,
                feels_like: jsonResponce.main.feels_like,
                humidity: jsonResponce.main.humidity,
                temp_max: jsonResponce.main.temp_max,
                temp_min: jsonResponce.main.temp_min,
                weather: jsonResponce.weather[0].description,
            }
            return results;
        } catch (err) {
            throw err;
        }

    }

    let handleOnChange = (e) => {
        setCity(e.target.value);
    }

    let handleOnSubmit = async (e) => {
        try {
            e.preventDefault();
            let newInfo = await getWeatherInfo();
            updateWeather(newInfo);
            setCity("");
        } catch (err) {
            setError(true);
        }

    }

    return (

        <div className="SearchBox">
            <h2>Search the Weather</h2>
            <form className='mt-4' onSubmit={handleOnSubmit}>
                {/* <TextField label="Enter City" id="fullWidth" value={city} onChange={handleOnChange} required style={{ color: 'white' }} /><br /> */}
                <input type="text" placeholder='Enter City' value={city} onChange={handleOnChange} className='searchinput' />
                <Button variant="contained" endIcon={<SendIcon />} className='button' type='submit'>Search</Button>
            </form>
            {error && <p style={{ color: "white" }}>This place is not in our range! Please try for another place</p>}
        </div>
    );
}