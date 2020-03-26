import React from 'react';
import skillsData from '../data/SkillsData';
import './Components.css'

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className='skills'>
                    {skillsData.map(skillItem => (
                            <div className='skill-box'>
                                <h3>{skillItem.name}</h3>
                                <p>{skillItem.description}</p>
                            </div>
                    )
                    )}
            </div>
        </div>
    )
}

export default Skills