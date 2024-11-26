import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

    const handleLogOut = () => {
      logOut()
      navigate('/')
    }
 
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

            {
              !user && <NavLink to='/loginRegTabs' title='Menu' className={({ isActive}) =>
                isActive
                  ? "relative mr-4 text-yellow-400 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
                  : "relative mr-4 text-slate-100 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
              }>Login</NavLink>
            }

              {
                user && <div className='dropdown dropdown-end z-50 mr-4'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div className='w-10 rounded-full'>
                    <img title={user?.displayName}
                      referrerPolicy='no-referrer'
                      alt='User Profile Photo'
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <p className="flex flex-col justify-start items-start">
                      Signed in as <span className='text-rose-800 font-semibold'>{user?.displayName}</span>
                    </p>
                  </li>
                  <li className='mt-2'>
                    <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>
                  </li>
                </ul>
              </div>
              }
  
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

              <NavLink to='/contact-us'  title='Contact' className={({ isActive}) =>
                isActive
                  ? "relative md:mx-4 text-yellow-400 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
                  : "relative md:mx-4 text-slate-100 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
              }>Contact</NavLink>
             
              <NavLink to='/menu' title='Menu' className={({ isActive}) =>
                isActive
                  ? "relative text-yellow-400 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
                  : "relative text-slate-100 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
              }>Menu</NavLink>
              <NavLink title='Order' to="/order"
              className={({ isActive}) =>
                isActive
                  ? "relative md:mx-4 text-yellow-400 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
                  : "relative md:mx-4 text-slate-100 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
              }>Order</NavLink> 
            </div>

            {
              !user && <div className='hidden md:block'>
                <NavLink to='/loginRegTabs' title='Menu' className={({ isActive}) =>
                isActive
                  ? "relative text-yellow-400 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
                  : "relative text-slate-100 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
              }>Login</NavLink>
              </div>
            }
  
            {/* Profile Dropdown */}
            {
              user && 
              <>
              <NavLink title='DashBoard' to='/dashboard/userHome' className={({ isActive}) =>
                isActive
                  ? "relative text-yellow-400 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
                  : "relative text-slate-100 font-semibold transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-400 flex items-center gap-1"
              }>Dashboard</NavLink>

              <div className="dropdown dropdown-end z-50 hidden md:block md:ml-3">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img title={user?.displayName} referrerPolicy="no-referrer" alt="User Profile Photo" src={user?.photoURL} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><p className="flex flex-col justify-start items-start">Signed in as <span className="text-rose-800 font-semibold">{user?.displayName}</span></p></li>
                <li className="mt-2"><button onClick={handleLogOut} className="bg-gray-200 hover:bg-gray-600 hover:text-white block text-center">Logout</button></li>
              </ul>
            </div>
              </>
            }
          </div>
        </div>
      </nav>
    );
};

export default NavBar;