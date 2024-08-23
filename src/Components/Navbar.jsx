import dp from "../../src/assets/photo.png"

  const Navbar = () => {
    return (
      <div className="fixed w-full" >
        <div className='h-14  bg-[#0b0b0b] px-12 flex justify-between' >
          <div className='items-center justify-center flex  h-12  ' >
            <img className="h-11 w-11 rounded-xl"  src={dp} />
          </div>
          <div className="hidden md:flex  h-[100%]  items-center justify-center" >
            <ul className="flex gap-12 text-lg font-bold text-[#fff] md:flex-row " >
              <li className="hover:text-green-300" >
                <a href="#home">Home</a>
              </li>

              <li className="hover:text-green-300">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-green-300">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover:text-green-300">
                <a href="#contact">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    )
  }

  export default Navbar

