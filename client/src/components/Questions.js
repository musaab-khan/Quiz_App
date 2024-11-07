import React, { useEffect } from 'react'
import { useState } from 'react';
import data from '../mockData/data';

export default function Questions() {
  
  const [checked, setChecked]=useState(undefined);
  
  const question=data[0];

  useEffect(()=>{
    console.log(question);
  });
  
  function onSelect(){
    setChecked(true);
    console.log('Question option selected.');
  }

  return (
    <div className='questions'>
        <h2 className='text-light'>{question.question}</h2>

        <ul key={question.id}>
            
        {
        question.options.map((q,i)=>(
          <li>
              <input key={i}
              type="radio" 
              value={false} 
              name='options' 
              id={`q${i}-option`}
              onChange={onSelect}
              />
              <label htmlFor={`q${i}-option`} className='text-primary'>{q}</label>
              <div className='check'></div>
          </li>
        ))
        }

        </ul>
    </div>
  )
}
