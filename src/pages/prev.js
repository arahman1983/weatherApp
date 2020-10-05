import React, { useState, useEffect, useContext } from "react";
import { DaysList } from "../utilities";
import { CityContext } from "../context/cityContext";
import { getPrevTemp } from "../apis";

export default function Prev() {
  const { cityTemp } = useContext(CityContext);
  const [tempDays, setTempDays] = useState([]);
  useEffect(() => {
    if (cityTemp.coord) {
      let ts = Math.round(new Date().getTime() / 1000);
      let tsDaysBefore = ts - 24 * 3600;
      getPrevTemp(cityTemp.coord.lat, cityTemp.coord.lon, tsDaysBefore).then((data) => setTempDays([data.hourly[12]]));
    }
  }, [cityTemp]);
  return (
    <div className="p-3 result-container">
      {tempDays.length > 0 &&
        tempDays.map((item, index) => <DaysList key={index} icon={item.weather[0].icon} number={item.temp} day={item.dt} date={new Date(item.dt * 1000).toISOString().split("T")[0]} />)}
    </div>
  );
}
