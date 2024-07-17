

const Navbar = () => {
  return (
    <div className="fixed w-full" >
      <div className='h-14  bg-[#0b0b0b] px-12 flex justify-between' >
        <div className='items-center justify-center flex w-4 h-12 ' >
          <h1>jithu</h1>
        </div>
        <div className="hidden md:flex h-[100%]  items-center justify-center" >
          <ul className="flex gap-12 text-2xl font-bold text-[#fff] " >
            <li >
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Skills
            </li>
            <li>
              Contact
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar