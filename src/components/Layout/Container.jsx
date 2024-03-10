import { useEffect, useState } from "react"
import { SunsetApi } from "../SunsetApi";

export const Container = () => {

  const [city, setCity] = useState("Stockholm");
  const [latitude, setLatitude] = useState(59.334591);
  const [longitude, setLongitude] = useState(18.063240);
  const [timezone, setTimezone] = useState(1);

  useEffect(() => {

    switch(city) {
      case 'Stockholm':
        setLatitude(59.334591);
        setLongitude(18.063240);
        setTimezone(1);
        break;
      case "Gothenburg":
        setLatitude(57.708870)
        setLongitude(11.974560)
        setTimezone(1);
        break;
      case "London":
        setLatitude(51.509865)
        setLongitude(-0.118092)
        setTimezone(0);
        break;
      case "Nice":
        setLatitude(43.675819)
        setLongitude(7.289429)
        setTimezone(1);
        break;
      case "Barcelona":
        setLatitude(41.390205)
        setLongitude(2.154007)
        setTimezone(1);
        break;
      case "San Diego":
        setLatitude(32.715736)
        setLongitude(-117.161087)
        setTimezone(-8);
        break;
      default:
        // code block
    }

  },[city])

  // useEffect(() => {
  //   console.log(`Latitude: ${latitude}`);
  //   console.log(`Longitude: ${longitude}`);
  //   console.log(`Timezone: ${timezone}`);
  // }, [latitude, longitude]);
  

  return (
    <div className="main-container">
      <button onClick={() => setCity("Stockholm")}>Stockholm</button>
      <button onClick={() => setCity("Gothenburg")}>Gothenburg</button>
      <button onClick={() => setCity("London")}>London</button>
      <button onClick={() => setCity("Nice")}>Nice</button>
      <button onClick={() => setCity("Barcelona")}>Barcelona</button>
      <button onClick={() => setCity("San Diego")}>San Diego</button>
      <SunsetApi city = {city} latitude = {latitude} longitude = {longitude} timezone={timezone}/>
    </div>
  )
}