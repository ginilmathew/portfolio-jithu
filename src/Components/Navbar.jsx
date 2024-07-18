

const Navbar = () => {
  return (
    <div className="fixed w-full" >
      <div className='h-14  bg-[#0b0b0b] px-12 flex justify-between' >
        <div className='items-center justify-center flex w-4 h-12 ' >
          <h1>jithu</h1>
        </div>
        <div className="hidden md:flex h-[100%]  items-center justify-center" >
          <ul className="flex gap-12 text-lg font-bold text-[#fff] " >
            <li >
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar