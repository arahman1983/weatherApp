import React, { useState, useEffect, useContext } from "react";
import { DaysList } from "../utilities";
import { CityContext } from "../context/cityContext";
import { getPrevTemp } from "../apis";

export default function Prev() {
  const { cityTemp } = useContext(CityContext);
  const [tempDays, setTempDays] = useState([]);
  useEffect(() => {
    if (cityTemp.coord) {
      let arrayOfPrevDays = [];
      let ts = Math.round(new Date().getTime() / 1000);
      for (let i = 1; i <= 5; i++) {
        let tsDaysBefore = ts - i * 24 * 3600;
        getPrevTemp(cityTemp.coord.lat, cityTemp.coord.lon, tsDaysBefore).then((data) => arrayOfPrevDays.push(data.hourly[12]));
      }
      setTempDays(arrayOfPrevDays);
      // console.log(arrayOfPrevDays)
    }
  }, [cityTemp]);

  return (
    <div className="p-3 result-container">
      {tempDays.length > 0 &&
        tempDays.map((item, index) => <DaysList key={index} icon={item.weather[0].icon} number={item.temp} day={item.dt} date={new Date(item.dt * 1000).toISOString().split("T")[0]} />)}
    </div>
  );
}
