import React from 'react';

export default function TempList({item,number}) {
  return (
    <div className="temp-list">
      <div className="">
        {item}
      </div>
      <div>
        {number}
      </div>
    </div>
  )
  
}