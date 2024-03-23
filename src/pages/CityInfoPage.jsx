import { useParams } from "react-router-dom";
import cityData from "../json/cityData.json";

export const CityInfoPage = () => {
  // we are going to destrcutture the paramater that we need
  const { city } = useParams();

  const cityInfo = cityData.find(

    (cityId) => cityId.name.toLowerCase().replace(/ /g, "-") === city
  );

  if (!cityInfo) return <p>City not found!</p>;

  return (
    <>
    <div className="intro"></div>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi iste cum veritatis minima maxime impedit assumenda, voluptate sint excepturi neque quo sequi repellat, esse corporis nihil, animi necessitatibus officiis repudiandae.

      <h1>{cityInfo.name}</h1>
      <p>Longitude: {cityInfo.longitude}</p>
      <p>Latitude: {cityInfo.latitude}</p>
      <p> {city}</p>
      <div className='bottom-space' />
      <p>That's it for now :)</p>
    </>
  );
};