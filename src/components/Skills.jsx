import React from 'react'

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git & GitHub', 'Flexbox', 'Grid', 'DOM', 'Events']

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  )
}

export default Skills
