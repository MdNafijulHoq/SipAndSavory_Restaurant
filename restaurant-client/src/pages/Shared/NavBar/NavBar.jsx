import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed z-50 bg-opacity-30 bg-black max-w-screen-xl mx-auto w-full top-0">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
          <Link to='/' className='flex justify-center'>
                <span className="font-bold text-lg">
                  <span className='text-cyan-700'>Sip</span> <span className='text-yellow-500'>&</span> <span className='text-violet-500'>Savory</span>
                </span>
            </Link>
  
            {/* Mobile menu button */}
            <div className="flex md:hidden lg:hidden">
              <div className='dropdown dropdown-end z-50 mr-4'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div className='w-10 rounded-full'>
                    <img
                      referrerPolicy='no-referrer'
                      alt='User Profile Photo'
                      src='https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <p className="flex flex-col justify-start items-start">
                      Signed in as <span className='text-rose-800 font-semibold'>zoey@example.com</span>
                    </p>
                  </li>
                  <li><a href='#'>Bid Requests</a></li>
                  <li className='mt-2'>
                    <button className='bg-gray-200 block text-center'>Logout</button>
                  </li>
                </ul>
              </div>
  
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
  
          {/* Mobile Menu */}
          <div
            className={`${
              isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black opacity-85 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <NavLink to='/' title='Home' className={({ isActive}) =>
                isActive
                  ? "relative text-yellow-400 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
                  : "relative text-slate-100 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
              }>Home</NavLink>
              <a title='Contact Us' href="#" className="my-2 text-slate-100 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 md:mx-4 md:my-0">Contact Us</a>
              <a title='Dashboard' href="#" className="my-2 text-slate-100 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 md:mx-4 md:my-0">Dashboard</a>
              <NavLink to='/menu' title='Menu' className={({ isActive}) =>
                isActive
                  ? "relative text-yellow-400 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
                  : "relative text-slate-100 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
              }>Menu</NavLink>
            </div>
  
            <div className="flex justify-start md:block mr-8">
              <NavLink title='Order' to="/order"
              className={({ isActive}) =>
                isActive
                  ? "relative text-yellow-400 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
                  : "relative text-slate-100 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
              }>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>Order
              </NavLink>
            </div>
  
            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end z-50 hidden md:block">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img title='Zoey' referrerPolicy="no-referrer" alt="User Profile Photo" src="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><p className="flex flex-col justify-start items-start">Signed in as <span className="text-rose-800 font-semibold">zoey@example.com</span></p></li>
                <li><a href='#'>Bid Requests</a></li>
                <li className="mt-2"><button className="bg-gray-200 block text-center">Logout</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;