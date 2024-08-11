/* eslint-disable react/prop-types */
import React from 'react'
 const SkillCards = ({ data }) => {   return (    
   <div className='bg-[#1e242b] h-40  w-full  flex rounded-xl justify-center items-center'>   
       <div className='text-[#fff] flex justify-center items-center flex-col gap-3'>         
        <h1 className='text-2xl font-bold tracking-wide'>{ data.name }</h1>        
         <small className='text-[#827a7a]'>{ data.level }</small>     
           </div>   
             </div>
   ) }
 export default SkillCards

// const SkillCards = ({ data }) => {
//   return (
//     <div className='bg-[#1e242b] h-40 sm:h-48 md:h-56 lg:h-64 w-full flex rounded-xl justify-center items-center p-4'>
//       <div className='text-[#fff] flex flex-col items-center gap-2 sm:gap-3'>
//         <h1 className='text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-center'>
//           {data.name}
//         </h1>
//         <small className='text-sm sm:text-base md:text-lg text-[#827a7a]'>
//           {data.level}
//         </small>
//       </div>
//     </div>
//   );
// };

// export default SkillCards;