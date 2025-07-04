import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <ul className='ulist'>
                <li><a className='a' href='#about'>About</a></li>
                <li><a className='a' href='#projects'>Projects</a></li>
                <li><a className='a' href='#contact'>Contact</a></li>
            </ul>
            
        </nav>
    </div>
  )
}

export default Navbar