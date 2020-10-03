import React,{useEffect, useContext} from 'react';
import {DaysList} from '../utilities';
import { CityContext } from "../context/cityContext";
import {getPrevTemp} from '../apis'

export default function Prev() {
  const { cityTemp } = useContext(CityContext);
  useEffect(() => {
    cityTemp.coord && getPrevTemp ( cityTemp.coord.lat,  cityTemp.coord.lon).then(data => console.log(data))
  }, [cityTemp])
  return (
    <div className="p-3 result-container">
      <DaysList icon="01n" number={20} day="Mon" date="02/10/2020" />
    </div>
  )
}