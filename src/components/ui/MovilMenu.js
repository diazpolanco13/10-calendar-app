import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/authAction";
import { eventlogout } from "../../actions/eventsAction";
import cara from "../../assets/img/cara-feliz.jpg"
export const MovilMenu = ({showMenu}) => {

  const { name } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(eventlogout())

   }
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
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4 sm:px-6">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full"
                src={cara}
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-6 text-gray-800">
                {name}
              </div>
              
            </div>
          </div>
          <div className="mt-3">
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 mt-1 text-base font-medium text-left text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 sm:px-6"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
