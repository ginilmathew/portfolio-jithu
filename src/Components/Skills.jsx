import React from 'react'
import SkillCards from './Common/SkillCards'

// function Skills ({ data }) {



//   return (
//     <section id="skills"  >
//       <div className='bg-[#2ad87f] h-screen w-full flex justify-center items-center '>

//         <div className='h-screen w-1/3 bg-[#1e242b] flex justify-center items-center' >
//           <h1 className='text-[#ffff] font-bold text-4xl' >
//             Skills
//           </h1>
//         </div>
//         <div className='w-2/3 bg-[#2ad87f]  justify-center flex items-center px-7 '>
//           <div className='justify-center items-center gap-2 grid grid-cols-3 w-full ' >
//             { data?.map((res) =>
//               <SkillCards data={ res } key={ res.id } />) }
//           </div>
//         </div>
//       </div>

//     </section>
//   )
// }

// export default Skills



const Skills = ({ data }) => {
  return (
    <section id="skills" className="relative">
      <div className="flex flex-col md:flex-row h-screen">
        {/* Skills Header */}
        <div className="bg-[#1e242b] w-full md:w-1/3 flex justify-center items-center p-4 md:p-8">
          <h1 className="text-white text-2xl md:text-4xl font-bold">Skills</h1>
        </div>

        {/* Skills Content */}
        <div className="bg-[#2ad87f] w-full md:w-2/3 flex justify-center items-center p-4 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-5xl">
            {data?.map((res) => (
              <SkillCards data={res} key={res.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
