

// const Navbar = () => {
//   return (
//     <div className="fixed w-full" >
//       <div className='h-14  bg-[#0b0b0b] px-12 flex justify-between' >
//         <div className='items-center justify-center flex w-4 h-12 ' >
//           <h1>jithu</h1>
//         </div>
//         <div className="hidden md:flex h-[100%]  items-center justify-center" >
//           <ul className="flex gap-12 text-lg font-bold text-[#fff] " >
//             <li >
//               <a href="#home">Home</a>
//             </li>

//             <li>
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="#skills">Skills</a>
//             </li>
//             <li>
//               <a href="#contact">Contact</a>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full bg-[#0b0b0b]">
      <div className="h-14 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center justify-center w-4 h-12">
          <h1 className="text-white">jithu</h1>
        </div>
        
        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center">
          <ul className="flex gap-12 text-lg font-bold text-white">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 text-lg font-bold text-white bg-[#0b0b0b]">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
