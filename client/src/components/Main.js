import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
// import '../styles/Main.css';
import '../styles/Main.css';

export default function Main() {

    const inputRef = useRef(null);

    return (

        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            <ol>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium recusandae officiis consequatur.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium recusandae officiis consequatur.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium recusandae officiis consequatur.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium recusandae officiis consequatur.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium recusandae officiis consequatur.</li>
            </ol>

            <form id='form'>
                <input ref={inputRef} type="text" placeholder='Username*' className='userid' />
            </form>
            <div className="start">
                <Link className='btn' to={'quiz'}>Start Quiz</Link>
            </div>
        </div>
    )
}
