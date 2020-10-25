import React, { useState } from "react";
import { Transition, Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/*
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
*/}
      <nav className="bg-white shadow">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center mr-2 -ml-2 md:hidden">
                {/* Mobile menu button */}
                <button
                  className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  aria-label="Main menu"
                  aria-expanded="false"
                >
                  {/* Icon when menu is closed. */}
                  {/*
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            */}
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* Icon when menu is open. */}
                  {/*
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            */}
                  <svg
                    className="hidden w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center flex-shrink-0">
                <img
                  className="block w-auto h-8 lg:hidden"
                  src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                  alt="Workflow logo"
                />
                <img
                  className="hidden w-auto h-8 lg:block"
                  src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg"
                  alt="Workflow logo"
                />
              </div>
              <div className="hidden md:ml-6 md:flex">
                <a
                  href="/"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-b-2 border-indigo-500 focus:outline-none focus:border-indigo-700"
                >
                  Dashboard
                </a>
                <a
                  href="/"
                  className="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                >
                  Team
                </a>
                <a
                  href="/"
                  className="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                >
                  Projects
                </a>
                <a
                  href="/"
                  className="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                >
                  Calendar
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  {/* Heroicon name: plus */}
                  <svg
                    className="w-5 h-5 mr-2 -ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>New Job</span>
                </button>
              </div>
              <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                <button
                  className="p-1 text-gray-400 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                  aria-label="Notifications"
                >
                  {/* Heroicon name: bell */}
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <div>
                    <button
                      className="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                    >
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                  {/*
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            */}
                  <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
                    <div
                      className="py-1 bg-white rounded-md shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
        <div className="hidden md:hidden">
          <div className="pt-2 pb-3">
            <a
              href="/"
              className="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 transition duration-150 ease-in-out border-l-4 border-indigo-500 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 sm:pl-5 sm:pr-6"
            >
              Dashboard
            </a>
            <a
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
            </a>
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
      </nav>
    </>
  );
};
