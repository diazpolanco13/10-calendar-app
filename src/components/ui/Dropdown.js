import { Menu, Transition } from '@headlessui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/authAction'
import { eventlogout } from '../../actions/eventsAction'
import cara from "../../assets/img/cara-feliz.jpg"
export const Dropdown = () => {

  const { name } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(eventlogout())

   }
  
    return (
        <>
            <Menu>
                  {({ open }) => (
                    <div className="relative ml-3">
                      <div>
                        <Menu.Button
                          className="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
                          id="user-menu"
                          aria-label="User menu"
                          aria-haspopup="true"
                        >
                          <img
                            className="w-8 h-8 rounded-full"
                            src={cara}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
                          <div
                            className="py-1 bg-white rounded-md shadow-xs"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu"
                          >
                    <div
                            className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                              Hola, <span>{name}</span>
                            </div>
                            <Link
                              to="/login"
                              className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                              role="menuitem"
                            >
                              Tu perfil
                            </Link>
                            
                            <Link
                              to="/"
                              className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                              role="menuitem"
                              onClick={ handleLogout }
                            >
                              Salir
                            </Link>
                          </div>
                        </div>
                      </Transition>
                    </div>
                  )}
                </Menu>
        </>
    )
}
