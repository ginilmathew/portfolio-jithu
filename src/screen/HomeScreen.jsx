import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Contact from '../Components/Contact'
import axios from 'axios'
import { BASE_URL } from '../../config'
import linkedin from '../../src/assets/linkedin.png' 
import Github from '../../src/assets/githublogo.png'

const HomeScreen = () => {
    const [user, setUser] = useState([])
    const [skill, setSkill] = useState([])

    const getuser = async () => {
        try {
            const data = await axios.get(BASE_URL + '/api/user/alluser')
            setUser(data.data.data)
        } catch (err) {
            console.log({ err })
        }
    }

    const allskill = async () => {
        try {
            const skilldata = await axios.get(BASE_URL + '/api/skill/allskill')
            setSkill(skilldata.data.data)
        } catch (err) {
            console.log({ err })
        }
    }

    console.log({ user })
    useEffect(() => {
        getuser()
        allskill()

    }, [])

    return (
        <section id='home'>
            <>
                <Navbar />
                <div className='h-screen w-[100%] flex ' id='main'>
                    <div className='h-[100%] w-2/3 bg-[#1e242b] ' >
                        <div className='justify-center flex  items-center' >
                            <div className='justify-center flex h-screen flex-col  text-left ' >
                                <h3 className='text-[#2ad87f] text-2xl py-6' >
                                    Hello everyone
                                </h3>
                                <div className='w-96 ' >
                                    <h1 className='text-[#ffffff]  text-6xl font-bold tracking-wide '>
                                        {"I'M"}  {user[0]?.fullname?.toUpperCase()}
                                    </h1>
                                </div>

                                <div className='bg-[#2ad87f] h-20 w-80 mt-14 flex justify-center items-center' >
                                    <div className='bg-[#1e242b] h-16 w-72 items-center justify-center flex ' >
                                        <h3 className='text-[#ffff] text-xl font-semibold' >
                                            Mern Stack developer
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[100%]  w-1/3 bg-[#2ad87f] '>
                        <div className='h-72 w-full  flex gap-6 items-center justify-center' >
<a href='https://www.linkedin.com/in/jithu-mathew-77316b248'>
<img className='h-8 w-8' src={linkedin} alt='logo' />
</a>
<a href='https://github.com/jithu19Git' >
<img className='h-8 w-8' src={Github} alt="" />
</a>

                        </div>
                    </div>
                </div>
                <div>
                    <About data={user[0]} />
                </div>
                <div className='w-full'>
                    <Skills data={skill} />
                </div>
                <div>
                    <Contact data={user[0]} />
                </div>
            </>
        </section>
    )
}

export default HomeScreen

//  const HomeScreen = () => {
//      const [user, setUser] = useState([]);
//      const [skill, setSkill] = useState([]);

//     const getuser = async () => {
//         try {
//             const data = await axios.get(BASE_URL + '/api/user/alluser');
//             setUser(data.data.data);
//         } catch (err) {
//             console.log({ err });
//         }
//     };

//     const allskill = async () => {
//         try {
//             const skilldata = await axios.get(BASE_URL + '/api/skill/allskill');
//             setSkill(skilldata.data.data);
//         } catch (err) {
//             console.log({ err });
//         }
//     };

//     console.log({ user });

//     useEffect(() => {
//         getuser();
//         allskill();
//     }, []);

//     return (
//         <section id='home' className='flex flex-col'>
//             <>
//                 <Navbar />
//                 <div className='flex flex-col md:flex-row h-screen w-full' id='main'>
//                     <div className='md:w-2/3 bg-[#1e242b] flex items-center justify-center'>
//                         <div className='flex flex-col items-start text-left p-6 md:p-12'>
//                             <h3 className='text-[#2ad87f] text-2xl md:text-3xl py-6'>
//                                 Hello everyone
//                             </h3>
//                             <div className='w-full md:w-96'>
//                                 <h1 className='text-[#ffffff] text-4xl md:text-6xl font-bold tracking-wide'>
//                                     {"I'M"} {user[0]?.fullname?.toUpperCase()}
//                                 </h1>
//                             </div>

//                             <div className='bg-[#2ad87f] h-16 md:h-20 w-full md:w-80 mt-14 flex justify-center items-center'>
//                                 <div className='bg-[#1e242b] h-12 md:h-16 w-full md:w-72 flex items-center justify-center'>
//                                     <h3 className='text-[#ffff] text-base md:text-xl font-semibold'>
//                                         Mern Stack developer
//                                     </h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='md:w-1/3 bg-[#2ad87f] flex items-center justify-center'>
//                         <div className='text-center p-6'>
//                             <h1 className='text-white text-xl md:text-2xl'>dcjdbchcbhcbh</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='p-6 md:p-12'>
//                     <About data={user[0]} />
//                 </div>
//                 <div className='w-full p-6 md:p-12'>
//                     <Skills data={skill} />
//                 </div>
//                 <div className='p-6 md:p-12'>
//                     <Contact data={user[0]} />
//                 </div>
//             </>
//         </section>
//     );
// };

// export default HomeScreen;
