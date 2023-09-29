import React from 'react'
import coreteam from '../images/core-team.jpg'
import TeamCard from '../components/TeamCard'
const Team = () => {
   return (
      <div>
         <div className='container mx-auto px-4 py-10'>
            <div className='items-center lg:flex'>
               <div className='w-2/2 md:w-2/3 lg:w-2/3 mx-12 ml-auto mr-auto p-5'>
                  <img className='max-w-full rounded   shadow-2xl' src={coreteam} alt="" />
               </div>
               <div className='w-full md:w-2/3 px-4'>
                  <h3 className='text-3xl lg:text-5xl text-center font-bold'>
                     Meet Our Team!
                  </h3>
               </div>
            </div>
            <TeamCard />
         </div>
      </div>
   )
}

export default Team