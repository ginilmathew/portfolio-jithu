import React, { useEffect, useState } from 'react'
import Profile from '../../src/assets/photo.png'


 const About = ({ data }) => {


   return (
     <section id='about'>
       <div className='flex' >
         <div className='h-screen w-1/2 bg-[#1e242b] justify-center flex items-center'>
           <div className='h-64 w-64 bg-[#2ad87f] relative' >
             <div className='absolute left-3 bottom-3'>
               <img className=' h-72n w-64' src={ profile } />
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
               <button className='h-14 w-44 bg-[#1e242b]' >

               </button>
             </div>
           </div>
         </div>
       </div>
     </section>


   )
 }

 export default About

