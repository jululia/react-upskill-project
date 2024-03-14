import { useState, useEffect } from "react";
import SunCalc from 'suncalc';

export const SunsetApi = ({ city, latitude, longitude, timezone }) => {


  const calculateSunAltitude = (date, hour, lat, lng) => {
    let newDate = new Date(date);
    newDate.setHours(hour-timezone);

    let sunPosition = SunCalc.getPosition(newDate, lat, lng);

    return sunPosition.altitude;
}



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
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=cloud_cover&daily=sunshine_duration`
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
      setFormattedSunsetTime(formattedTime);
    }
  }, [latitude, longitude, sunData.sunset, timezone]);

  function formatTime(timeString) {
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
  }));

  const dataArrayHourly = hourlyForecastData.time.map((time, i) => ({
    time,
    date: time.slice(0, -6),
    hour: new Date(time).getHours(),
    sunshine: 100 - hourlyForecastData.cloud_cover[i]
  }));

  let combined = dataArray.map(dailyData => {
    let hourlyDataForDay = dataArrayHourly.filter(hourlyData => hourlyData.date === dailyData.date );
    return {
      date: dailyData.date,
      dailySunshine: dailyData.sunshine,
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
          <h2>
            Sunset in {city} {isSunsetPast} at {formattedSunsetTime} today.
          </h2>

          {/* <div className="weather-forecast">
            {dataArray.map((data, index) => (
              <div key={index}>
                <p>{data.date}</p>
                <img
                  src="sun.svg"
                  style={{
                    height: data.sunshine / 1000 + "px",
                    width: data.sunshine / 1000 + "px"
                  }}
                />
              </div>
            ))}
          </div> */}
          <div className="card-container">
            {combined.map((data, index) => (
              <div key={index} className="city">
                <strong>{getWeekDay(data.date)}</strong>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', paddingLeft: '3px'//,
                  //border: '1px solid black'
                }}>
                  {/* <div style={{//border: '1px solid black', 
                  width: '40px',        
                  display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center'}}>
                <img
                  src="sun.svg"
                  style={{
                    height: data.dailySunshine / 1000 + "px",
                    width: data.dailySunshine / 1000 + "px"
                  }}
                />
                </div> */}
                  {data.hourlyForecast.map((data, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      // border: '1px solid blue',
                      height: 75,
                      width: 1
                    }}>
                      <img className="sun"
                        src="sun.svg"
                        style={{
                          height: data.sunshine / 8 + "px",
                          width: data.sunshine / 8 + "px",
                          top: `${(1-calculateSunAltitude(data.date, data.hour, latitude, longitude))*75/4-15}%`,
                        }}
                      />
                    </div>

                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </>
  );
};
