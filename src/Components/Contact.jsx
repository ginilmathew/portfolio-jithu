import React from 'react'



// const Contact = ({ data }) => {


//   return (
//     <section id="contact">
//       <div className='h-screen w-full flex' >
//         <div className='bg-[#2ad87f] h-screen w-1/3  flex justify-center items-center' >
//           <h1 className='text-[#1e242b] text-4xl font-bold' >
//             Contact
//           </h1>
//         </div>
//         <div className='h-screen w-2/3 bg-[#1e242b] flex justify-center items-center flex-col' >
//           <div className=' gap-4 flex flex-col' >
//             <h1 className='text-[#ffffff]  text-6xl font-bold tracking-wide ' >

//               {data?.fullname}
//             </h1>
//             <h1 className='text-[#ffffff] text-xl' >
//               {data?.email}

//             </h1>
//             <h1 className='text-[#ffffff] text-xl' >
//               {data?.phonenumber}

//             </h1>
//             <h1 className='text-[#ffffff] text-xl' >
//               {data?.address}

//             </h1>
//           </div>


//         </div>
//       </div>
//     </section>

//   )
// }

// export default Contact

const Contact = ({ data }) => {
  return (
    <section id="contact" className="relative">
      <div className="flex flex-col md:flex-row h-screen">
        <div className="bg-[#2ad87f] w-full md:w-1/3 flex justify-center items-center p-4 md:p-8">
          <h1 className="text-[#1e242b] text-2xl md:text-4xl font-bold">Contact</h1>
        </div>
        <div className="bg-[#1e242b] w-full md:w-2/3 flex justify-center items-center p-4 md:p-8">
          <div className="gap-4 flex flex-col text-center md:text-left">
            <h1 className="text-[#ffffff] text-3xl md:text-6xl font-bold tracking-wide">
              {data?.fullname || 'Full Name'}
            </h1>
            <h2 className="text-[#ffffff] text-lg md:text-xl">{data?.email || 'Email'}</h2>
            <h2 className="text-[#ffffff] text-lg md:text-xl">{data?.phonenumber || 'Phone Number'}</h2>
            <h2 className="text-[#ffffff] text-lg md:text-xl">{data?.address || 'Address'}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;