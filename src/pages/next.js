import React, { useEffect, useState, useContext } from "react";
import { DaysList } from "../utilities";
import { CityContext } from "../context/cityContext";
import { getNextTemp } from "../apis";

export default function Next() {
  const { selectedCity } = useContext(CityContext);
  const [nextTemp, setNextTemp] = useState([]);

  useEffect(() => {
    let currentDate = new Date();
    selectedCity && getNextTemp(selectedCity.name).then((data) => {
      let dataList = data.list.filter(item => {
        let itemDate = new Date(item.dt * 1000);
        return itemDate.getDay() !== currentDate.getDay()
      })
      setNextTemp([dataList[3],dataList[11],dataList[19],dataList[27],dataList[35]])
    });
    
  }, [selectedCity]);
  return (
    <div className="p-3 result-container">
      {nextTemp.length > 0 && nextTemp.map((item, index) => <DaysList key={index} icon={item.weather[0].icon} number={item.main.temp} day={item.dt} date={item.dt_txt.split(" ")[0]} />)}
    </div>
  );
}
