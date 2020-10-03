import React from 'react';
import {TempList} from '../utilities';

export default function Current() {
  return (
    <div className="p-3 result-container">
      <TempList item ={"max"} number= {20}/>
      <TempList item ={"max"} number= {20}/>
      <TempList item ={"max"} number= {20}/>
      <TempList item ={"max"} number= {20}/>
      <TempList item ={"max"} number= {20}/>
      <TempList item ={"max"} number= {20}/>
      <TempList item ={"max"} number= {20}/>
    </div>
  )
}