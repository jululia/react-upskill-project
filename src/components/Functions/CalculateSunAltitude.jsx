import SunCalc from 'suncalc';

export const CalculateSunAltitude = (date, hour, lat, lng, timezone) => {
    let newDate = new Date(date);
    newDate.setHours(hour - timezone);

    let sunPosition = SunCalc.getPosition(newDate, lat, lng);

    return sunPosition.altitude;
  }