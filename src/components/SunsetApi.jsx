import React, { useState, useEffect } from "react";

export const SunsetApi = ({ city, latitude, longitude, timezone }) => {
  const [sunData, setSunData] = useState([]);
  const [dailyForecastData, setDailyForecastData] = useState({
    time: [
      "2024-03-11",
      "2024-03-12",
      "2024-03-13",
      "2024-03-14",
      "2024-03-15",
      "2024-03-16",
      "2024-03-17",
    ],
    sunshine_duration: [
      25788.72, 38663.58, 38769.25, 38872.77, 23359.88, 38510.79, 1136.05,
    ],
  });
  const [hourlyForecastData, setHourlyForecastData] = useState();

  useEffect(() => {
    fetch(
      `https://api.sunrise-sunset.org/json?lat=${latitude}%&lng=${longitude}%&tzid=Europe/Lisbon&formatted=0`
    )
      .then((res) => res.json())
      .then((json) => setSunData(json.results));

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=cloud_cover&daily=sunshine_duration`
    )
      .then((res) => res.json())
      .then((json) => {
        setHourlyForecastData(json.hourly);
        setDailyForecastData(json.daily);
      });
  }, [latitude, longitude]);

  function formatTime(timeString) {
    let string = "?";

    if (typeof timeString == "string") {
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
    time,
    sunshine: dailyForecastData.sunshine_duration[i],
  }));


  return (
    <>
      <h2>
        Sunset in {city} {isSunsetPast} at {formatTime(sunData.sunset)} today.
      </h2>
      <div className="weather-forecast">
        {dataArray.map((data, index) => (
          <div key={index}>
            <p>{data.time}</p>
            <img
              src="sun.svg"
              style={{
                height: data.sunshine / 1000 + "px",
                width: data.sunshine / 1000 + "px",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
