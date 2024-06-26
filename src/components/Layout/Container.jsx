import { useEffect, useState } from "react";
import { SunsetApi } from "../SunsetApi";
import cityData from "../../json/cityData.json"; // Import JSON file containing city data
import { getCurrentLocation } from "../Functions/getCurrentLocation";

export const Container = () => {
  const [city, setCity] = useState("Stockholm");
  const [latitude, setLatitude] = useState(59.334591);
  const [longitude, setLongitude] = useState(18.06324);
  const [timezone, setTimezone] = useState(1);

  useEffect(() => {
    // Find the selected city in the cityData JSON
    const selectedCity = cityData.find((item) => item.name === city);

    if (selectedCity.name === "Where you are"){
      getCurrentLocation()
      .then((location) => {
        setLatitude(location.latitude);
        setLongitude(location.longitude);

      })
      .catch((error) => {
        console.error('Error getting location:', error);
      });
    } else if (selectedCity) {
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
      <p>Note that the temperature indicates maximum temperature per day.</p>
      <SunsetApi
        city={city}
        latitude={latitude}
        longitude={longitude}
        timezone={timezone}
        showDetailsButton={true}
      />
    </div>
  );
};
