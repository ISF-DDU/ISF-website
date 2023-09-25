import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
const Navbar = () => {
   return (
      <nav className="bg-black p-4">
         <div className="container mx-auto">
            <div className="flex justify-between items-center">
               <div className="text-white font-bold text-xl">
                  MyNavbar
               </div>
               <div className="space-x-4">
                  <NavLink to="/" className="text-white hover:text-gray-300">Home</NavLink>
                  <NavLink href="/" className="text-white hover:text-gray-300">About</NavLink>
                  <NavLink href="/" className="text-white hover:text-gray-300">Services</NavLink>
                  <NavLink href="/" className="text-white hover:text-gray-300">Contact</NavLink>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar