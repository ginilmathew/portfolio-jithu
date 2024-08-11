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





// const Skills = ({ data }) => {
//   return (
//     <section id="skills" className='w-full py-8 md:py-16'>
//       <div className='flex flex-col md:flex-row'>
//         {/* Skills Header */}
//         <div className='bg-[#1e242b] md:w-1/3 flex items-center justify-center h-48 md:h-screen'>
//           <h1 className='text-[#ffff] font-bold text-3xl md:text-4xl'>
//             Skills
//           </h1>
//         </div>

//         {/* Skills Grid */}
//         <div className='bg-[#2ad87f] md:w-2/3 flex items-center justify-center p-4 md:p-8'>
//           <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 w-full'>
//             {data?.map((res) => (
//               <SkillCards data={res} key={res.id} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
