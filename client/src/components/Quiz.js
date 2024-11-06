import React from 'react'

export default function Quiz() {

  function onNextClick(){
    console.log("Next button clicked");
  }
  
  function onPrevClick(){
    console.log("Previous button clicked");
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      {/** Quiz Questions */}
      <div className="grid">
        <button className='btn prev' onClick={onNextClick}>Previous</button>
        <button className='btn next' onClick={onPrevClick}>Next</button>
      </div>
    </div>
  )
}
