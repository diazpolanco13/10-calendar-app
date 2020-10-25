import React from "react";

export const MovilMenu = ({showMenu}) => {

  return (
    <>
      <div className={`${showMenu ? "block md:hidden" : "hidden md:hidden"}`}>
        <div className="pt-2 pb-3">
          <a
            href="/"
            className="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 transition duration-150 ease-in-out border-l-4 border-indigo-500 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 sm:pl-5 sm:pr-6"
          >
            Calendario
          </a>
          {/* <a
            href="/"
            className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 sm:pl-5 sm:pr-6"
          >
            Team
          </a>
          <a
            href="/"
            className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 sm:pl-5 sm:pr-6"
          >
            Projects
          </a>
          <a
            href="/"
            className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 sm:pl-5 sm:pr-6"
          >
            Calendar
          </a> */}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4 sm:px-6">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-6 text-gray-800">
                Tom Cook
              </div>
              <div className="text-sm font-medium leading-5 text-gray-500">
                tom@example.com
              </div>
            </div>
          </div>
          <div className="mt-3">
            <a
              href="/"
              className="block px-4 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 sm:px-6"
            >
              Your Profile
            </a>
            <a
              href="/"
              className="block px-4 py-2 mt-1 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 sm:px-6"
            >
              Settings
            </a>
            <a
              href="/"
              className="block px-4 py-2 mt-1 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 sm:px-6"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
