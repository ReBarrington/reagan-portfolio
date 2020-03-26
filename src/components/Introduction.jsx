import React from 'react';
import profilepic from '../imgs/ProfilePic.jpeg';
import './Components.css'

const Introduction = () => {
    return (
        <div className="introduction-container">
            <img className='profilepic' src={profilepic} alt='Reagan'></img>
            <div className='text-section'>
                <h1>Reagan Barrington</h1>
                <p>Hi, I'm a Full Stack Web Development Student at Lambda School.</p>
            </div>
        </div>
    )
}

export default Introduction