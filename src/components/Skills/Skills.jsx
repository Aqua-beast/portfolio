import React from 'react'
import './Skills.css'
import { skill } from '../../data'

function Skills() {
  return (
    <div id='skills' className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        {skill.map((skill) => (
          <div className="skill-item" key={skill.id}>
            <img src={skill.url} alt={skill.alt} />
            <p>{skill.alt}</p>
            <div className="percentage-bar">
              <div style={{backgroundColor: 'black', width: '100px', height: '2px'}}>
              <div
                className="percentage-fill"
                style={{ width: `${skill.percentage}px` }}
              ></div>
              </div>
            </div>
            <p>{`${skill.percentage}%`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills
