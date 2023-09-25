import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <section className='relative'>
         <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
               <div className='text-center pb-12 md:pb-16'>
                  <h1 className='text-5xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate text-blue-900 ' data-aos="zoom-y-out">IETE STUDENTS' FORUM
                     <span className=' bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-800'>
                        <br />
                        DDU
                     </span>
                  </h1>
                  <div className='max-w-3xl mx-auto'>
                     <p className='text-xl text-gray-600 mb-8 aos-init aos-animate' data-aos="zoom-y-out" data-aos-delay="150">
                        Empowered by Innovation
                     </p>
                     <div className='p-10 max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate'>
                        <div>
                           <Link to={'/team'} className='p-5 rounded-3xl text-white bg-gray-600 hover:bg-gray-900 w-full mb-4 sm:w-auto sm:mb-0'>Meet Our Team</Link>
                        </div>
                     </div>
                  </div>
                  <br className='' />
                  <div class="max-w-sm w-full lg:max-w-full lg:flex">
                     <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url(/core-team.jpg)" }} title="Woman holding a mug">
                     </div>
                     <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                           <h1 className='text-5xl'>
                              Who we are ?
                           </h1>
                           <p class="text-gray-700 text-base">The IETE (Institution of Electronics and Telecommunication Engineers) Students' Forum at DDU (Dharmsinh Desai University) is a student-led club dedicated to fostering knowledge and innovation in the fields of technology.</p>
                        </div>

                     </div>
                  </div>
                  <br />
               </div>

            </div>

         </div>


      </section >
   )
}

export default Home