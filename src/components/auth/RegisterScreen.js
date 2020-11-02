import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <div>
      <div className="flex min-h-screen bg-white">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 lg:w-3/6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-sm mx-auto lg:w-96">
            <div>
              <img
                className="w-auto h-12"
                src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-extrabold leading-9 text-gray-900">
                Registrate con tus datos
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Nombres
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="name"
                        type="text"
                        required
                        className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="email"
                        type="email"
                        required
                        className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Contraseña
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="password"
                        name="password"
                        required
                        className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Repetir contraseña
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="password2"
                        name="password2"
                        type="password"
                        required
                        className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        type="checkbox"
                        className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                      />
                      <label
                        htmlFor="remember_me"
                        className="block ml-2 text-sm leading-5 text-gray-900"
                      >
                        Recuerdame
                      </label>
                    </div>

                    <div className="text-sm leading-5">
                      <Link
                        to="/login"
                        className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
                      >
                        ¿Ya tienes cuenta?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="submit"
                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                      >
                        Regístrate
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 hidden w-0 lg:block">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1484981184820-2e84ea0af397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
