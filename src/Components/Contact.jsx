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
             <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CrpPbDzJkmWtCZwhFqJpZWccMmrJCTzVQThntgQTZgbqwzCgtqPpMGptMxnNwZltSBBwmJVwbFqxckrNMWbV" 
           class=" hover:text-green-200  text-lg">
          {data?.email}
        </a>
              

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



// const Contact = ({ data }) => {
//   return (
//     <section id="contact" className='w-full py-8 md:py-16'>
//       <div className='flex flex-col md:flex-row'>
//         {/* Left Side: Contact Header */}
//         <div className='bg-[#2ad87f] md:w-1/3 flex items-center justify-center h-64 md:h-screen'>
//           <h1 className='text-[#1e242b] text-2xl md:text-4xl font-bold'>
//             Contact
//           </h1>
//         </div>
        
//         {/* Right Side: Contact Details */}
//         <div className='md:w-2/3 bg-[#1e242b] flex flex-col items-center justify-center p-6 md:p-12'>
//           <div className='flex flex-col gap-4'>
//             <h1 className='text-[#ffffff] text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide text-center'>
//               {data?.fullname}
//             </h1>
//             <h1 className='text-[#ffffff] text-base md:text-lg text-center'>
//               {data?.email}
//             </h1>
//             <h1 className='text-[#ffffff] text-base md:text-lg text-center'>
//               {data?.phonenumber}
//             </h1>
//             <h1 className='text-[#ffffff] text-base md:text-lg text-center'>
//               {data?.address}
//             </h1>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
