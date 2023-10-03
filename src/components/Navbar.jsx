import React, { useState } from 'react';
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
 
  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav className="bg-gray-900 p-3">

      <div className="px-4 py-2 text-white flex  justify-between">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">IETE-DDU</span>
            <img className="h-10 w-auto rounded-full" src="/isf.jpg" alt="" />
          </Link> 
        </div>
        <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto sticky flex flex-col items-center" : "hidden md:flex gap-8 sticky"} id="menu">
          <NavLink to="/" className="-mx-3 block rounded-lg px-3 py-2 text-center font-semibold leading-7 text-gray-400 hover:text-white transition duration-300 ease-out">Home</NavLink>
          <NavLink to="/About" className="-mx-3 block rounded-lg px-3 py-2 text-right font-semibold leading-7 text-gray-400 hover:text-white transition duration-300 ease-out">About</NavLink>
          <NavLink to="/Event" className="-mx-3 block rounded-lg px-3 py-2 text-right font-semibold leading-7  text-gray-400 hover:text-white transition duration-300 ease-out">Events</NavLink>
          <NavLink to="/Team" className="-mx-3 block rounded-lg px-3 py-2 text-right font-semibold leading-7  text-gray-400 hover:text-white transition duration-300 ease-out">Team</NavLink>
          <NavLink to="/Gallery" className="-mx-3 block rounded-lg px-3 py-2 text-right font-semibold leading-7  text-gray-400 hover:text-white transition duration-300 ease-out">Gallery</NavLink>
          <NavLink to="/Contact" className="-mx-3 block rounded-lg px-3 py-2 text-right font-semibold leading-7  text-gray-400 hover:text-white transition duration-300 ease-out">Contact</NavLink>
        </div>
        <div className="cursor-pointer md:hidden" >
          <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label onClick={handleToggle} class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
            <span class="navicon bg-white-darkest flex items-center relative"></span>
          </label>
        </div>
      </div>
    </nav>
  );
};






export default Navbar;
