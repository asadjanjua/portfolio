import React from 'react'

const Header = () => {
  return (
     <header className="header">
      <div className="header-left">
        <h2>Hi, I'm Asad Mehmood</h2>
        <h4>Frontend Developer</h4>
        <p>I build responsive and modern web applications using React, JavaScript, HTML, and CSS.</p>
        <a href="#projects">
          <button className="btn">View Projects</button>
        </a>
      </div>
    </header>
  )
}

export default Header