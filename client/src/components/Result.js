import React from 'react';
import '../styles/Result.css';
import { Link } from 'react-router-dom';

export default function Result() {
  return (
    <div className='container'>
      <h1 className='text-light title'>Quiz Result</h1>

      <div className=" result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Musaab Khan</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Attempts</span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Total Questions</span>
          <span className="bold">15</span>
        </div>
        <div className="flex">
          <span>Earned Points</span>
          <span className="bold">45</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span className="bold">Passed</span>
        </div>
      </div>

      <div className="start">
        <Link to={'/'} className='btn'>Restart</Link>
      </div>
    </div>
  )
}
