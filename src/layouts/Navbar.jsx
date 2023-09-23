import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'

function Navbar() {

  let location = useLocation()

  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <navbar className='lg:px-24 px-8 flex justify-between items-center py-6 border-b border-gray-500 relative'>
      {/* <div className="absolute md:-top-12 md:left-36 md:w-96 md:h-96 bg-primary rounded-full blur-3xl opacity-30 "></div> */}
      <div className="font-clash-display">
          <Link to='/' className="text-2xl">get<span className="text-secondary font-bold">linked</span></Link>
      </div>
      {/* Mobile icon  */}
      <button className="lg:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <img src={Menu} alt="menu" />
          ) : (
            <img src={Close} alt="close" />
        )}
      </button>
      
      {/* Large screen  */}
      <div className="lg:flex md:items-center md:space-x-12 hidden">
        <Link to='/timeline'>Timeline</Link>
        <Link to='/overview'>Overview</Link>
        <Link to='/faqs'>FAQs</Link>
        <Link to='/contact' className={location.pathname === '/contact' ? 'bg-gradient-to-r from-lgrad to-secondary bg-clip-text text-transparent ' : 'text-white'}>Contact</Link>
        <div>
            <Link to='/register' className={location.pathname === '/register' ? 'border-2 border-y-lgrad border-x-secondary py-2 px-8 md:ml-36 rounded-sm' : 'bg-gradient-to-r from-lgrad to-grad py-2 px-8 md:ml-36 rounded-sm'}>Register</Link>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div 
        // className={` lg:hidden flex flex-col bg-main absolute top-0 w-full h-5/12 py-24 px-12 gap-6 delay-100 duration-500 z-10 ${isOpen ? 'left-0' : 'left-[-100%]'}`}
        className={` lg:hidden  bg-main backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-5 absolute top-0 w-full h-screen py-24 px-4 delay-100 duration-500 z-10 ${isOpen ? 'left-0' : 'left-[-100%]'}`}
      >
        <div className="bg-main absolute top-0 right-0 flex flex-col py-24 px-12 gap-6 w-full h-5/12 ">
          <Link to='/timeline'>Timeline</Link>
          <Link to='/overview'>Overview</Link>
          <Link to='/faqs'>FAQs</Link>
          <Link to='/contact'>Contact</Link>
          <div>
              <Link onClick={closeMenu} to='/register' className="bg-gradient-to-r from-lgrad to-grad py-3 px-10 rounded-sm">Register</Link>
          </div>
        </div>
      </div>

    </navbar>
  )
}

export default Navbar