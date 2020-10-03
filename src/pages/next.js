import React, { useEffect, useState, useContext } from "react";
import { DaysList } from "../utilities";
import { CityContext } from "../context/cityContext";
import { getNextTemp } from "../apis";

export default function Next() {
  const { selectedCity } = useContext(CityContext);
  const [nextTemp, setnextTemp] = useState([]);

  useEffect(() => {
    selectedCity && getNextTemp(selectedCity.name).then((data) => setnextTemp(data.list));
  }, [selectedCity]);
  return (
    <div className="p-3 result-container">
      {nextTemp.length > 0 && nextTemp.map((item, index) => <DaysList key={index} icon={item.weather[0].icon} number={item.main.temp} day={item.dt} date={item.dt_txt} />)}
    </div>
  );
}
