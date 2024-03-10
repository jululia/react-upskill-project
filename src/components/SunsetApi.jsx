import React, {useState, useEffect} from 'react'

export const SunsetApi = ({city, latitude, longitude, timezone}) => {

    const [sunData, setSunData] = useState([])

    Date.prototype.addHours= function(h){
        this.setHours(this.getHours()+h);
        return this;
    }

    useEffect(() => {
        fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}%&lng=${longitude}%&tzid=Europe/Lisbon&formatted=0`)
        .then(res => res.json())
        .then(json => setSunData(json.results));

    }, [latitude, longitude])

    function formatTime(timeString) {
        
        let string = "?"

        if (typeof(timeString) ==  "string"){
            timeString = timeString.substring(0, timeString.length - 6);
            let date = new Date(timeString);
            date = new Date(date.getTime() + (timezone * 60 * 60 * 1000));

            let hours = date.getHours();
            let minutes = date.getMinutes();
        
            // Pad the hour and minute values with zeroes if necessary.
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;

            string = hours + ':' + minutes;
        }
           
        return string;
    }

    let isSunsetPast = new Date() < new Date(sunData.sunset) ? "is" : "was";

  return (
    <>
    <h2>Sunset in {city} {isSunsetPast} at {formatTime(sunData.sunset)} today.</h2>
    </>
  )
}
