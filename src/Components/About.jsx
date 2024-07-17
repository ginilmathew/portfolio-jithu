import React from 'react'
import profile from '../../src/assets/photo.png'

const About = () => {
  return (
    <div className='flex' >
      <div className='h-screen w-1/2 bg-[#1e242b] justify-center flex items-center'>
        <div className='h-64 w-64 bg-[#2ad87f] relative' >
          <div className='absolute left-3 bottom-3'>
            <img className=' h-72 w-64' src={ profile } />
          </div>



        </div>
      </div>
      <div className='h-screen w-1/2 bg-[#1e242b] justify-center flex items-center '>
        <div className='h-screen justify-center flex  flex-col w-2/3' >
          <h1 className='text-[#fff] text-5xl font-bold text-left' >
            About Me
          </h1>
          <p className='text-[#fff] py-9 ' >
            I am passionate about front-end web development and continuously seek opportunities to enhance my skills and knowledge in the field. I am enthusiastic about creating intuitive user interfaces and staying up-to-date with the latest trends and technologies in web development. I am eager to contribute my expertise and grow professionally within a dynamic team environment.

            By highlighting your internship experience, projects, skills, and education, you can demonstrate your readiness to take on a role as a frontend developer and showcase your potential to contribute effectively to a team.
          </p>
          <div className='bg-[#2ad87f] h-16 w-48 flex justify-center items-center '>
            <button className='h-14 w-44 bg-[#1e242b]' >

            </button>
          </div>
        </div>
      </div>
    </div >

  )
}

export default About