import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBasketShopping } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { TbHomeMove } from "react-icons/tb";
import { IoRestaurant } from "react-icons/io5";
import useCarts from "../../../CustomHooks/useCarts";
import { ImSpoonKnife } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import useAdmin from "../../../CustomHooks/useAdmin";
const DashBoart = () => {
  const { data } = useCarts();
  const [isActive, setActive] = useState(false)
  const handleToggle = () => {
    setActive(!isActive)
  }

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
  
  return (
      <>
       {/* Small Screen Navbar */}
     <div className='bg-gray-100 text-gray-800 w-full flex justify-between md:hidden z-50'>
        <div className='block cursor-pointer p-4 font-bold'>  
              <Link to='/' className='flex justify-center'>
                  <span className="font-bold text-lg">
                     <span className='text-cyan-700'>Sip</span> <span className='text-yellow-500'>&</span> <span className='text-violet-500'>Savory</span>
                  </span>
              </Link>
        </div>
        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
    </div>

    {/* Slidebar */}
    <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden overflow-y-auto bg-amber-500 w-64 space-y-6 px-4 py-4 absolute inset-y-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
            <div>
                  <Link to='/' className='w-full hidden md:flex px-4 py-2 justify-center items-center gap-x-2'> 
                      <IoRestaurant className='w-5 h-5'/>
                      <span className="font-bold text-lg">
                        <span className='text-cyan-700'>Sip</span> <span className='text-yellow-500'>&</span> <span className='text-violet-500'>Savory</span>
                      </span>
                  </Link>
            </div>

        {/* Nav Item */}
      <div className="flex flex-col justify-between flex-1">
        <nav>

            {
              isAdmin ? 
              <>
                <NavLink to='/' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <FiHome className='w-5 h-5' />
                <span className='mx-4 font-medium uppercase'>Admin Home</span>
            </NavLink>

            <NavLink to='adminAddItems' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <ImSpoonKnife className='w-5 h-5' />
                <span className='mx-4 font-medium uppercase'>Add Items</span>
            </NavLink>

            <NavLink to='adminManageItem' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <FaListUl className='w-5 h-5' />
                <span className='mx-4 font-medium uppercase'>Manage Items</span>
            </NavLink>
            
                <NavLink to='/' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <FaBook className='w-5 h-5'/>
                <span className='mx-4 font-medium uppercase'>Manage Bookings</span>
            </NavLink>

            <NavLink to='adminAllUsers' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <FaUsers className='w-5 h-5' />
                <span className='mx-4 font-medium uppercase'>All Users</span>
            </NavLink>

              </> 
              : 
              <>
                  <NavLink to='/' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <FiHome className='w-5 h-5' />
                <span className='mx-4 font-medium uppercase'>User Home</span>
            </NavLink>

            <NavLink to='/' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <FaCalendarAlt className='w-5 h-5' />
                <span className='mx-4 font-medium uppercase'>Reservation</span>
            </NavLink>

            <NavLink to='/' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <GiWallet className='w-5 h-5'/>
                <span className='mx-4 font-medium uppercase'>Payment History</span>
            </NavLink>
            
                <NavLink to='cartDash'
                className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <FaCartArrowDown className='w-5 h-5'/>
                <span className='mx-4 font-medium uppercase'>My Cart <span className="bg-pink-600 text-white p-1 rounded-3xl text-xs">+{data?.length || 0}</span></span>
            </NavLink>

            <NavLink to='/' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <MdOutlineRateReview className='w-5 h-5'/>
                <span className='mx-4 font-medium uppercase'>Add Review</span>
            </NavLink>

            <NavLink to='/' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <MdBookmarkAdded className='w-5 h-5' />
                <span className='mx-4 font-medium uppercase'>My Booking</span>
            </NavLink>
              </>
            }

          <hr className="my-5 border-gray-200 dark:border-gray-600" />

            <NavLink to='/' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <FiHome className='w-5 h-5' />
                <span className='mx-4 font-medium uppercase'>Home</span>
            </NavLink>

            <NavLink to='/' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <AiOutlineMenu className='w-5 h-5'/>
                <span className='mx-4 font-medium uppercase'>Menu</span>
            </NavLink>

            <NavLink to='shopDash' 
            className={({ isActive }) =>
              `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                isActive 
                  ? 'bg-blue-800 text-white' // Active state styles
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
              }`
            }>
                <FaBasketShopping className='w-5 h-5' />
                <span className='mx-4 font-medium uppercase'>Shop</span>
            </NavLink>

            <NavLink to='contactDash' className={({ isActive }) =>
                  `flex mt-3 rounded-md items-center px-2 py-2 transition-colors duration-300 transform ${
                    isActive 
                      ? 'bg-blue-800 text-white' // Active state styles
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-gray-700' // Inactive state styles
                  }`
                }>
                <MdContactMail className='w-5 h-5'/>
                <span className='mx-4 font-medium uppercase'>Contact</span>
            </NavLink>

          <hr className="mt-5 border-gray-200 dark:border-gray-600" />
        </nav>
      </div>
        </div>
    
    <div>
       
        <NavLink className={ ({isActive}) => `flex rounded-md items-center px-2 py-2 mt-3 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" ${isActive ? 'text-gray-600' : 'text-gray-700'}`}>
                <TbHomeMove className='w-5 h-5'/>
                <span className='mx-4 font-medium uppercase'>Go To Home</span>
        </NavLink>
    </div>

      </div>
      
      </>
  );
};

export default DashBoart;
