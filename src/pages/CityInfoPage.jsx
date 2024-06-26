import { useParams } from "react-router-dom";
import cityData from "../json/cityData.json";
import { SunsetApi } from "../components/SunsetApi";

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
      <h1>{cityInfo.name}</h1>
      <p>Longitude: {cityInfo.longitude}</p>
      <p>Latitude: {cityInfo.latitude}</p>
      <div className="main-container">
      <SunsetApi
        city={cityInfo.name}
        latitude={cityInfo.latitude}
        longitude={cityInfo.longitude}
        timezone={cityInfo.timezone}
        showDetailsButton={false}
      />
      </div>
      <div className='bottom-space' />
      <p>That's it for now :)</p>
    </>
  );
};