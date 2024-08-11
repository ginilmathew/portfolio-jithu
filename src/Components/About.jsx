import React, { useEffect, useState } from 'react'
import Profile from '../../src/assets/photo.png'
import resume from '../../src/assets/jithumathew.pdf'


 const About = ({ data }) => {


   return (
     <section id='about'>
       <div className='flex' >
         <div className='h-screen w-1/2 bg-[#1e242b] justify-center flex items-center'>
           <div className='h-64 w-64 bg-[#2ad87f] relative' >
             <div className='absolute left-3 bottom-3'>
               <img className=' h-72n w-64' src={Profile } />
             </div>



           </div>
         </div>
         <div className='h-screen w-1/2 bg-[#1e242b] justify-center flex items-center '>
           <div className='h-screen justify-center flex  flex-col w-2/3' >
             <h1 className='text-[#fff] text-5xl font-bold text-left' >
               About Me
             </h1>
             <p className='text-[#fff] py-9 ' >
               { data?.about }
             </p>
             <div className='bg-[#2ad87f] h-16 w-48 flex justify-center items-center '>
               <button  className='h-14 w-44 bg-[#1e242b]' >
<a href={resume} >
  <h1 className='font-bold text-2xl text-[white]' >Resume</h1>
</a>
               </button>
             </div>
           </div>
         </div>
       </div>
     </section>


   )
 }

 export default About

// const About = ({ data }) => {
//   return (
//     <section id='about' className='w-full py-8 md:py-16'>
//       <div className='flex flex-col md:flex-row'>
//         {/* Image Section */}
//         <div className='md:w-1/2 flex items-center justify-center bg-[#1e242b] p-4'>
//           <div className='relative h-64 w-64 md:h-80 md:w-80'>
//             <div className='absolute inset-0 flex items-end justify-start p-2'>
//               <img className='h-full w-full object-cover rounded-lg' src={Profile} alt="Profile" />
//             </div>
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className='md:w-1/2 flex flex-col items-start justify-center bg-[#1e242b] p-6'>
//           <h1 className='text-[#fff] text-3xl md:text-5xl font-bold mb-4'>
//             About Me
//           </h1>
//           <p className='text-[#fff] text-base md:text-lg mb-6'>
//             {data?.about}
//           </p>
//           <div className='bg-[#2ad87f] h-12 md:h-16 w-full md:w-48 flex items-center justify-center'>
//             <button className='bg-[#1e242b] text-white py-2 px-4 md:py-3 md:px-6 rounded'>
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
