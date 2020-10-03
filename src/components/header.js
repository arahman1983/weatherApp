import React, {useEffect, useState} from "react";
import {SearchInput} from '../utilities';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function AppHeader () {
  const [today, setToday] = useState('')

  useEffect(() => {
   let currDate = new Date()
   setToday(currDate.toLocaleString())
  }, [])
  
  return (
    <div className="app-header">
      <div className="row">
      <div className="col-8 pl-4">
      <p className="p-0">{today} </p>
      <h1>26.84 <sup>o</sup>C</h1>
      <p>feels like 24.07 <sup>o</sup>C</p>
      </div>
      <div className="col-4 icon-cont">
        <FontAwesomeIcon className="temp-icon" icon={faSun} />
        <p className="my-3">description</p>
      </div>

      </div>
      <SearchInput />
    </div>
  );
}
