import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Contact from '../Components/Contact'

const HomeScreen = () => {
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
                                <h1 className='text-[#ffffff]  text-6xl font-bold tracking-wide'>
                                    { "I'M Jithu " } <br /> Mathew
                                </h1>
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

                    </div>
                </div>
                <div>
                    <About />
                </div>
                <div className='w-full'>
                    <Skills />
                </div>
                <div>
                    <Contact />
                </div>
            </>
        </section>
    )
}

export default HomeScreen