import F from "../../assets/F.png";
import Humidity from "../../assets/Humid.png";
import { useWeather } from "../hooks";
import "../styles/CityInfo.scss";

const CityInfo = () => {
  const { weatherInfo } = useWeather();

  if (!weatherInfo) return null;

  const weatherDetails = weatherInfo.weather[0];
  const weatherMain = weatherInfo.main;
  const { description, main, icon } = weatherDetails;

  return (
    <div className="city-info">
      <div className="city-info__label">{`${weatherInfo.name}, ${weatherInfo.sys.country}`}</div>

      <div className="city-info__weather-main">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <h3>{main}</h3>
      </div>

      <div>
        <div>
          <div className="city-info__label">Description:</div> {description}
        </div>
        <div className="city-info__item">
          <div className="city-info__label">Temperature:</div>
          {weatherMain.temp}
          <img src={F} width={35} height={35} />
        </div>
        <div className="city-info__item">
          <div className="city-info__label">Humidity:</div>
          {weatherMain.humidity}
          <img src={Humidity} width={35} height={35} />
        </div>
        <div>
          <div className="city-info__label">Time: </div>
          {new Date(weatherInfo.dt * 1000).toUTCString()}
        </div>
      </div>
    </div>
  );
};
export default CityInfo;
