import { useEffect, useState } from "react";
import { SunsetApi } from "../SunsetApi";
import cityData from "../../json/cityData.json"; // Import JSON file containing city data

export const Container = () => {
  const [city, setCity] = useState("Stockholm");
  const [latitude, setLatitude] = useState(59.334591);
  const [longitude, setLongitude] = useState(18.06324);
  const [timezone, setTimezone] = useState(1);

  useEffect(() => {
    // Find the selected city in the cityData JSON
    const selectedCity = cityData.find((item) => item.name === city);

    // If the city is found, update state with its information
    if (selectedCity) {
      setLatitude(selectedCity.latitude);
      setLongitude(selectedCity.longitude);
      setTimezone(selectedCity.timezone);
    }
  }, [city]);

  return (
    <div className="main-container">
      {/* Render buttons dynamically based on cityData */}
      {cityData.map((item) => (
        <button key={item.name} onClick={() => setCity(item.name)}>
          {item.name}
        </button>
      ))}
      <SunsetApi
        city={city}
        latitude={latitude}
        longitude={longitude}
        timezone={timezone}
      />
    </div>
  );
};
