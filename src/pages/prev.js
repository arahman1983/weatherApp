import React from 'react';
import {DaysList} from '../utilities';

export default function Prev() {
  return (
    <div className="p-3 result-container">
      <DaysList icon="01n" number={20} day="Mon" date="02/10/2020" />
    </div>
  )
}