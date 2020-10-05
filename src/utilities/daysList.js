import React from "react";

export default function DaysList({ day, date, number, icon }) {
  let days = new Date (day*1000)
  let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="temp-list">
      <div className="">
        {daysArr[days.getDay()]}<br/>
        {date}
      
      </div>
      <div className="text-center">
        <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="logo" />
        <br />
        {number} <sup>o</sup>C
      </div>
    </div>
  );
}
