import React from "react";

export default function DaysList({ day, date, number, icon }) {
  return (
    <div className="temp-list">
      <div className="">
        {day}<br/>
        {date}
      
      </div>
      <div className="text-center">
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="logo" />
        <br />
        {number} <sup>o</sup>C
      </div>
    </div>
  );
}
