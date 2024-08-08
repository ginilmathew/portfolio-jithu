import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Contact from '../Components/Contact'
import axios from 'axios'
import { BASE_URL } from '../../config'

// const HomeScreen = () => {
//     const [user, setUser] = useState([])
//     const [skill, setSkill] = useState([])

//     const getuser = async () => {
//         try {
//             const data = await axios.get(BASE_URL + '/api/user/alluser')
//             setUser(data.data.data)
//         } catch (err) {
//             console.log({ err })
//         }
//     }

//     const allskill = async () => {
//         try {
//             const skilldata = await axios.get(BASE_URL + '/api/skill/allskill')
//             setSkill(skilldata.data.data)
//         } catch (err) {
//             console.log({ err })
//         }
//     }

//     console.log({ user })
//     useEffect(() => {
//         getuser()
//         allskill()

//     }, [])

//     return (
//         <section id='home'>
//             <>
//                 <Navbar />
//                 <div className='h-screen w-[100%] flex ' id='main'>
//                     <div className='h-[100%] w-2/3 bg-[#1e242b] ' >
//                         <div className='justify-center flex  items-center' >
//                             <div className='justify-center flex h-screen flex-col  text-left ' >
//                                 <h3 className='text-[#2ad87f] text-2xl py-6' >
//                                     Hello everyone
//                                 </h3>
//                                 <div className='w-96 ' >
//                                     <h1 className='text-[#ffffff]  text-6xl font-bold tracking-wide '>
//                                         { "I'M" }  { user[0]?.fullname?.toUpperCase() }
//                                     </h1>
//                                 </div>

//                                 <div className='bg-[#2ad87f] h-20 w-80 mt-14 flex justify-center items-center' >
//                                     <div className='bg-[#1e242b] h-16 w-72 items-center justify-center flex ' >
//                                         <h3 className='text-[#ffff] text-xl font-semibold' >
//                                             Mern Stack developer
//                                         </h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='h-[100%]  w-1/3 bg-[#2ad87f] '>

//                     </div>
//                 </div>
//                 <div>
//                     <About data={ user[0] } />
//                 </div>
//                 <div className='w-full'>
//                     <Skills data={ skill } />
//                 </div>
//                 <div>
//                     <Contact data={ user[0] } />
//                 </div>
//             </>
//         </section>
//     )
// }

// export default HomeScreen

const HomeScreen = () => {
    const [user, setUser] = useState(null);
    const [skill, setSkill] = useState([]);
  
    const getuser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/user/alluser`);
        setUser(response.data.data[0]); // Assuming data is an array and we're interested in the first item
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };
  
    const allskill = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/skill/allskill`);
        setSkill(response.data.data);
      } catch (err) {
        console.error('Error fetching skill data:', err);
      }
    };
  
    useEffect(() => {
      getuser();
      allskill();
    }, []);
  
    return (
      <section id='home' className='relative'>
        <Navbar />
        <div className='flex flex-col md:flex-row h-screen'>
          {/* Main Content Area */}
          <div className='flex-1 bg-[#1e242b] flex items-center justify-center p-6 md:p-12'>
            <div className='text-left max-w-lg mx-auto'>
              <h3 className='text-[#2ad87f] text-xl md:text-2xl mb-4'>
                Hello everyone
              </h3>
              <h1 className='text-[#ffffff] text-4xl md:text-6xl font-bold mb-6'>
                {"I'M "} {user?.fullname?.toUpperCase() || 'LOADING...'}
              </h1>
              <div className='bg-[#2ad87f] h-16 w-full max-w-xs md:max-w-sm mx-auto flex items-center justify-center mb-6'>
                <div className='bg-[#1e242b] h-14 w-full flex items-center justify-center'>
                  <h3 className='text-[#ffffff] text-lg md:text-xl font-semibold'>
                    Mern Stack Developer
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Side Content Area */}
          <div className='bg-[#2ad87f] w-full md:w-1/3 flex items-center justify-center p-6'>
            {/* Additional side content can go here */}
          </div>
        </div>
        {/* Additional Sections */}
        {user && <About data={user} />}
        <div className='w-full px-4 md:px-6'>
          <Skills data={skill} />
        </div>
        {user && <Contact data={user} />}
      </section>
    );
  };
  
  export default HomeScreen;