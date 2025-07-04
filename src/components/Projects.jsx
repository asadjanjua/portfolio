import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container" id='projects'>
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>GPA Calculator</h3>
          <p>An Android app to calculate GPA and CGPA using Kotlin and XML.</p>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>React-based portfolio showcasing my skills, experience, and projects.</p>
        </div>

        <div className="project-card">
          <h3>Currency Converter</h3>
          <p>Converts currencies in real-time using APIs and JavaScript.</p>
        </div>

        <div className="project-card">
          <h3>LMS (Learning Management System)</h3>
          <p>A system for course management and student tracking built in web tech.</p>
        </div>

        <div className="project-card">
          <h3>Voice Assistant</h3>
          <p>A Python-based assistant that performs tasks using voice commands.</p>
        </div>

        <div className="project-card">
          <h3>Intruder Alert System</h3>
          <p>Hardware-based security alert system that notifies on intrusion.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
