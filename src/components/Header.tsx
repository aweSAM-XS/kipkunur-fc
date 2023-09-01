import React from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <header className="bg-primary py-4 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/5">
          <img src={logo} alt="Kipkunur FC logo" className='w-full' />
        </div>
        
        <nav className="md:ml-6 lg:ml-12">
          <ul className="flex space-x-6">
            <li className="text-white hover:text-secondary transition duration-300">
              <a href="#">Home</a>
            </li>
            <li className="text-white hover:text-secondary transition duration-300">
              <a href="#">About</a>
            </li>
            <li className="text-white hover:text-secondary transition duration-300">
              <a href="#">Stats</a>
            </li>
            <li className="text-white hover:text-secondary transition duration-300">
              <a href="#">Players</a>
            </li>
            <li className="text-white hover:text-secondary transition duration-300">
              <a href="#">Gallery</a>
            </li>
            <li className="text-white hover:text-secondary transition duration-300">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header