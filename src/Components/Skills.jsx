import React from 'react'
import SkillCards from './Common/SkillCards'

function Skills () {

  const data = [{ id: 1, name: 'HTML', level: 'advance' },
  { id: 2, name: 'CSS', level: 'Advance', },
  { id: 3, name: 'Tailwind CSS', level: 'itermidate' },
  { id: 4, name: 'Bootstrap', level: 'Advance' },
  { id: 5, name: 'React', level: 'intermidate' },
  { id: 6, name: 'Java Script', level: 'Advance' },
  { id: 7, name: 'MongoDb', level: 'intermidate' },
  { id: 8, name: 'Nodejs', level: 'intermidate' },
  { id: 9, name: 'Express', level: 'intermidate' }
  ]
  return (

    <div className='bg-[#2ad87f] h-screen w-full flex justify-center items-center '  >

      <div className='h-screen w-1/3 bg-[#1e242b] flex justify-center items-center' >
        <h1 className='text-[#ffff] font-bold text-4xl' >
          Skills
        </h1>
      </div>
      <div className='w-2/3 bg-[#2ad87f]  justify-center flex items-center px-7 '>
        <div className='justify-center items-center flex flex-wrap gap-2 ' >
          { data.map((res) =>
            <SkillCards data={ res } key={ res.id } />) }
        </div>
      </div>
    </div>


  )
}

export default Skills