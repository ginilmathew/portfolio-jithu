import React from 'react'
import SkillCards from './Common/SkillCards'

function Skills ({ data }) {



  return (
    <section id="skills"  >
      <div className='bg-[#2ad87f] h-screen w-full flex justify-center items-center '>

        <div className='h-screen w-1/3 bg-[#1e242b] flex justify-center items-center' >
          <h1 className='text-[#ffff] font-bold text-4xl' >
            Skills
          </h1>
        </div>
        <div className='w-2/3 bg-[#2ad87f]  justify-center flex items-center px-7 '>
          <div className='justify-center items-center gap-2 grid grid-cols-3 w-full ' >
            { data?.map((res) =>
              <SkillCards data={ res } key={ res.id } />) }
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills