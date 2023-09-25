import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   return (
      <header className="bg-gray-900 sticky">
         <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-6" aria-label="Global">
            <div className="flex lg:flex-1">
               <NavLink to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">IETE-DDU</span>
                  <img className="h-10 w-auto rounded-full" src="/isf.jpg" alt="" />
               </NavLink>
            </div>
            <div className="flex lg:hidden">
               <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
               </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">


               <NavLink to="/" className="text-sm font-semibold leading-6 text-white hover:bg-gray-600">Home</NavLink>
               <NavLink to="/about" className="text-sm font-semibold leading-6 text-white hover:bg-gray-600">About</NavLink>
               <NavLink to="/events" className="text-sm font-semibold leading-6 text-white hover:bg-gray-600">Events</NavLink>
               <NavLink to="/team" className="text-sm font-semibold leading-6 text-white hover:bg-gray-600">Team</NavLink>
               <NavLink to="/gallery" className="text-sm font-semibold leading-6 text-white hover:bg-gray-600">Gallery</NavLink>
               <NavLink to="/contact" className="text-sm font-semibold leading-6 text-white hover:bg-gray-600">Contact</NavLink>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">

            </div>
         </nav>
         <div className="lg:hidden" role="dialog" aria-modal="true">

            <div className="fixed inset-0 z-10"></div>
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
               <div className="flex items-center justify-between">
                  <NavLink href="#" className="-m-1.5 p-1.5">
                     <span className="sr-only">IETE-DDU</span>
                     <img className="h-8 w-auto" src="/isf.jpg" alt="" />
                  </NavLink>
                  <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                     <span className="sr-only">Close menu</span>
                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  </button>
               </div>
               <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                     <div className="space-y-2 py-6">

                        <NavLink to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-600">Home</NavLink>
                        <NavLink to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-600">About</NavLink>
                        <NavLink to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-600">Events</NavLink>
                        <NavLink to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-600">Team</NavLink>
                        <NavLink to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-600">Gallery</NavLink>
                        <NavLink to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-600">Contact</NavLink>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Navbar