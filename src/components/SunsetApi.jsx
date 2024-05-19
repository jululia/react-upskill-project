import { useState, useEffect } from "react";
import { CalculateSunAltitude } from "./Functions/CalculateSunAltitude";
import { Link } from 'react-router-dom';

export const SunsetApi = ({ city, latitude, longitude, timezone, showDetailsButton }) => {

  const [sunset, setSunset] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunData, setSunData] = useState([]);
  const [dailyForecastData, setDailyForecastData] = useState({
    time: [],
    sunshine_duration: [],
  });
  const [hourlyForecastData, setHourlyForecastData] = useState({
    time: [],
    cloud_cover: [],
  });
  const [formattedSunsetTime, setFormattedSunsetTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sunriseSunsetResponse = await fetch(
          `https://api.sunrise-sunset.org/json?lat=${latitude}%&lng=${longitude}%&tzid=Europe/Lisbon&formatted=0`
        );
        const sunriseSunsetJson = await sunriseSunsetResponse.json();
        setSunData(sunriseSunsetJson.results);

        const openMeteoResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=cloud_cover&daily=sunshine_duration,temperature_2m_max`
        );
        const openMeteoJson = await openMeteoResponse.json();
        setHourlyForecastData(openMeteoJson.hourly);
        setDailyForecastData(openMeteoJson.daily);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    if (sunData.sunset) {
      const formattedTime = formatTime(sunData.sunset);
      let sunsetUTC = new Date(sunData.sunset);
      const sunsetShort = new Date(
        sunsetUTC.getTime() + timezone * 60 * 60 * 1000
      );
      let sunriseUTC = new Date(sunData.sunrise);
      const sunriseShort = new Date(
        sunriseUTC.getTime() + timezone * 60 * 60 * 1000
      );
      setSunset(sunsetShort.getHours());
      setSunrise(sunriseShort.getHours());
      setFormattedSunsetTime(formattedTime);
    }
  }, [latitude, longitude, sunData.sunset, timezone]);

  const formatTime = (timeString) => {
    let string;

    if (timeString) {
      // Stripping the timezone to get UTC
      timeString = timeString.substring(0, timeString.length - 6);
      let sunsetUTC = new Date(timeString);
      const sunsetLocal = new Date(
        sunsetUTC.getTime() + timezone * 60 * 60 * 1000
      );

      let hours = sunsetLocal.getHours();
      let minutes = sunsetLocal.getMinutes();

      // Pad the hour and minute values with zeroes if necessary.
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;

      string = hours + ":" + minutes;
    }

    return string;
  }

  let isSunsetPast = new Date() < new Date(sunData.sunset) ? "is" : "was";

  //Creating an array of objects where each object includes a time and sunshine_duration pair
  const dataArray = dailyForecastData.time.map((time, i) => ({
    date: time,
    sunshine: dailyForecastData.sunshine_duration[i],
    temperature: dailyForecastData.temperature_2m_max[i],
  }));



  const dataArrayHourly = hourlyForecastData.time.map((time, i) => {

    const date = time.slice(0, -6)
    const hour = new Date(time).getHours()
    const altitude = CalculateSunAltitude(date, hour, latitude, longitude, timezone);

    return {

      time,
      date: date,
      hour: hour,
      sunshine: (new Date(time).getHours() > sunrise && new Date(time).getHours() <= (sunset)) ? 100 - hourlyForecastData.cloud_cover[i] : null,
      altitude: altitude

    }

  });

  let combined = dataArray.map(dailyData => {
    let hourlyDataForDay = dataArrayHourly.filter(hourlyData => hourlyData.date === dailyData.date);
    return {
      date: dailyData.date,
      dailySunshine: dailyData.sunshine,
      dailyTemperature: dailyData.temperature,
      hourlyForecast: hourlyDataForDay,
    };
  });

  function getWeekDay(dateString) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date(dateString);
    let dayName = days[date.getDay()];
    return dayName;
  }

  return (
    <>
      {!sunData && (
        <>
          <p>Oh no</p>
        </>
      )}
      {sunData && (
        <>
          <h2 style={{ display: "inline" }}>
          {city === "Where you are" ? `Sunset where you are ${isSunsetPast ? "is" : "is not"} at ${formattedSunsetTime} today.` :
            `Sunset in ${city} ${isSunsetPast ? "is" : "is not"} at ${formattedSunsetTime} today.`}

      {/* {city === "Where you are"? Sunset where you are {isSunsetPast} at {formattedSunsetTime} today.:
            Sunset in {city} {isSunsetPast} at {formattedSunsetTime} today.} */}
          </h2>
          {showDetailsButton === true && (
            <Link to={`/city/${city.toLowerCase()}`} style={{ display: "inline" }} >
              <button className="small-button">Show details</button>
            </Link>)}
          <div className="card-container">

            {combined.map((data, index) => (
              <div key={index} className="card-forecast">
                <strong>{getWeekDay(data.date)} </strong>{Math.round(data.dailyTemperature)}°C

                <div className="horizon"></div>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', paddingLeft: '3px'//,
                  // border: '1px solid black'
                }}>
                  <strong style={{ zIndex: 15, color: 'black' }}>{data.max_temperature}</strong>
                  {data.hourlyForecast.map((data, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      // border: '1px solid blue',
                      height: 35,
                      width: 1
                    }}>
                      <img className="sun"
                        src="/sun.svg"
                        style={{
                          height: data.sunshine / 8 + "px",
                          width: data.sunshine / 8 + "px",
                          top: `${(1 - data.altitude) * 35 - 20}px`,
                        }}
                      />
                    </div>

                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )
      }

    </>
  );
};
