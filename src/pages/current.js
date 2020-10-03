import React, {useContext} from 'react';
import {TempList} from '../utilities';
import { CityContext } from "../context/cityContext";

export default function Current() {
  const { cityTemp } = useContext(CityContext);
  return (
    <div className="p-3 result-container">
      {
        cityTemp.main && (
          <>
            <TempList item ={"Min"} number= {cityTemp.main.temp_min}/>
            <TempList item ={"Max"} number= {cityTemp.main.temp_max}/>
            <TempList item ={"Pressure"} number= {cityTemp.main.pressure}/>
            <TempList item ={"Humidity"} number= {cityTemp.main.humidity}/>
            <TempList item ={"Wind Speed"} number= {cityTemp.wind.speed}/>
            <TempList item ={"Wind Deg"} number= {cityTemp.wind.deg}/>
          </>
        )
      }
    </div>
  )
}