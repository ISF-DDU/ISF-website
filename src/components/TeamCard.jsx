import React from 'react'
import TeamMember from './TeamMember'
import team from '../data/team.json'
import defaul from '../images/default.png'
const TeamCard = () => {
   return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
         <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
               <h1 className="inline-block px-3 py-px mb-4 text-5xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Core Team
               </h1>
            </div>

         </div>
         <div className='grid gap-10 sm:grid-cols-1 lg:grid-cols-3'>
            {team.coreteam.map((member) => {
               return (
                  <TeamMember name={member.name} image={member.image ? member.image : defaul} position={member.position} github={member.github} desc={member.desc} />
               )
            })}

         </div>
         {/* <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
               <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                     className="object-cover w-full h-56 md:h-64 xl:h-80"
                     src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                     alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                     <p className="mb-1 text-lg font-bold text-gray-100">
                        Oliver Aguilerra
                     </p>
                     <p className="mb-4 text-xs text-gray-100">Product Manager</p>
                     <p className="mb-4 text-xs tracking-wide text-gray-400">
                        Vincent Van Gogh’s most popular painting, The Starry Night.
                     </p>
                     <div className="flex items-center justify-center space-x-3">
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                           </svg>
                        </a>
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                     className="object-cover w-full h-56 md:h-64 xl:h-80"
                     src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                     alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                     <p className="mb-1 text-lg font-bold text-gray-100">
                        Marta Clermont
                     </p>
                     <p className="mb-4 text-xs text-gray-100">Design Team Lead</p>
                     <p className="mb-4 text-xs tracking-wide text-gray-400">
                        Amet I love liquorice jujubes pudding croissant I love pudding.
                     </p>
                     <div className="flex items-center justify-center space-x-3">
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                           </svg>
                        </a>
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 30 30" fill="currentColor" className="h-6" xmlns="http://www.w3.org/2000/svg" >
                              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                     className="object-cover w-full h-56 md:h-64 xl:h-80"
                     src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                     alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                     <p className="mb-1 text-lg font-bold text-gray-100">
                        Anthony Geek
                     </p>
                     <p className="mb-4 text-xs text-gray-100">CTO, Lorem Inc.</p>
                     <p className="mb-4 text-xs tracking-wide text-gray-400">
                        Apple pie macaroon toffee jujubes pie tart cookie caramels.
                     </p>
                     <div className="flex items-center justify-center space-x-3">
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                           </svg>
                        </a>
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                     className="object-cover w-full h-56 md:h-64 xl:h-80"
                     src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                     alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                     <p className="mb-1 text-lg font-bold text-gray-100">
                        Alice Melbourne
                     </p>
                     <p className="mb-4 text-xs text-gray-100">Human Resources</p>
                     <p className="mb-4 text-xs tracking-wide text-gray-400">
                        Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing
                        elit.
                     </p>
                     <div className="flex items-center justify-center space-x-3">
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                           </svg>
                        </a>
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                     className="object-cover w-full h-56 md:h-64 xl:h-80"
                     src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                     alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                     <p className="mb-1 text-lg font-bold text-gray-100">
                        Martin Garix
                     </p>
                     <p className="mb-4 text-xs text-gray-100">Good guy</p>
                     <p className="mb-4 text-xs tracking-wide text-gray-400">
                        Bacon ipsum dolor sit amet salami jowl corned beef, andouille
                        flank.
                     </p>
                     <div className="flex items-center justify-center space-x-3">
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                           </svg>
                        </a>
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                     className="object-cover w-full h-56 md:h-64 xl:h-80"
                     src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                     alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                     <p className="mb-1 text-lg font-bold text-gray-100">
                        Andrew Larkin
                     </p>
                     <p className="mb-4 text-xs text-gray-100">Backend Developer</p>
                     <p className="mb-4 text-xs tracking-wide text-gray-400">
                        Moonfish, steelhead, lamprey southern flounder tadpole fish
                        bigeye.
                     </p>
                     <div className="flex items-center justify-center space-x-3">
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                           </svg>
                        </a>
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                     className="object-cover w-full h-56 md:h-64 xl:h-80"
                     src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                     alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                     <p className="mb-1 text-lg font-bold text-gray-100">
                        Sophie Denmo
                     </p>
                     <p className="mb-4 text-xs text-gray-100">Designer</p>
                     <p className="mb-4 text-xs tracking-wide text-gray-400">
                        Veggies sunt bona vobis, proinde vos postulo esse magis grape
                        pea.
                     </p>
                     <div className="flex items-center justify-center space-x-3">
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                           </svg>
                        </a>
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                     className="object-cover w-full h-56 md:h-64 xl:h-80"
                     src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                     alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                     <p className="mb-1 text-lg font-bold text-gray-100">
                        Benedict Caro
                     </p>
                     <p className="mb-4 text-xs text-gray-100">Frontend Developer</p>
                     <p className="mb-4 text-xs tracking-wide text-gray-400">
                        I love cheese, especially airedale queso. Cheese and biscuits
                        halloumi.
                     </p>
                     <div className="flex items-center justify-center space-x-3">
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                           </svg>
                        </a>
                        <a
                           href="/"
                           className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div> */}
      </div>
   )
}

export default TeamCard