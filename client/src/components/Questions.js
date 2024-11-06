import React from 'react'
import { useState } from 'react';
export default function Questions() {

  const [checked, setChecked]=useState(undefined);

  function onSelect(){
    setChecked(true);
    console.log('Question option selected.');
  }

  return (
    <div className='questions'>
        <h2 className='text-light'>Quiz Question 1</h2>

        <ul>
            <li>
                <input
                 type="radio" 
                 value={false} 
                 name='options' 
                 id='q1-options'
                 onChange={onSelect}
                 />
                 <label htmlFor="q1-options" className='text-primary'>option 1</label>
                 <div className='check'></div>
            </li>
            <li>
                <input
                 type="radio" 
                 value={false} 
                 name='options' 
                 id='q1-options'
                 onChange={onSelect}
                 />
                 <label htmlFor="q1-options" className='text-primary'>option 2</label>
                 <div className='check'></div>
            </li>
            <li>
                <input
                 type="radio" 
                 value={false} 
                 name='options' 
                 id='q1-options'
                 onChange={onSelect}
                 />
                 <label htmlFor="q1-options" className='text-primary'>option 3</label>
                 <div className='check'></div>
            </li>
        </ul>
    </div>
  )
}
