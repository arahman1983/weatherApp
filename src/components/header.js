import React from "react";
import {SearchInput} from '../utilities';

export default function AppHeader () {
  return (
    <div className="app-header">
      <h1>Weather App</h1>
      <SearchInput />
    </div>
  );
}
