 import { Link } from 'react-router-dom';
import '../NavBar.css'
import React, { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
    return (
    <nav>
        {/* <a href="" className="logo">Hims</a>
        <ul className="nav-menu">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Me</Link></li>
            <li><Link to={"/profile"}>Portofolio</Link></li>
            <li><Link to={"/blog"}>Block</Link></li>
        </ul> */}

        <div className='flex flex-col lg:flex-row bg-[#6495ED] px-4'>
          <div className='flex justify-between items-center px-4 py-4 lg:py-0 border-b border-blue-400 lg:border-b-0'>
            <div className='text-white font-semibold text-3xl'>
              <a href="#"className='px-4 text-4xl'>Hims</a> 
            </div>
            <div>
              <button onClick={() => setOpen(!open)} className='focus:outline-none text-white block lg:hidden'>
              <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path className={!open ? 'block' : 'hidden'} stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                <path className={open ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </button>
            </div>
          </div>

          <div className={`${open ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row w-full justify-end px-4 py-4 lg:py-0`}>
            <a href="" className='block px-4 py-2 lg:py-5 text-blue-300 hover:bg-gray-200 hover:rounded-xl hover:text-blue-500 text-lg'><Link to={"/"}>Home</Link></a>
            <a href="" className='block px-4 py-2 lg:py-5 text-blue-300 hover:bg-gray-200 hover:rounded-xl hover:text-blue-500 text-lg'><Link to={"/about"}>About</Link></a>
            <a href="" className='block px-4 py-2 lg:py-5 text-blue-300 hover:bg-gray-200 hover:rounded-xl hover:text-blue-500 text-lg'><Link to={"/profile"}>Profile</Link></a>
            <a href="" className='block px-4 py-2 lg:py-5 text-blue-300 hover:bg-gray-200 hover:rounded-xl hover:text-blue-500 text-lg'><Link to={"/blog"}>Block</Link></a>
          </div>
        </div>
    </nav>
    );
};

export default Navbar;