import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const UserHome = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    navigate('/')
  }


  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Welcome Message */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl text-center font-semibold mb-6">
        <span>
          Hi, Welcome {user?.displayName ? user?.displayName : "Back"}
        </span>
      </h2>

      {/* User Profile Section */}
      <div className="flex flex-col items-center justify-center mx-auto max-w-md lg:max-w-lg bg-white p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-800 dark:text-gray-100">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary ring-offset-base-100 ring ring-offset-2">
          <img
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://via.placeholder.com/150" // Default placeholder
            }
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Information */}
        <div className="space-y-4 text-center mt-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">
            {user?.displayName || "Guest User"}
          </h2>
          <p className="text-sm sm:text-base dark:text-gray-400">
            {user?.email || "No email provided"}
          </p>
        </div>
      </div>

      {/* User Stats Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="stat bg-gradient-to-r from-purple-400 to-purple-200 text-center py-4 px-6 rounded-lg shadow-md">
          <div className="stat-title text-white text-sm lg:text-base">
            Total Orders
          </div>
          <div className="stat-value text-white text-lg lg:text-2xl">56</div>
        </div>
        <div className="stat bg-gradient-to-r from-amber-400 to-amber-200 text-center py-4 px-6 rounded-lg shadow-md">
          <div className="stat-title text-white text-sm lg:text-base">
            Favorites
          </div>
          <div className="stat-value text-white text-lg lg:text-2xl">23</div>
        </div>
        <div className="stat bg-gradient-to-r from-rose-400 to-rose-200 text-center py-4 px-6 rounded-lg shadow-md">
          <div className="stat-title text-white text-sm lg:text-base">
            Messages
          </div>
          <div className="stat-value text-white text-lg lg:text-2xl">12</div>
        </div>
        <div className="stat bg-gradient-to-r from-sky-500 to-sky-200 text-center py-4 px-6 rounded-lg shadow-md">
          <div className="stat-title text-white text-sm lg:text-base">
            Rewards
          </div>
          <div className="stat-value text-white text-lg lg:text-2xl">5</div>
        </div>
      </div> */}

      {/* User Actions Section */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* <button className="px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary-focus transition duration-200">
          Edit Profile
        </button>
        <button className="px-6 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition duration-200">
          View Orders
        </button> */}
        <button onClick={handleLogOut} className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-400 transition duration-200">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserHome;
