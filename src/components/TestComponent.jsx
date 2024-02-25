import React, {useState, useEffect} from 'react'
import { ReactDOM } from 'react'

export const TestComponent = () => {

    const [sunData, setSunData] = useState([])

    useEffect(() => {
        fetch('https://api.sunrise-sunset.org/json?lat=59.334591&lng=18.063240&tzid=Europe/Berlin&formatted=0')
        .then(res => res.json())
        .then(json => setSunData(json.results));

    }, [])

    function formatTime(timeString) {
        let date = new Date(timeString);
        let hours = date.getHours();
        let minutes = date.getMinutes();
    
        // Pad the hour and minute values with zeroes if necessary.
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
    
        return hours + ':' + minutes;
    }

  return (
    <>
    <h2>Sunset in Stockholm {Date() < Date(sunData.sunset) ? "is" : "was"} at {formatTime(sunData.sunset)} today.</h2>
    </>
  )
}
