import React from 'react'



 const Contact = ({ data }) => {


   return (
     <section id="contact">
       <div className='h-screen w-full flex' >
         <div className='bg-[#2ad87f] h-screen w-1/3  flex justify-center items-center' >
           <h1 className='text-[#1e242b] text-4xl font-bold' >
             Contact
           </h1>
         </div>
         <div className='h-screen w-2/3 bg-[#1e242b] flex justify-center items-center flex-col' >
           <div className=' gap-4 flex flex-col' >
             <h1 className='text-[#ffffff]  text-6xl font-bold tracking-wide ' >

               {data?.fullname}
             </h1>
             <h1 className='text-[#ffffff] text-xl' >
               {data?.email}

             </h1>
             <h1 className='text-[#ffffff] text-xl' >
               {data?.phonenumber}

             </h1>
             <h1 className='text-[#ffffff] text-xl' >
               {data?.address}

             </h1>
           </div>


         </div>
       </div>
     </section>

   )
 }

 export default Contact

