import React from 'react'
import SectionHeader from './SectionHeader'
import TeamMemberCard from './TeamCard'

const Team = () => {
   return (
      <>
         <SectionHeader title="Team" />
         <section class="container mx-auto">
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
               <TeamMemberCard name="Lorem ipsum dolor" jobPosition="Lorem & Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               <TeamMemberCard name="Lorem ipsum dolor" jobPosition="Lorem & Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
               <TeamMemberCard name="Lorem ipsum dolor" jobPosition="Lorem & Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
               <TeamMemberCard name="Lorem ipsum dolor" jobPosition="Lorem & Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               <TeamMemberCard name="Lorem ipsum dolor" jobPosition="Lorem & Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               <TeamMemberCard name="Lorem ipsum dolor" jobPosition="Lorem & Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>
         </section>
      </>
   )
}

export default Team
