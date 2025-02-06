import image0 from './images/broken clouds.jpg';
import image1 from './images/clear sky.jpg';
import image2 from './images/few clouds.jpg';
import image3 from './images/fog.jpg';
import image4 from './images/mist.jpg';
import image5 from './images/rain.jpg';
import image6 from './images/scattered cloud.jpg';
import image7 from './images/shower rain.jpg';
import image8 from './images/snow.jpg';
import image9 from './images/thunderstorm.jpg';
import './App.css';
import { FaSearchengin } from "react-icons/fa";
import { useState, useEffect } from 'react';

function App() {
  const [city, setCity] = useState('guna');
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [cweather, setCWeather] = useState(null);
  const [cbackground, setBackground] = useState(image0);
  const [temp, setTemp] = useState(null);
  const [icon, setIcon] = useState(null);
  const [dateTime, setDateTime] = useState('');
  const [error, setError] = useState(null); // New error state

  const weatherapi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=adc390e108e66ab3771e17adab3aec79`;
  const forecastapi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=adc390e108e66ab3771e17adab3aec79`;

  const mainIcon = `https://openweathermap.org/img/w/${icon}.png`;
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const timeString = date.toLocaleTimeString([], options);
  
    if (date >= today && date < tomorrow) {
      return `Today at ${timeString}`;
    } else if (date >= tomorrow && date < new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate() + 1)) {
      return `Tomorrow at ${timeString}`;
    } else {
      return date.toLocaleDateString() + ' at ' + timeString;
    }
  };
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const day = now.toLocaleString("en-US", { weekday: "long" });
      const date = now.getDate();
      const month = now.toLocaleString("en-US", { month: "short" });
      const year = now.getFullYear();

      setDateTime(`${hours}:${minutes} - ${day}, ${date} ${month} ${year}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetching = async () => {
      setError(null);
      try {
        const res = await fetch(weatherapi);
        const forecastRes = await fetch(forecastapi);
        if (!res.ok || !forecastRes.ok) {
          throw new Error('Fetching failed');
        }
        const weatherData = await res.json();
        const forecastData = await forecastRes.json();
        setData(weatherData);
        setForecast(forecastData.list.slice(0, 40));
        setCWeather(weatherData.weather[0].description);
        setTemp((weatherData.main.temp - 273).toFixed(0));
        setIcon(weatherData.weather[0].icon);
      } catch (errors) {
        setError(errors.message); // Set error message
        console.error(errors);
      }
    };
    fetching();
  }, [city, weatherapi, forecastapi]);

  useEffect(() => {
    if (cweather) {
      switch (cweather) {
        case 'broken clouds': setBackground(image0); break;
        case 'clear sky': setBackground(image1); break;
        case 'few clouds': setBackground(image2); break;
        case 'fog': setBackground(image3); break;
        case 'mist': setBackground(image4); break;
        case 'rain': setBackground(image5); break;
        case 'scattered clouds': setBackground(image6); break;
        case 'shower rain': setBackground(image7); break;
        case 'snow': setBackground(image8); break;
        case 'thunderstorm': setBackground(image9); break;
        default: setBackground(image0);
      }
    }
  }, [cweather]);

  return (
    <>
      <div className='background' style={{ backgroundImage: `url(${cbackground})` }}>
        <div className='left-part'>
          <h1 className='temperature'>{temp !== null ? `${temp}°C` : 'N/A'}</h1>
          <div className='dt'>
            <h5>{data?.name || "No Such City Found"}</h5>
            <p>{dateTime}</p>
          </div>
          <div className='weather_desc'>
            {icon && <img src={mainIcon} alt="Weather Icon" />}
            <p>{cweather || 'N/A'}</p>
          </div>
        </div>
        <div className='right-part'>
          <div className='search_city'>
            <input
              type='text'
              placeholder='City Name'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onBlur={() => setCity(city.trim())}
            />
            <FaSearchengin />
          </div>
          {error && <p className="error">{error}</p>}
          <h5>Weather Detail</h5>
          <div className='detail'>
            <div className='idetail'>MAX Temperature <div className='values'>{data?.main?.temp_max ? (data.main.temp_max - 273).toFixed(0) : 'N/A'}</div></div>
            <div className='idetail'>MIN Temperature <div className='values'>{data?.main?.temp_min ? (data.main.temp_min - 273).toFixed(0) : 'N/A'}</div></div>
            <div className='idetail'>Humidity <div className='values'>{data?.main?.humidity || 'N/A'}</div></div>
            <div className='idetail'>Wind <div className='values'>{data?.wind?.speed || 'N/A'}</div></div>
          </div>
          <h5>Weather Forecast</h5>
          <div className='forecast'>
            {forecast.map((item, index) => (
              <div className='forecast_item' key={index}>
                <div className='ford'>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt="Forecast Icon"
                  />
                  <div className='datentime'>
                  <p>{formatDate(item.dt)}</p>
                  <p>{item.weather[0]?.description}</p>
                  </div>
                  
                </div>
                <div className='ftemp'>
                  <p>{(item.main.temp - 273).toFixed(0)}°C</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;